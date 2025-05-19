import { useNavigate } from "react-router-dom";
import { IconButton, NormalButton } from "../shared/Buttons";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className={`${styles.h1} fw-bolder text-center`}>
        Meet Your Personal AI <br /> Challenge Coach
      </h1>
      <p className="text-center text-muted small">
        Transform your goats into achievements with peronal AI <br /> guidiance
        progress tracking, and daily motivation to keep you on track
      </p>

      {/* Buttons */}
      <div className="d-flex justify-content-center gap-4 mt-5">
        <IconButton
          text={"Get Started"}
          onClick={() => navigate("/signup")}
          className="btn btn-gradient text-white"
          icon={"bi bi-arrow-right order-2"}
          classNameIconText="d-flex flex-row gap-3 "
        />
        <NormalButton
          className="btn btn-light"
          text={"Learn More"}
          onClick={() => navigate("/docs")}
        />
      </div>
    </div>
  );
}
