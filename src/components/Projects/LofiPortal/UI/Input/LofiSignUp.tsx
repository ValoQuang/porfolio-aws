import React, { ReactNode } from "react";
import { LOFI_USER } from "../../../../../types";
import { InputObjectProp } from "./LofiForm";
import { Formik, Form, Field, useFormik } from "formik";
import { SignupSchema } from "../../../../../utils/validateInput";
import LofiInput from "./LofiInput";

type LofiSignUpProp = {
  inputObject: InputObjectProp;
  setInputObject: React.Dispatch<React.SetStateAction<InputObjectProp>>;
};

const LofiSignUp = ({ inputObject, setInputObject }: LofiSignUpProp) => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: SignupSchema,
      onSubmit: (values: any) => {
        values.reset();
      },
    });
  console.log(values);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        id="login-form"
        className="space-y-6 block text-sm font-medium leading-6 text-white"
      >
        {/* USERNAME */}
        <LofiInput
          id={LOFI_USER.USERNAME}
          touched={touched.username}
          title={LOFI_USER.USERNAME}
          value={values.username}
          type={LOFI_USER.USERNAME}
          error={errors.username}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />

        {/* EMAIl */}
        <LofiInput
          id={LOFI_USER.EMAIL}
          touched={touched.email}
          title={LOFI_USER.EMAIL}
          value={values.email}
          type={LOFI_USER.EMAIL}
          error={errors.email}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />

        {/* PASSWORD */}
        <LofiInput
          id={LOFI_USER.PASSWORD}
          touched={touched.password}
          title={LOFI_USER.PASSWORD}
          value={values.password}
          type={LOFI_USER.PASSWORD}
          error={errors.password}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />

        {/* CONFIRM PASSWORD */}
        <LofiInput
          id="confirmPassword"
          touched={touched.confirmPassword}
          title="Confirm password"
          value={values.confirmPassword}
          type={LOFI_USER.PASSWORD}
          error={errors.confirmPassword}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </form>
    </div>
  );
};

export default LofiSignUp;
