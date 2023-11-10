import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Projects from "./components/Projects";
import Main from "./components/Main";
import CustomBackground from "./components/Projects/CustomBackground/CustomBackground";
import PersonalInfo from "./components/Projects/PersonalInfo/PersonalInfo";
import { parentPaths, routePaths } from "./utils/getFullPath";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: parentPaths[0],
        element: (
          <>
            <Main />
          </>
        ),
      },
      {
        path: parentPaths[1],
        element: <About />,
      },
      {
        path: parentPaths[2],
        element: <Outlet />,
        children: [
          {
            path: "",
            index: true,
            element: <Projects />,
          },
          {
            path: routePaths[0],
            element: <Projects />,
          },
          {
            path: routePaths[1],
            element: <CustomBackground />,
          },
          {
            path: routePaths[2],
            element: <PersonalInfo />,
          },
          {
            path: routePaths[3],
            element: <PersonalInfo />,
          },
        ],
      },
    ],
  },
]);
