import React, { useRef, useState } from "react";
import Header from "./Header";
import { useFormik } from "formik";
import validationSchema from "../utils/validation";
   import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { addUser } from "../utils/userSlice.js";
import { useDispatch } from "react-redux";
import { BACKGROUND_IMAGE } from "../utils/constant.js";

function Login() {
  const dispatch=useDispatch()
  const [isSignInForm, setIsSignInForm] = useState(true);
const [firebaseError, setFirebaseError] = useState("");

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (val) => {


 if( !isSignInForm ){
    createUserWithEmailAndPassword(auth,  val.email, val.password)
  .then((userCredential) => {
    const user = userCredential.user;

updateProfile(user, {
  displayName:val.fullName
}).then(() => {

  const {uid,email,displayName} =auth.currentUser
dispatch(addUser({
  uid: uid,
  email: email,
  fullName: displayName
}));
 
}).catch((error) => {
  console.log(error)
  console.log(error.message)


});







    setFirebaseError("")
 
  })
  .catch((error) => {
    
   setFirebaseError(error.message)

  })
 }
 else{
 
 

    signInWithEmailAndPassword(auth,  val.email, val.password)
  .then((userCredential) => {
   
    const user = userCredential.user;
   setFirebaseError("")

   console.log(user)
 
 
  })
  .catch((error) => {
  console.log(error)
   setFirebaseError(`Error: ${error.code}`)
  })

}

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
          src={BACKGROUND_IMAGE}
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
{firebaseError && (
  <div className="text-red-600 text-md font-bold p-2 ">
    {firebaseError}
  </div>
)}
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
