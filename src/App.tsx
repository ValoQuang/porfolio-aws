import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
    </div>
  );
}

export default App;
