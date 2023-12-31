import { lazy, useEffect, useState, Suspense } from "react";
import { ICON_PATHS } from "../../../Lofi/UI/Header/LofiHeader";
import {
  LOCAL_STORAGE,
  LOFI_ENDPOINT,
  ValueInputType,
} from "../../../../../types";
import { UseFetch } from "../../../../../utils/useFetch";
import { setInLocalStorage } from "../../../../../utils/localStorage";
import { SignupSchema } from "../../../../../utils/validateInput";
import { FormikValues, useFormik } from "formik";

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
  const [fetchMessage, setFetchMessage] = useState<any>({});

  const submitFormHandler = async () => {
    const response = await UseFetch(
      isSignUp ? LOFI_ENDPOINT.SIGNUP : LOFI_ENDPOINT.LOGIN,
      "POST",
      {
        "Content-Type": "application/json",
      },
      JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      })
    );
    if (response) {
      setFetchMessage(response);
      if (response.code === 201) {
        setIsSignUp(!isSignUp);
      }
      if (response.token) {
        setInLocalStorage(LOCAL_STORAGE.USER, JSON.stringify(response));
        const currentUrl = window.location.href;
        const parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/"));
        window.location.href = parentUrl;
      }
    }
  };

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    touched,
    resetForm,
  }: FormikValues = useFormik({
    initialValues: inputState,
    validationSchema: SignupSchema,
    onSubmit: (value: any) => {
      value.reset();
    },
  });

  useEffect(() => {
    resetForm();
    setFetchMessage(fetchMessage);
  }, [fetchMessage, isSignUp, resetForm]);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <Suspense fallback={<div>Loading ...</div>}>
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
              />
            </>
          )}

          <div className="pt-10">
            <button
              onClick={submitFormHandler}
              type="submit"
              className="bg-orange-500 hover:bg-orange-400 flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition duration-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {isSignUp ? "Sign up" : "Sign in"}
            </button>

            <div className="flex gap-5 items-center mt-10 text-center text-sm text-gray-500">
              {isSignUp ? "Already have an account ?" : "Not a member ?"}
              <div
                onClick={toggleSignUp}
                className="hover:cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-400"
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </div>
            </div>
          </div>
          {fetchMessage && (
            <div
              className={`${
                fetchMessage.message ? "text-green-500" : "text-red-500"
              } text-sm mt-2`}
            >
              {fetchMessage.error || fetchMessage.message}
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default LofiForm;
