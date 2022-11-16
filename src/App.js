import "./App.css";
import AnimRoutes from "./components/AnimRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <AnimRoutes />
        </div>
      </Router>
    </>
  );
}

export default App;
