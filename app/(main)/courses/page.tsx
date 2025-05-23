import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";

const CoursesPage = async () => {
    const coursesPromise = getCourses();
    const userProgressPromise = getUserProgress();

    const [
        courses,
        userProgress,
    ] = await Promise.all([coursesPromise, userProgressPromise]);

    return ( 
        <div className="mx-auto h-full max-w-[912px] px-3">
            <h1 className="text-2xl font-bold text-[#f5f5f5]">
                Which cuisine do you want to learn today?
            </h1>
            <List
                courses={courses}
                activeCourseId={userProgress?.activeCourseId}
            />
        </div>
     );
};
 
export default CoursesPage;