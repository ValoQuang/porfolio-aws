import { FormikValues } from "formik";
import { LOFI_USER } from "../../../../../types";

import LofiInput from "./LofiInput";

const LofiSignUp = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
}: FormikValues) => {
  return (
    <div>
      <form
        id="login-form"
        className="space-y-2 block text-sm font-medium leading-6 text-white"
      >
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
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </form>
    </div>
  );
};

export default LofiSignUp;
