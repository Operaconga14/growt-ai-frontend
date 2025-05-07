import { useSidebarEffect } from "../services/useSideBarEffect";
import { useSidebarStore } from "../services/useSidebarStore";
import Button from './Button';

export default function SideBarToggleButton()
{
    const toggleSidebar = useSidebarStore( ( state ) => state.toggleSidebar )
    useSidebarEffect()

    return (
        <>
            <Button buttonText={""} style={[ { buttonStyle: 'btn-transparent border-0 btn' }, { iconStyle: 'bi bi-list' } ]} onClick={() => toggleSidebar()} />
        </>
    )
}