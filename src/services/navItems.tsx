import Icon from "../shared/Icon";

export const navItems = [
    { name: "Home", to: "/", icon: <Icon style={""} name={"bi bi-house-door"} /> },
    { name: "Dashboard", to: "/dashboard", icon: <Icon style={""} name={"bi bi-bar-chart"} /> },
    { name: "My Challenges", to: "/challenges", icon: <Icon style={""} name={"bi bi-award"} /> },
    { name: "Add Challenge", to: "/challenges/new", icon: <Icon style={""} name={"bi bi-plus-circle"} /> },
    { name: "Progress", to: "/progress", icon: <Icon style={""} name={"bi bi-graph-up"} /> },
    { name: "AI Assistant", to: "/assistant", icon: <Icon style={""} name={"bi bi-chat"} /> },
    { name: "Settings", to: "/settings", icon: <Icon style={""} name={"bi bi-sliders"} /> },
]