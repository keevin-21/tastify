import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
import { courses } from "@/db/schema";

type Props = {
    activeCourse: typeof courses.$inferSelect;
    hearts: number;
    points: number;
    hasActiveSuscription: boolean;
};

export const UserProgress = ({
    activeCourse,
    points,
    hearts,
    hasActiveSuscription
}: Props) => {
    return(
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="/courses">
                <Button variant="ghost">
                    <Image 
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        className="rounded-md border"
                        width={32}
                        height={32}
                    />
                </Button>
            </Link>
            <Link href="/shop">
                <Button className="text-orange-500" variant="ghost">
                    <Image src="/points.png" height={28} width={28} alt="shop" className="mr-2" />
                        { points }
                </Button>
            </Link>
            <Link href="/shop">
                <Button className="text-rose-500" variant="ghost">
                    <Image src="/heart.png" height={22} width={22} alt="shop" className="mr-2" />
                        { hasActiveSuscription
                            ? <InfinityIcon className=" h-4 w-4 stroke-[3]" />
                            : hearts
                        }
                </Button>
            </Link>
        </div>
    );
};