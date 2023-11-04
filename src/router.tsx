import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Knowledge from "./components/Knowledge";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/knowledge",
    element: <Knowledge />,
  },
]);
