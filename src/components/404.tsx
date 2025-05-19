import Icon from "../shared/Icon";
import styles from "../styles/404.module.css";

export default function NotFound() {
  return (
    <div
      className={`${styles.body} min-vh-100 d-flex justify-content-center align-items-center`}
    >
      <h1 className={`${styles.h1} d-flex flex-column text-center fw-bolder`}>
        <Icon className="bi bi-slash-circle" />
        <span className="small fs-2 fw-4">Page Not Found</span>
        <a className="fs-6 fw-normal" href="/">Back home</a>
      </h1>
    </div>
  );
}


