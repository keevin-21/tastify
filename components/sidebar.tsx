import { cn } from "@/lib/utils";
import {
    ClerkLoading,
    ClerkLoaded,
    UserButton,    
} from "@clerk/nextjs";
import { Loader } from "lucide-react"; 
import { SidebarItem } from "./sidebar-item";
import Image from "next/image";
import Link from "next/link";

type Props = {
    className?: string;
}

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn(
            "flex bg-blue-100 h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
            className
        )}>
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
                        <h1 className="text 2xl font-extrabold text-slate-900">
                            Tastify
                        </h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem
                    label="Learn"
                    href="/learn"
                    iconSrc="/learn.svg"    //put svg icon in public folde4r
                />

                <SidebarItem
                    label="Leaderboard"
                    href="/leaderboard"
                    iconSrc="/learn.svg"    //put svg icon in public folde4r
                />

                <SidebarItem
                    label="Quests"
                    href="/quests"
                    iconSrc="/learn.svg"    //put svg icon in public folde4r
                />

                <SidebarItem
                    label="Shop"
                    href="/Shop"
                    iconSrc="/learn.svg"    //put svg icon in public folde4r
                />
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                    <ClerkLoaded>
                        <UserButton afterSignOutUrl="/" /*this button doesnt work*//>
                    </ClerkLoaded>
                </ClerkLoading>
            </div>
        </div>    
    );
};