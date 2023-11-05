import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Knowledge from "./components/Knowledge";
import Introduction from "./components/Introduction";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

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
        path: "/knowledge",
        element: <Knowledge />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
