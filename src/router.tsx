import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Projects from "./components/Projects";
import Main from "./components/Main";
import Lofi from "./components/Projects/Lofi/Lofi";
import Graph from "./components/Projects/Graph/Graph";
import { PATH_ENUM } from "./types/routeEnum";
import LofiPortal from "./components/Projects/LofiPortal/LofiPortal";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "",
        index: true,
        element: (
          <>
            <Main />
          </>
        ),
      },
      {
        path: PATH_ENUM.ABOUT,
        element: <About />,
      },
      {
        path: PATH_ENUM.PROJECTS,
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Projects />,
          },
          {
            path: PATH_ENUM.LOFI,
            element: <Outlet />,
            children: [
              {
                path: "",
                element: <Lofi />,
              },
              {
                path: PATH_ENUM.LOFI_PORTAL,
                element: <LofiPortal />,
              },
            ],
          },
          {
            path: PATH_ENUM.GRAPH,
            element:<><Graph /></> ,
          },
        ],
      },
    ],
  },
]);
