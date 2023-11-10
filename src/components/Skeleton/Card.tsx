import React, { ReactNode } from "react";

interface CardProp {
  children: ReactNode;
}

const Card = ({ children }: CardProp) => {
  return (
    <div className="border-solid bg-lime-600 rounded-lg w-full h-full">
      {children}
    </div>
  );
};

export default Card;
