import React, { ReactNode } from "react";

const Body = ({ children }: { children: ReactNode }) => {
  return <div className="flex p-main font-ibm-plex-mono">{children}</div>;
};

export default Body;
