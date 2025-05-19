import { useEffect } from "react"
import { useSideBarStore } from "./useSideBarStore"

export const useSidebarEffect = () => {
    const isOpen = useSideBarStore((state) => state.isOpen)
    const setOpen = useSideBarStore((state) => state.setOpen)
    const closeSidebar = useSideBarStore((state) => state.closeSidebar)

    // Close modal on mobile route
    useEffect(() => {
        const handleRouteChange = () => {
            if (window.innerWidth < 1024) {
                closeSidebar()
            }
        }

        window.addEventListener("popstate", handleRouteChange)
        return () => {
            window.removeEventListener("popstate", handleRouteChange)
        }
    }, [closeSidebar])

    // Close on outside click for mobile
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && window.innerWidth < 1024 && !(event.target as Element).closest('[data-sidebar="true"]')) {
                closeSidebar()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen, closeSidebar])

    // Adjust state on screen resize
    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth >= 1024)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [setOpen])
}