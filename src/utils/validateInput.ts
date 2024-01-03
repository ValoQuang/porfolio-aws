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
    .matches(passwordRules, "please enter stronger password")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match")
    .required(),
  email: Yup.string().email("Please enter valid email").required("Required"),
});

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
