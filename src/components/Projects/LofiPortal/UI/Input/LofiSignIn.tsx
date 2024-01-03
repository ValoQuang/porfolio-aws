import React, { useCallback } from "react";
import { LOFI_USER } from "../../../../../types";
import { InputObjectProp } from "./LofiForm";

type LofiSignUpProp = {
    inputObject: InputObjectProp, 
    setInputObject: React.Dispatch<React.SetStateAction<InputObjectProp>>
}

const LofiSignUp = ({ inputObject, setInputObject }: LofiSignUpProp) => {
  const inputLoginHandler = useCallback(
    (name: string, prop: string) => {
      setInputObject((prevLogin) => ({
        ...prevLogin,
        [name]: prop,
      }));
    },
    [setInputObject]
  );

  return (
    <div>
      <form className="space-y-6" id="login-form">
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
              value={inputObject.email}
              required
              className="w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 lofi-container focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor={LOFI_USER.PASSWORD}
            className="block text-sm font-medium leading-6"
          >
            Password
          </label>

          <div className="mt-2">
            <input
              onChange={(e) =>
                inputLoginHandler(LOFI_USER.PASSWORD, e.target.value)
              }
              id={LOFI_USER.PASSWORD}
              value={inputObject.password}
              type={LOFI_USER.PASSWORD}
              name={LOFI_USER.PASSWORD}
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 lofi-container focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LofiSignUp;
