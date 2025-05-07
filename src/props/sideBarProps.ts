export interface SideBarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    setOpen: (open: boolean) => void;
}
