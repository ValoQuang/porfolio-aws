import React, { ReactNode } from "react";

interface CardProp {
  children: ReactNode;
}

const Card = ({ children }: CardProp) => {
  return (
    <div
      className="rounded-lg border-gray-800 border-1 border-solid w-full h-full align-middle"
    >
      {children}
    </div>
  );
};

export default Card;
