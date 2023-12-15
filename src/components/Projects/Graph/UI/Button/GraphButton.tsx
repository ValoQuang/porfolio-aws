import { GraphButtonProp } from "../../../../../types";

const GraphButton = ({title, onClick}: GraphButtonProp) => {
  const header = title ? title.charAt(0).toUpperCase() + title.slice(1) : "";
  return (
    <button className="solid-button" onClick={onClick}>
      {header}
    </button>
  );
};

export default GraphButton;
