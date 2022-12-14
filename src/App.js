import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Menupage from "./pages/Menupage";
import NavigationBar from "./components/NavigationBar";
import { createContext, useEffect, useState } from "react";

export const ScrollContext = createContext(false);

function App() {
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <ScrollContext.Provider value={show} className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menupage />} />
          <Route path="/menu/:whichMenu" element={<Menupage />} />
        </Routes>
      </BrowserRouter>
    </ScrollContext.Provider>
  );
}

export default App;
