import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "../styles/Dashboard.module.css"

export default function DashboardLayout() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className={`${styles.dashboardContent} main-content`}>
        <Outlet />
      </div>
    </div>
  );
}
