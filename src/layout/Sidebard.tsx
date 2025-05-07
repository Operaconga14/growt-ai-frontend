import { AnimatePresence, motion } from "framer-motion";
import { useSidebarStore } from "../services/useSidebarStore"
import SideBarToggleButton from '../shared/SidebarToggleButton';
import { navItems } from "../services/navItems";
import { NavLink } from "react-router-dom";
import Footer from './Footer';
import Profile from '../shared/Profile';
import Logo from '../shared/Logo';

export default function Sidebar()
{

    const isOpen = useSidebarStore( ( state ) => state.isOpen )
    const toggleSidebar = useSidebarStore( ( state ) => state.toggleSidebar )


    return (
        <>
            {/* Toggle Button */}
            <div
                className="position-fixed top-0 z-3 p-2"
                style={{
                    left: isOpen ? "240px" : "0",
                    transition: "left 0.3s ease"
                }}
            >
                <SideBarToggleButton />
            </div>
            {/* Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="position-fixed top-0 start-0 bg-white border-end shadow-sm p-3 vh-100 z-2"
                        style={{ width: "240px" }}
                    >
                        {/* Logo */}
                        <div className="border-bottom mb-3">
                            <Logo />
                        </div>

                        {/* Navigation */}
                        <nav>
                            <ul className="list-unstyled">
                                {navItems.map( ( { name, to, icon } ) => (
                                    <li className="mb-2 p-2">
                                        <NavLink
                                            to={to}
                                            className={( { isActive } ) =>
                                                `d-flex align-items-center gap-2 px-3 py-3 text-decoration-none rounded ${isActive ? "bg-light fw-bold text-primary" : "text-dark"}`
                                            }
                                        >
                                            {icon}
                                            {name}
                                        </NavLink>
                                    </li>
                                ) )}
                            </ul>
                        </nav>


                        {/* Profile */}
                        <div className="mt-auto border-top pt-3 fixed-bottom px-3 py-2" style={{ width: "240px" }}>
                            <div className="">
                                <Profile username={"Opera"} subscription={"Membership"} imageUrl={""} />
                            </div>
                            {/* footer */}
                            <div className="m-0 p-0 text-center" style={{ padding: "0px" }}>
                                <hr className="text-muted" style={{ width: "240px", marginTop: "15px", marginBottom: "5px", marginLeft: "-16px" }} />
                                <div style={{ marginBottom: "-20px" }}>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50 z-1 d-lg-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleSidebar}
                    />
                )}
            </AnimatePresence>
        </>
    )
}