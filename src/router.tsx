import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Knowledge from "./components/Knowledge";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import CustomBackground from "./components/Projects/CustomBackground/CustomBackground";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Introduction />
            <Footer />
          </>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "knowledge",
        element: <Knowledge />,
        children: [
          {
            path: "1",
            element: <CustomBackground />,
          },
        ],
      },
    ],
  },
]);
