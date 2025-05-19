
import { useSideBarStore } from "../services/useSideBarStore";
import { useSidebarEffect } from "../services/useSidebarEffect";
import { IconButton } from "./Buttons";

export default function SideBbarToggleButton() {
    const toggleSidebar = useSideBarStore((state) => state.toggleSidebar)
    useSidebarEffect()
    return (
        <>
            <IconButton text={""} className="btn-transparent border-0 btn" icon={"bi bi-list"} onClick={() => toggleSidebar()} />
        </>
    )
}