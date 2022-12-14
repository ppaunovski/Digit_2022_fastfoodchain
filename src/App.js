import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Menupage from "./pages/Menupage";
import NavigationBar from "./components/NavigationBar";
import { createContext, useEffect, useState } from "react";
import MenuItems from "./components/menu_components/MenuItems";

export const shoppingCartContext = createContext({
  cartItems: [],
  setCartItems: (value) => {},
});

export const ScrollContext = createContext(false);
export const IsAuthenticated = createContext({
  isAuth: false,
  changeAuth: (value) => {},
});

export const signInShowContext = createContext({
  signInShow: false,
  setSignInShow: (value) => {},
  logOutShow: false,
  setLogOutShow: (value) => {},
});

function App() {
  const [show, setShow] = useState(true);
  const [isAuth, changeAuth] = useState(false);
  const [signInShow, setSignInShow] = useState(false);
  const [logOutShow, setLogOutShow] = useState(false);
  const [cartItemsState, setCartItemsState] = useState([]);

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
      <signInShowContext.Provider
        value={{ signInShow, setSignInShow, logOutShow, setLogOutShow }}
      >
        <IsAuthenticated.Provider
          value={{ isAuth: isAuth, changeAuth: changeAuth }}
        >
          <shoppingCartContext.Provider
            value={{
              cartItems: cartItemsState,
              setCartItems: setCartItemsState,
            }}
          >
            <BrowserRouter>
              <NavigationBar isAuth={isAuth} changeAuth={changeAuth} />
              <Routes>
                <Route exact path="/" element={<Homepage isAuth={isAuth} />} />
                <Route path="/menu" element={<Menupage />} />
                <Route path="/menu/:category" element={<Menupage />} />
              </Routes>
            </BrowserRouter>
          </shoppingCartContext.Provider>
        </IsAuthenticated.Provider>
      </signInShowContext.Provider>
    </ScrollContext.Provider>
  );
}

export default App;
