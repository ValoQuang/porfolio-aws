import { useCallback, useState } from "react";
import { ICON_PATHS } from "../../../Lofi/UI/Header/LofiHeader";
import { LOFI_USER } from "../../../../../types";

interface Logic {
  email: string;
  password: string;
  adminCode: string;
}

const LofiInput: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [login, setLogin] = useState<Logic>({
    email: "",
    password: "",
    adminCode: "",
  });

  const inputLoginHandler = useCallback((name: string, prop: string) => {
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: prop,
    }));
  }, []);

  const submitHandler = useCallback(async () => {
    try {
      const response = await fetch("to aws", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: login.email,
          password: login.password,
          adminCode: login.adminCode
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to log in");
      }
      const data = await response.json();
      console.log("Login Response:", data);
    } catch (error) {
      console.error("Login Error:", error);
    }
  }, [login]);

  const signUpHandler = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className=" text-white flex h-[550px] pb-6 flex-1 flex-col lg:px-8 lofi-container">
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
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor={LOFI_USER.EMAIL}
              className="block text-sm font-medium leading-6 text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={(e) =>
                  inputLoginHandler(LOFI_USER.EMAIL, e.target.value)
                }
                id={LOFI_USER.EMAIL}
                name={LOFI_USER.EMAIL}
                type={LOFI_USER.EMAIL}
                autoComplete={LOFI_USER.EMAIL}
                value={login.email}
                required
                className="w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 lofi-container focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor={LOFI_USER.PASSWORD}
                className="block text-sm font-medium leading-6"
              >
                Password
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input
                onChange={(e) =>
                  inputLoginHandler(LOFI_USER.PASSWORD, e.target.value)
                }
                id={LOFI_USER.PASSWORD}
                value={login.password}
                type={LOFI_USER.PASSWORD}
                name={LOFI_USER.PASSWORD}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 lofi-container focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {isSignUp && (
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor={LOFI_USER.ADMIN_CODE}
                  className="block text-sm font-medium"
                >
                  Admin Code? (Optional)
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) =>
                    inputLoginHandler(LOFI_USER.ADMIN_CODE, e.target.value)
                  }
                  id={LOFI_USER.ADMIN_CODE}
                  value={login.adminCode}
                  type={LOFI_USER.ADMIN_CODE}
                  name={LOFI_USER.ADMIN_CODE}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 lofi-container focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}

          <div>
            <button
              onClick={submitHandler}
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition duration-100 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {isSignUp ? "Sign up" : "Sign in"}
            </button>
          </div>
        </form>

        <div className="flex gap-5 items-center mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <p
            onClick={signUpHandler}
            className="hover:cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </p>
        </div>
      </div>
    </div>
  );
};

export default LofiInput;
