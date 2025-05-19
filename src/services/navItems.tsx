import Icon from "../shared/Icon";



export const navItems = [
    {
        name: "Home",
        to: "/",
        icon: <Icon className={"bi bi-house-door"} />,
    },
    {
        name: "Dashboard",
        to: "/dashboard",
        icon: <Icon className={"bi bi-bar-chart"} />,
    },
    {
        name: "My Challenges",
        to: "/challenges",
        icon: <Icon className={"bi bi-award"} />,
    },
    {
        name: "Add Challenge",
        to: "/challenges/new",
        icon: <Icon className={"bi bi-plus-circle"} />,
    },
    {
        name: "Progress",
        to: "/progress",
        icon: <Icon className={"bi bi-graph-up"} />,
    },
    {
        name: "AI Assistant",
        to: "/assistant",
        icon: <Icon className={"bi bi-chat"} />,
    },
    {
        name: "Settings",
        to: "/settings",
        icon: <Icon className={"bi bi-sliders"} />,
    },
];
