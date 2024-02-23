import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../State/Auth/Action";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)

  useEffect(()=>{
    if(jwt){

      dispatch(getUser(jwt))
    }
  },[jwt,auth.jwt])



  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      userName: data.get("userName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(register(userData))

    console.log("userData", userData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-gray-600 mb-6">
          Create your Account
        </h5>
        <Grid container>
          <Grid item xs={12}>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
            >
              Your Username
            </label>

            <input
              type="text"
              name="userName"
              id="userName"
              className="bg-white-50 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-2.5 dark:bg-gray-100 border dark:border-orange-500 dark:placeholder-gray-400 dark:text-black"
              placeholder="Username"
              autoComplete="username"
              required
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
            >
              Your Email
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
              Your Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="Password"
                placeholder="••••••••"
                autoComplete="password"
                className="bg-white-50 text-gray-600 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-2.5 dark:bg-gray-100 border dark:border-orange-500 dark:placeholder-gray-400 dark:text-gray-600"
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
          <Grid item xs={12} mt={2}>
            <button
              type="submit"
              className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Register your account
            </button>

            <div className="text-sm font-medium text-gray-600 dark:text-gray-600 mt-4 ml-1">
              if you already have a account ?{" "}
              <a
                href="#"
                className="text-orange-700 font-semibold hover:underline dark:text-orange-500 ml-4"
                onClick={() => navigate("/login")}
              >
                Login
              </a>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Register;
