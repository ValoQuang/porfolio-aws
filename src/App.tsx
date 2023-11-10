import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = (): JSX.Element => {
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
