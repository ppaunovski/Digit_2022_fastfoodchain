import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Menupage from "./pages/Menupage";
import NavigationBar from "./components/NavigationBar"

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menupage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
