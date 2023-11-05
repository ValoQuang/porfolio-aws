import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Snow, Rain } from "./components/Weather";

const App = (): JSX.Element => {
  // just for testing Snow effect
  return (
    <div className="body">
      <Snow />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
