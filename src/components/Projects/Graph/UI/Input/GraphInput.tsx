import { GraphInputProp } from "../../../../../types";

const GraphInput = ({
  defaultValue,
  placeholder,
  onChange,
}: GraphInputProp) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        className="rounded-none focus:ring-0 focus:outline-none rounded-e-lg focus:bg-zinc-600 border-zinc-600 border text-gray-900 w-full text-sm p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
      />
    </div>
  );
};

export default GraphInput;
