import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Projects from "./components/Projects";
import Main from "./components/Main";
import CustomBackground from "./components/Projects/CustomBackground/CustomBackground";
import GraphqlGithub from "./components/Projects/GraphqlGithub/GraphqlGithub";
import Route from "./components/Projects/Route/Route";
import { parentPaths, projectPaths } from "./utils/getFullPath";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: parentPaths[0],
        index: true,
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
            element: <Projects />,
          },
          {
            path: projectPaths[0],
            element: <Route />,
          },
          {
            path: projectPaths[1],
            element: <CustomBackground />,
          },
          {
            path: projectPaths[2],
            element: <GraphqlGithub />,
          },
        ],
      },
    ],
  },
]);
