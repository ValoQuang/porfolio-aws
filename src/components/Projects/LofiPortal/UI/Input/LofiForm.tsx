import { lazy, useEffect, useState } from "react";
import { ICON_PATHS } from "../../../Lofi/UI/Header/LofiHeader";
import {
  FormikInputProp,
  LOCAL_STORAGE,
  ValueInputType,
} from "../../../../../types";
import { UseFetch } from "../../../../../utils/useFetch";
import { setInLocalStorage } from "../../../../../utils/localStorage";
import { SignupSchema } from "../../../../../utils/validateInput";
import { useFormik } from "formik";

const inputState: ValueInputType = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const LofiSignIn = lazy(() => import("./LofiSignIn"));
const LofiSignUp = lazy(() => import("./LofiSignUp"));

const LofiForm: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    resetForm,
  }: FormikInputProp = useFormik({
    initialValues: inputState,
    validationSchema: SignupSchema,
    onSubmit: (values: any) => {
      values.reset();
    },
  });

  useEffect(() => {
    setInLocalStorage(LOCAL_STORAGE.SIGNUP, JSON.stringify(isSignUp));
    resetForm();
  }, [isSignUp, resetForm]);

  const submitFormHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const response = await UseFetch(
        "login",
        "POST",
        JSON.stringify({
          email: values.email,
          password: values.password,
        })
      );
      if (response.error) {
        setError(response.error);
      }
      setInLocalStorage(LOCAL_STORAGE.USER, JSON.stringify(response));
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="text-white flex h-full absolute pb-6 flex-col lg:px-8 lofi-container">
      <div className="sm:mx-auto w-80">
        <img
          className="mx-auto h-20 w-auto"
          src={ICON_PATHS.logo}
          alt="Your Company"
        />
        <h2 className="text-center items-center text-xl font-bold leading-9 text-white">
          {isSignUp ? "Create an account" : "Sign in to your account"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {isSignUp ? (
          <>
            <LofiSignUp
              values={values}
              errors={errors}
              handleBlur={handleBlur}
              handleChange={handleChange}
              touched={touched}
              handleSubmit={handleSubmit}
            />
          </>
        ) : (
          <>
            <LofiSignIn
              values={values}
              errors={errors}
              handleBlur={handleBlur}
              handleChange={handleChange}
              touched={touched}
              handleSubmit={handleSubmit}
            />
          </>
        )}

        <div className="pt-10">
          <button
            onClick={submitFormHandler}
            type="submit"
            className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition duration-100 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {isSignUp ? "Sign up" : "Sign in"}
          </button>

          <div className="flex gap-5 items-center mt-10 text-center text-sm text-gray-500">
            {isSignUp ? "Already have an account ?" : "Not a member ?"}
            <div
              onClick={toggleSignUp}
              className="hover:cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </div>
          </div>
        </div>
        {error && !isSignUp && (
          <div className="text-red-500 text-sm mt-2">{error}</div>
        )}
      </div>
    </div>
  );
};

export default LofiForm;
