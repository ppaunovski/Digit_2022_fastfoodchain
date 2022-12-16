import React, { createContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CartAction from "../components/cart/CartAction";
import MenuCard from "../components/menu_components/MenuCard";
import MenuCategory from "../components/menu_components/MenuCategory";
import MenuItems from "../components/menu_components/MenuItems";
import data from "../json/menu.json";

export const shoppingCartContext = createContext({
  cartItems: [],
  setCartItems: (value) => {},
});

function Menupage() {
  const [cartItemsState, setCartItemsState] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const location = useLocation();

  console.log(location);
  const menuItems = [
    {
      title: "Muffin",
      price: 50,
      image:
        "https://media.istockphoto.com/id/155099605/photo/overcooked-cinnamon-and-sugar-muffin.jpg?s=612x612&w=0&k=20&c=ojh_qCuTW-EiCCv6Oiw5l3q8C9sy3iIxP57vLEi4COc=",
    },
    { title: "Muffin", price: 50, image: "url" },
    { title: "Muffin", price: 50, image: "url" },
  ];

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    console.log(screenWidth);
    if (window.innerWidth > 640) {
      if (category) setCategory(category);
      else setCategory("Best sellers");
    } else {
      if (category) setCategory(category);
      else setCategory("");
    }
    window.addEventListener("resize", handleResize);
  }, [screenWidth]);

  return (
    <shoppingCartContext.Provider
      value={{ cartItems: cartItemsState, setCartItems: setCartItemsState }}
    >
      <section className="relative h-screen w-screen mt-16  p-10 flex gap-10">
        {screenWidth >= 640 ? (
          <div className="relative h-screen w-screen  p-10 flex gap-10">
            <MenuCategory
              setCategory={setCategory}
              setSearch={setSearch}
              search={search}
            />
            <MenuItems
              search={search}
              category={category}
              setCategory={setCategory}
            />
            <CartAction />
          </div>
        ) : category ? (
          <div className="relative h-screen w-screen flex items-center justify-center">
            <div className="fixed top-32 left-10">
              <Link
                to={`/menu`}
                onClick={() => {
                  setCategory("");
                }}
                className="text-blue-700"
              >
                &lt; Go Back
              </Link>
            </div>
            <MenuItems
              search={search}
              category={category}
              setCategory={setCategory}
            />
            <CartAction />
          </div>
        ) : (
          <div className="relative h-screen w-screen flex items-center justify-center">
            <MenuCategory
              setCategory={setCategory}
              setSearch={setSearch}
              search={search}
            />
          </div>
        )}
      </section>
    </shoppingCartContext.Provider>
  );
}

export default Menupage;
