import { IconButton, NormalButton } from "../../shared/Buttons";
import HorizontalLine from "../../shared/HorizontalLine";
import Icon from "../../shared/Icon";
import styles from "../../styles/Auth.module.css";

export default function Signup() {
  return (
    <div className={`d-flex justify-content-center align-items-center min-vh-100 text-white ${styles.body}`}>
      <div className={`${styles.card} card shadow`}>
        <div className="card-body">
          <div className="mt-1">
            <a href="/" className="text-white text-decoration-none"><small> <Icon className="bi bi-arrow-left" /> Back home</small></a>
          </div>
          <div className="mt-3 text-center">
            <p className="fs-2 fw-bolder text-white">Signup</p>
          </div>
          {/* Sign Up Form */}
          <form>
            {/* Name Field */}
            <div className="mb-3">
              <label htmlFor="name" className={`${styles.formLabel} form-label`}>
                Name
              </label>
              <input
                type="text"
                className={`${styles.formControl} form-control`}
                id="name"
                placeholder="Enter your name"
              />
            </div>
            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className={`${styles.formLabel} form-label`}>
                Email
              </label>
              <input
                type="email"
                className={`${styles.formControl} form-control`}
                id="email"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className={`${styles.formLabel} form-label`}>
                Password
              </label>
              <input
                type="password"
                className={`${styles.formControl} form-control`}
                id="password"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password Field */}
            <div className="mb-3">
              <label htmlFor="confirmPassword" className={`${styles.formLabel} form-label`}>
                Confirm Password
              </label>
              <input
                type="password"
                className={`${styles.formControl} form-control`}
                id="confirmPassword"
                placeholder="Confirm your password"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <NormalButton className="btn btn-outline-light" text={"Signup"} onClick={() => { }} />
            </div>
          </form>

          {/* Other Sigunp Means */}

          <div className="d-flex justif-content-center  mt-3">
            <HorizontalLine styles={{ color: "whitesmoke", width: "13.5vw", maxWidth: "25vw" }} className="d-none d-md-none d-lg-block" />
            <p className={`mx-3 text-white fw-bolder ${styles.orText}`} style={{ flex: "1 1 auto", textAlign: "center" }}>Or</p>
            <HorizontalLine styles={{ color: "whitesmoke", width: "13.5vw", maxWidth: "25vw" }} className="d-none d-md-none d-lg-block" />
          </div>

          {/* Google Button */}
          <div className="text-center">
            <IconButton text={"Signup with Google"} className="btn btn-outline-light btn-sm" classNameIconText="d-flex flex-row-reverse gap-2" icon={"bi bi-google text-danger"} onClick={() => { }} />
          </div>

          {/* For Those that Already Have an account */}

          <div className="text-center mt-4">
            <p className="small text-white">Already have an account? <a href="/login">Login</a></p>
          </div>

        </div>
      </div>
    </div>
  );
}