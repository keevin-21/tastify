import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {
    activeCourse: { imageSrc: string; title: string }; // TODO: replace w database types
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
                <Button className="text-orange-500">
                    <Image src="/shop.png" height={28} width={28} alt="shop" className="mr-2">
                        { points }
                    </Image>
                </Button>
            </Link>
            <Link href="/shop">
                <Button className="text-rose-500">
                    <Image src="/shop.png" height={28} width={28} alt="shop" className="mr-2">
                        { hearts }
                    </Image>
                </Button>
            </Link>
        </div>
    );
};