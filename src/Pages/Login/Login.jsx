import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useRef } from "react";

const Login = () => {
  const emailRef = useRef();

  const { signIn } = useAuth();

  const { resetPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please provide your email address for Forget password");
      return;
    }
    resetPassword(email)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Please check your email",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content ">
            <div className="card max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    ref={emailRef}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <span className="text-red-500">Password is required</span>
                  )}
                  <label className="label">
                    <p className="label-text-alt link link-hover">
                      Forgot password?
                    </p>
                    <button
                      onClick={handleResetPassword}
                      className="btn btn-link">
                      Reset Password
                    </button>
                  </label>
                </div>
                <div className="form-control">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="login"
                  />
                </div>
              </form>
              <p className="text-center">
                <small>
                  New Here?{" "}
                  <Link className="font-bold text-orange-500" to="/signUp">
                    Create A New Account
                  </Link>
                </small>
              </p>
              <GoogleLogin></GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
