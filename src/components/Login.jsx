import React, { useRef, useState } from "react";
import Header from "./Header";
import { useFormik } from "formik";
import validationSchema from "../utils/validation";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (val) => {
      console.log(val);
    },


  });

  const handleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="h-screen w-screen relative">
      <Header />

      <div className="absolute  h-full w-full">
        <img
          className="w-full h-full object-cover "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_medium.jpg"
          alt=""
        />
      </div>

      <div className="flex opacity-75 items-center justify-center h-full  ">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-black flex flex-col gap-8 w-10/12 sm:w-1/3 p-12 backdrop-opacity-55 absolute"
        >
          <h1 className="font-bold text-3xl text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <>
              <input
                onChange={formik.handleChange}
                value={formik.values.fullName}
                className=" w-full border rounded-md border-white px-3 py-2 text-white"
                type="text"
                name="fullName"
                placeholder="Name"
                
              />
              {formik.errors.fullName && formik.touched.fullName && (
                <div className="text-red-500 text-sm">
                  {formik.errors.fullName}
                </div>
              )}
            </>
          )}
          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            className=" w-full  rounded-md border border-white px-3 py-2 text-white"
            type="text"
            name="email"
            placeholder="Email"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            className=" w-full  rounded-md border border-white px-3 py-2 text-white"
            type="password"
            name="password"
            placeholder="Password"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
          <button
            type="submit"
            className="bg-red-600 rounded-md text-white py-3"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <button
            type="button"
            onClick={handleForm}
            className="cursor-pointer text-white"
          >
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already registered ? Sign In Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
