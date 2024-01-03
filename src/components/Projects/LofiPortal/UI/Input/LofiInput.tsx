import { ReactNode } from "react";
import { ErrorType, LofiInputProp } from "../../../../../types";

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
  const renderedTitle = title.charAt(0).toLocaleUpperCase() + title.slice(1);
  return (
    <>
      <div>
        <label htmlFor={type}>{renderedTitle}</label>
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
