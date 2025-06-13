import { useState } from "react";
import { IconButton, NormalButton } from "../../shared/Buttons";
import HorizontalLine from "../../shared/HorizontalLine";
import Icon from "../../shared/Icon";
import styles from "../../styles/Auth.module.css";
import { Post } from "../../services/apiService";
import { AlertBox } from "../../shared/AlertBox";
import { useNavigate } from "react-router-dom";

export default function Signup()
{

  const [ form, setForm ] = useState( {
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  } )

  const [ alert, setAlert ] = useState( {
    show: false,
    title: "",
    message: "",
    type: ""
  } )

  const navigate = useNavigate()

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>
  {
    setForm( { ...form, [ e.target.name ]: e.target.value } )
  }

  const handleRegister = async ( e: React.FormEvent<HTMLFormElement> ) =>
  {
    e.preventDefault();
    // console.log( 'Form Value', form )

    Post( 'auth/register', form )
      .then( response =>
      {
        // console.log( "Token", response.data )

        setAlert( {
          show: true,
          title: "Success",
          message: response.data.detail.message,
          type: "bg-success"
        } )

        navigate( '/login' )

      } )
      .catch( error =>
      {
        setAlert( {
          show: false,
          title: "Error",
          message: error.response.data.detail.message,
          type: "bg-danger"
        } )
        // console.log( error )
        setAlert( {
          show: true,
          title: "Error",
          message: error.response.data.detail.message,
          type: "bg-danger"
        } )
      } )


  }

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
          <form onSubmit={handleRegister}>
            {/* Username Field */}
            <div className="mb-3 form-group">
              <label htmlFor="name" className={`${styles.formLabel} form-label`}>
                Username
              </label>
              <input type="text" placeholder="Enter your name" className={`${styles.formControl} form-control`} id="username" name="username" onChange={handleChange} value={form.username} />
            </div>
            {/* Name Field */}
            <div className="mb-3 form-group">
              <label htmlFor="name" className={`${styles.formLabel} form-label`}>
                Name
              </label>
              <input type="text" placeholder="Enter your name" className={`${styles.formControl} form-control`} id="name" name="name" onChange={handleChange} value={form.name} />
            </div>
            {/* Email Field */}
            <div className="mb-3 form-group">
              <label htmlFor="email" className={`${styles.formLabel} form-label`}>
                Email
              </label>
              <input type="email" placeholder="Enter your email address" className={`${styles.formControl} form-control`} id="email" name="email" onChange={handleChange} value={form.email} />
            </div>
            {/* Password Field */}
            <div className="mb-3 form-group">
              <label htmlFor="password" className={`${styles.formLabel} form-label`}>
                Password
              </label>
              <input type="password" placeholder="Enter your password" className={`${styles.formControl} form-control`} id="password" name="password" onChange={handleChange} value={form.password} />
            </div>

            {/* Confirm Password Field */}
            <div className="mb-3 form-group">
              <label htmlFor="consfirm-pass" className={`${styles.formLabel} form-label`}>
                Confirm Password
              </label>
              <input type="password" placeholder="Confirm password" className={`${styles.formControl} form-control`} id="confirmPassword" name="confirmPassword" onChange={handleChange} value={form.confirmPassword} />
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
      {alert.show && (
        <AlertBox alertClassName={`${alert.type} text-white px-3 py-1 rounded`} title={alert.title} message={alert.message} role="alert" style={{ position: "fixed", top: "20px", right: "20px", zIndex: "9999", width: "100%", maxWidth: "300px" }} />
      )}
    </div>
  );
}