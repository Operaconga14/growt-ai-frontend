import { IconButton, NormalButton } from "../../shared/Buttons"
import { CustomCard } from "../../shared/Cards"
import styles from "../../styles/Dashboard.module.css"

export default function Dashboard() {
  return (
    <div className="min-vh-100 d-block pb-5">
      <div className={`${styles.dashboardHeader} shadow-sm py-2 d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center px-3 gap-3`}>
        {/* Left section */}
        <div className="d-flex flex-column w-100 w-sm-auto">
          <h3 className="p-0 m-0">Dashboard</h3>
          <small className="p-0 m-0 text-muted">Track your progress and manage your challenge</small>
        </div>

        {/* Right section */}
        <div className="others d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2 w-100 w-sm-auto">
          <div className="d-flex gap-2">
            <IconButton icon="bi bi-bell" onClick={() => { }} text="" className="btn btn-outline-transparent border-dark" />
            <IconButton icon="bi bi-calendar" onClick={() => { }} text="" className="btn btn-outline-transparent border-dark" />
          </div>
          <input
            className="form-control w-100 w-sm-auto"
            type="search"
            placeholder="Search challenges..."
            onChange={() => console.log("I am changed")}
          />
        </div>
      </div>
      {/* Filter Section */}
      <div className="filter d-flex flex-sm-colunm gap-3 px-4 mt-4 d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
        <IconButton text={"Filter"} className={`${styles.filterButton} px-3 py-1`} icon={"bi bi-funnel"} onClick={() => { }} />
        <NormalButton text={"All Challenges"} className={`${styles.filterButton} px-3 py-1`} onClick={() => { }} />
        <NormalButton text={"In Progress"} className={`${styles.filterButton} px-3 py-1`} onClick={() => { }} />
        <NormalButton text={"Completed"} className={`${styles.filterButton} px-3 py-1`} onClick={() => { }} />
        <NormalButton text={"Upcoming"} className={`${styles.filterButton} px-3 py-1`} onClick={() => { }} />
      </div>

      {/* Tracker Brief Section */}
      <div className="d-flex flex-sm-row px-3 mt-5 gap-4 d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
        <CustomCard className="" cardBodyClassName="d-flex flex-column" style={{ width: "100%", maxWidth: "200px" }} descriptionClassName="text-muted order-1" titleClassName="fw-bolder fs-4 mt-2 order-2" description="Active Challenge" icon="bi bi-fire text-warning" iconStyle={{ alignSelf: "flex-end" }} title="5" />
        <CustomCard className="" cardBodyClassName="d-flex flex-column" style={{ width: "100%", maxWidth: "200px" }} descriptionClassName="text-muted order-1" titleClassName="fw-bolder fs-4 mt-2 order-2" description="Completed" icon="bi bi-check text-success" iconStyle={{ alignSelf: "flex-end" }} title="12" />
        <CustomCard className="" cardBodyClassName="d-flex flex-column" style={{ width: "100%", maxWidth: "200px" }} descriptionClassName="text-muted order-1" titleClassName="fw-bolder fs-4 mt-2 order-2" description="Current Streak" icon="bi bi-calendar text-primary" iconStyle={{ alignSelf: "flex-end" }} title={`7 days`} />
        <CustomCard className="" cardBodyClassName="d-flex flex-column" style={{ width: "100%", maxWidth: "200px" }} descriptionClassName="text-muted order-1" titleClassName="fw-bolder fs-4 mt-2 order-2" description="Next MileStone" icon="bi bi-award text-purple" iconStyle={{ alignSelf: "flex-end" }} title={`5 days`} />
      </div>
    </div>
  )
}