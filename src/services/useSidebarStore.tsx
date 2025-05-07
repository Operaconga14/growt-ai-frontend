import { create } from "zustand";
import { SideBarProps } from "../props/sideBarProps";

export const useSidebarStore = create<SideBarProps>( ( set ) => ( {
    isOpen: false,
    toggleSidebar: () => set( ( state ) => ( { isOpen: !state.isOpen } ) ),
    closeSidebar: () => set( { isOpen: false } ),
    setOpen: ( open ) => set( { isOpen: open } )
} ) )