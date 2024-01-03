import * as Yup from "yup";

const passwordRules = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Username must be minimum 5 characters")
    .max(20, "Username is too Long")
    .required("Please enter username"),
  password: Yup.string()
    .min(2, "Password must be minimum 5 characters")
    .max(50, "Password cannot be too Long")
    .matches(passwordRules, "Please enter stronger password")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match")
    .required("Required"),
  email: Yup.string().email("Please enter valid email").required("Required"),
});
