import * as Yup from 'yup'

const validationSchema= Yup.object({

    fullName:Yup.string(),
  email: Yup.string().email("Invalid email").required("Enter the Email"),
password: Yup.string()
  .required("Enter the password")
  .min(8, "Password must be at least 8 characters")
     .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/\d/, "Must contain at least one number")
    .matches(/[@$!%*?&]/, "Must contain at least one special character"),

})

export default validationSchema