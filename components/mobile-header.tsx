import { MobileSidebar } from "./mobile-sidebar"

export const MobileHeader = () => {
    return (
        <nav className="lg:hidden px-6 h-[50px] flex items-center bg-[#FF6F1F] border-b fixed top-0 w-full z-50">
            <MobileSidebar />
        </nav>
    )
}