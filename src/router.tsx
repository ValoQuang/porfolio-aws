import { Outlet, createBrowserRouter } from "react-router-dom";
import { PATH_ENUM } from "./types/routeEnum";
import { Suspense, lazy } from "react";

const App = lazy(() => import("./App"));
const Main = lazy(() => import("./components/Main"));
const Lofi = lazy(() => import("./components/Projects/Lofi/Lofi"));
const Graph = lazy(() => import("./components/Projects/Graph/Graph"));
const LofiPortal = lazy(
  () => import("./components/Projects/LofiPortal/LofiPortal")
);
const LazyApp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    element: <LazyApp />,
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
        element: <Graph />,
      },
    ],
  },
]);
