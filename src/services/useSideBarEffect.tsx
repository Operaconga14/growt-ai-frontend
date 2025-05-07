import { useEffect } from "react"
import { useSidebarStore } from "./useSidebarStore"

export const useSidebarEffect = () =>
{
    const isOpen = useSidebarStore( ( state ) => state.isOpen )
    const setOpen = useSidebarStore( ( state ) => state.setOpen )
    const closeSidebar = useSidebarStore( ( state ) => state.closeSidebar )

    // Close modal on mobile route
    useEffect( () =>
    {
        const handleRouteChange = () =>
        {
            if ( window.innerWidth < 1024 )
            {
                closeSidebar()
            }
        }

        window.addEventListener( "popstate", handleRouteChange )
        return () =>
        {
            window.removeEventListener( "popstate", handleRouteChange )
        }
    }, [ closeSidebar ] )

    // Close on outside click for mobile
    useEffect( () =>
    {
        const handleClickOutside = ( event: MouseEvent ) =>
        {
            if ( isOpen && window.innerWidth < 1024 && !( event.target as Element ).closest( '[data-sidebar="true"]' ) )
            {
                closeSidebar()
            }
        }

        document.addEventListener( "mousedown", handleClickOutside )
        return () =>
        {
            document.removeEventListener( "mousedown", handleClickOutside )
        }
    }, [ isOpen, closeSidebar ] )

    // Adjust state on screen resize
    useEffect( () =>
    {
        const handleResize = () =>
        {
            setOpen( window.innerWidth >= 1024 )
        }

        handleResize()
        window.addEventListener( "resize", handleResize )
        return () =>
        {
            window.removeEventListener( "resize", handleResize )
        }
    }, [ setOpen ] )
}