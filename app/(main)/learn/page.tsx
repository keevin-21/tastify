import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { Header } from "./header";
import { getCourseProgress, getLessonPercent, getUnits, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { units } from "@/db/schema";
import { Unit } from "./unit";

const LearnPage = async () => {
    const userProgressPromise = getUserProgress();
    const unitsData = getUnits();
    const courseProgressPromise = getCourseProgress();
    const lessonPercentPromise = getLessonPercent();
    

    const [
        userProgress,
        units,
        courseProgress,
        lessonPercent,
    ] = await Promise.all([
        userProgressPromise,
        unitsData,
        courseProgressPromise,
        lessonPercentPromise,
    ]);

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }

    if (!courseProgress) {
        redirect("/courses");
    }

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper /*i can use flex-row-reverse here*/>
                <UserProgress

                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSuscription={false}    
                />
            </StickyWrapper>
            
            <FeedWrapper /*and here*/>
                <Header title={userProgress.activeCourse.title} />
                { units.map((unit) => (
                    <div key={unit.id} className="mb-10">
                        <Unit
                            id={unit.id}
                            order={unit.order}
                            description={unit.description}
                            title={unit.title}
                            lessons={unit.lessons}
                            activeLesson={courseProgress.activeLesson}
                            activeLessonPercent={lessonPercent}
                        />
                    </div>
                ))}
            </FeedWrapper>
        </div>
    );
};

export default LearnPage;