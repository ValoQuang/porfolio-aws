import { useState } from "react";
import { ICON_PATHS } from "../../../Lofi/UI/Header/LofiHeader";
import { LOFI_USER } from "../../../../../types";

interface Logic {
  email: string;
  password: string;
}

const LofiInput = () => {
  const [login, setLogin] = useState<Logic>({
    email: "",
    password: "",
  });

  const inputLoginHandler = (name: string, prop: string) => {
    setLogin({
      ...login,
      [name]: prop,
    });
  };
  console.log(login);

  const submitHandler = () => {

  }

  return (
    <>
      <div className="text-white flex h-full flex-1 flex-col lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src={ICON_PATHS.logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
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
                  name={login.password}
                  type={LOFI_USER.PASSWORD}
                  value={LOFI_USER.PASSWORD}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 lofi-container focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition duration-100 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LofiInput;
