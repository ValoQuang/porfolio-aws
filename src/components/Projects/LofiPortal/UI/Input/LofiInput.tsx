import { ReactNode } from "react";
import { ErrorType, LofiInputProp } from "../../../../../types";

const errorDisplayHandler = ({ error, touched }: ErrorType) => {
  return (
    <>
      {error && touched && (
        <div className="text-red-500 text-sm">{error as ReactNode}</div>
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
        <label htmlFor={type} className="flex items-center gap-3">
          {renderedTitle} {errorDisplayHandler({ error, touched })}
        </label>
        <div>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            id={id}
            type={type}
            value={value}
            required
            className="w-full hover:bg-zinc-700 border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 lofi-container focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </>
  );
};

export default LofiInput;
