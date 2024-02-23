import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../State/Auth/Action";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(login(userData));
    console.log("userData", userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-gray-600 mb-4">
          Sign in to our platform
        </h5>
        <Grid container>
          <Grid item xs={12} mt={2}>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
            >
              Your email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="bg-white-50 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-2.5 dark:bg-gray-100 border dark:border-orange-500 dark:placeholder-gray-400 dark:text-black"
              placeholder="mail@domain.com"
              autoComplete="email"
              required
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
            >
              Your password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="Password"
                placeholder="••••••••"
                autoComplete="password"
                className="bg-white-50 text-gray-600 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-2.5 dark:bg-gray-100 border dark:border-orange-500 dark:placeholder-gray-400 dark:text-black"
                required
              />
              <span
                className="absolute right-2 items-center mt-[7px] cursor-pointer text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <VisibilityIcon /> 
                ) : (
                  <VisibilityOffIcon/>
                )}
              </span>
            </div>
          </Grid>
        </Grid>
        <div className="flex items-start mt-5 ml-1 mr-1 mb-5">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
            >
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="ml-auto text-sm text-orange-700 hover:underline dark:text-orange-500"
          >
            Lost Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          Login to your account
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-500 mt-4 ml-1">
          Not registered?{" "}
          <a
            href="#"
            className="text-orange-700 hover:underline dark:text-orange-500 ml-3"
            onClick={() => navigate("/register")}
          >
            Create an account
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
