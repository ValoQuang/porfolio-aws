import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ApolloProvider } from "@apollo/client";
import { Client } from "./graphQL/Client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </ApolloProvider>
  </React.StrictMode>
);
