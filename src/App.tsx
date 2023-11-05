import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
//import { Snow, Rain } from "./components/Weather";

//Effect here to be implemented later, as showcase for state management with zustand.

const App = (): JSX.Element => {
  // just for testing Snow effect
  return (
    <div className="body">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
