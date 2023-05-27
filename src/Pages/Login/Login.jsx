import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { singIn } = useContext(AuthContext);
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    // console.log(value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss || logIn</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="card flex-shrink-0 w-full max-w-sm shadow bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="text"
                    name="captcha"
                    required
                    placeholder="type"
                    className="input input-bordered"
                    ref={captchaRef}
                  />
                  <button
                    onClick={handleCaptcha}
                    className="btn btn-outline btn-xs mt-3"
                  >
                    Validate
                  </button>
                </div>

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary"
                    disabled={disabled}
                  />
                </div>
              </div>
            </div>
          </form>
          <p>
            <span>New Here ? </span>
            <Link to="/signup" className="hover:underline text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
