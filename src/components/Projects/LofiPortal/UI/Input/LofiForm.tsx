import { lazy, useState } from "react";
import { ICON_PATHS } from "../../../Lofi/UI/Header/LofiHeader";
import { LOCAL_STORAGE } from "../../../../../types";
import { UseFetch } from "../../../../../utils/useFetch";
import { setInLocalStorage } from "../../../../../utils/localStorage";

export interface InputObjectProp {
  email: string;
  password: string;
  username?: string;
}

const inputState = {
  username: "",
  email: "",
  password: "",
}
const LofiSignIn = lazy(() => import("./LofiSignIn"));
const LofiSignUp = lazy(() => import("./LofiSignUp"));

const LofiForm: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [inputObject, setInputObject] = useState<InputObjectProp>(inputState);
  const [error, setError] = useState<string | null>(null);

  const submitFormHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const response = await UseFetch(
        "login",
        "POST",
        JSON.stringify({
          email: inputObject.email,
          password: inputObject.password,
        })
      );
      if (response.error) {
        setError(response.error);
        setInputObject(inputState);
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
    <div className="text-white flex h-[750px] bottom-[-70px] absolute pb-6 flex-col lg:px-8 lofi-container">
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
            <LofiSignUp inputObject={inputObject} setInputObject={setInputObject}/>
          </>
        ) : (
          <>
            <LofiSignIn inputObject={inputObject} setInputObject={setInputObject} />
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
        {error && !isSignUp && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </div>
    </div>
  );
};

export default LofiForm;
