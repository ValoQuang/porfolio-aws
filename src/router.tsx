import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Knowledge from "./components/Knowledge";
import Introduction from "./components/Introduction";
import CustomBackground from "./components/Projects/CustomBackground/CustomBackground";
import WeatherInfo from "./components/Projects/WeatherInfo/WeatherInfo";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Introduction />
          </>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "knowledge",
        element: <Outlet />,
        children: [
          {
            path: "",
            index: true,
            element: <Knowledge />,
          },
          {
            path: "state",
            element: <CustomBackground />,
          },
          {
            path: "graphql",
            element: <WeatherInfo />,
          },
        ],
      },
    ],
  },
]);
