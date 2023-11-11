import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Projects from "./components/Projects";
import Main from "./components/Main";
import CustomBackground from "./components/Projects/CustomBackground/CustomBackground";
import GraphqlGithub from "./components/Projects/GraphqlGithub/GraphqlGithub";
import Route from "./components/Projects/Route/Route";
import { PATH_ENUM } from "./types/routeEnum";

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
            path: PATH_ENUM.ROUTE,
            element: <Route />,
          },
          {
            path: PATH_ENUM.CUSTOM_BACKGROUND,
            element: <CustomBackground />,
          },
          {
            path: PATH_ENUM.GRAPHQL_GITHUB,
            element: <GraphqlGithub />,
          },
        ],
      },
    ],
  },
]);
