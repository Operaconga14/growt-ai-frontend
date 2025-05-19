import { NavLink } from "react-router-dom";
import Icon from "../shared/Icon";
import Image from "../shared/Image";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className="navbar navbar-expand-lg bg-transparent sticky-top px-5 shadow-sm">
      <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
        <NavLink to={"/"} className={`${styles.logoContainer}`}>
          <Image
            src={"/logo.png"}
            altText="Logo"
            className={`${styles.logo} img-fluid`}
          />
        </NavLink>

        <button
          className="btn btn-transparent border-0 shadow-none outline-0 navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon className="bi-list bi" />
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active text-decoration-none" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-decoration-none" href="signup">
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-decoration-none" href="login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

