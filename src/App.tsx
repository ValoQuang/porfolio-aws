import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = (): JSX.Element => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="body">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default App;
