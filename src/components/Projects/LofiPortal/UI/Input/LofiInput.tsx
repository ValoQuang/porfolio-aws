import { FormikErrors, FormikTouched } from "formik";
import { ChangeEventHandler, ReactNode } from "react";

type FormikFieldFeedback =
  | string
  | FormikErrors<any>
  | string[]
  | FormikErrors<any>[]

interface LofiInputProp {
  title: string;
  type: string;
  value: string | number;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: ChangeEventHandler<HTMLInputElement>;

  id: string;
  error: FormikFieldFeedback;
  touched: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
}

type ErrorType = {
  error: FormikFieldFeedback;
  touched: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
};

const errorDisplayHandler = ({ error, touched }: ErrorType) => {
  return (
    <>
      {error && touched && (
        <div className="text-red-500 text-sm mt-2">{error as ReactNode}</div>
      )}
    </>
  );
};

const LofiInput = ({
  title,
  type,
  value,
  handleChange,
  handleBlur,
  error,
  touched,
  id,
}: LofiInputProp) => {
  return (
    <>
      <div>
        <label htmlFor={type}>{title}</label>
        <div className="mt-2">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            id={id}
            type={type}
            value={value}
            required
            className="w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 lofi-container focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
          />
        </div>
        {errorDisplayHandler({ error, touched })}
      </div>
    </>
  );
};

export default LofiInput;
