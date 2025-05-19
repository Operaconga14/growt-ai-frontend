import { AnimatePresence, motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { navItems } from "../services/navItems"
import SideBbarToggleButton from "../shared/SidebarToggleButton"
import { useSideBarStore } from "../services/useSideBarStore"
import Image from "../shared/Image"

export default function Sidebar() {

    const isOpen = useSideBarStore((state) => state.isOpen)
    const toggleSidebar = useSideBarStore((state) => state.toggleSidebar)


    return <>
        {/* Toggle Button */}
        <div
            className="position-fixed top-0 z-3 p-2"
            style={{
                left: isOpen ? "240px" : "0",
                transition: "left 0.3s ease"
            }}
        >
            <SideBbarToggleButton />
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
                        <Image src={"/logo.png"} styles={{width: "180px", marginBottom: "-50px", marginTop: "-60px"}} />
                        {/* <Logo imageStyle={{}} className={"logo img-fluid"} src={"/logo.png"} altText={"Logo"} /> */}
                    </div>

                    {/* Navigation */}
                    <nav>
                        <ul className="list-unstyled">
                            {navItems.map(({ name, to, icon }) => (
                                <li className="mb-2 p-2">
                                    <NavLink
                                        to={to}
                                        className={({ isActive }) =>
                                            `d-flex align-items-center gap-2 px-3 py-3 text-decoration-none rounded ${isActive ? "bg-light fw-bold text-primary" : "text-dark"}`
                                        }
                                    >
                                        {icon}
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>


                    {/* Profile */}
                    <div className="mt-auto border-top pt-3 fixed-bottom px-3 py-2" style={{ width: "240px" }}>
                        <div className="">
                            Profile
                            {/* <Profile username={"Opera"} subscription={"Membership"} imageUrl={""} /> */}
                        </div>
                        {/* footer */}
                        <div className="m-0 p-0 text-center" style={{ padding: "0px" }}>
                            <hr className="text-muted" style={{ width: "240px", marginTop: "15px", marginBottom: "5px", marginLeft: "-16px" }} />
                            <div style={{ marginBottom: "-20px" }}>
                                {/* <Footer /> */}
                                Footer
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

}