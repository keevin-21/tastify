"use server";        

import db from "@/db/drizzle";
import { getCourseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId: number) => {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
        throw new Error("User not authenticated");
    }

    const course = await getCourseById(courseId);

    if (!course) {
        throw new Error("Course not found");
    }

    // throw new Error("error test")

    // if (!course.units.length || !course.units[0].lessons.length) {
    //     throw new Error("Course has no lessons");
    // }
    // TODO: enable once units and lessons are added

    const existingUserProgress = await getUserProgress();

    if (existingUserProgress) {
        await db.update(userProgress).set({
            activeCourseId: courseId,
            userName: user.firstName || "User",
            userImageSrc: user.imageUrl || "/mascot.png" // change to a "default user image"
        });

        revalidatePath("/courses");
        revalidatePath("/learn");
        redirect("/learn")
    };

    await db.insert(userProgress).values({
        userId,
        activeCourseId: courseId,
        userName: user.firstName || "User",
        userImageSrc: user.imageUrl || "/mascot.png" // change to a "default user image"
    });

    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn")
};