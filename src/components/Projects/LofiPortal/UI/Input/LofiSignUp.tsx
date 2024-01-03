import { FormikInputProp, LOFI_USER } from "../../../../../types";
import LofiInput from "./LofiInput";

const LofiSignUp = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
}: FormikInputProp) => {
  return (
    <div>
      <form
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
