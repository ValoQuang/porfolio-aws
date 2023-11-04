import React from "react";

interface button {
  text: string;
}

const Buttons = (props: button): JSX.Element => {
  return (
    <div className="pl-10">
      <button className="p-link text-link hover:pointer hover:bg-black hover:text-white">{props.text}</button>
    </div>
  );
};

export default Buttons;
