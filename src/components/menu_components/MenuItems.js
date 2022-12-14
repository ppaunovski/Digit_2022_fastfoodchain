import React, { useContext, useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { ScrollContext } from "../../App";
import chocolateChipCookie from "../../images/chocolate-chip-cookie.png";
import chocolateCake from "../../images/chocolate-cake.png";
// import { useGetData } from "../../hooks/useGetData";
import { db } from "../../index.js";
import { doc, getDocs, collection, query, where } from "firebase/firestore";

function MenuItems(props) {
  const [menuItems, setMenuItems] = useState([]);

  //const [documents] = useGetData();

  useEffect(() => {
    const q = query(collection(db, "menu"));

    const fetchData = async () => {
      const querySnapshot = await getDocs(q);
      let arr = [];
      querySnapshot.forEach((doc) => {
        arr.push(doc);
      });
      setMenuItems(arr);
    };

    fetchData();
  }, []);

  const show = useContext(ScrollContext);
  const [style, setStyle] = useState("w-full h-20 bg-white sticky top-16");

  useEffect(() => {
    if (show) {
      setStyle(
        "w-full h-20 bg-white sticky z-10 top-14 transition-all ease-in-out duration-100"
      );
    } else {
      setStyle(
        "w-full h-20 bg-white sticky z-10 top-0 transition-all ease-in-out duration-100"
      );
    }
  }, [show]);

  let filtered = menuItems.filter((item) =>
    item.data().category.includes(props.category.toLowerCase())
  );

  return (
    <article className=" w-full sm:w-[65vw]">
      <div className="w-full h-full">
        <div className={style}>
          <h1 className="text-center mb-5 text-3xl p-5">{props.category}</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-evenly gap-5">
            {/* {menuItems &&
              menuItems.map((item) => console.log(item.data().category))} */}

            {menuItems &&
              filtered &&
              filtered.map((item) => {
                return (
                  <MenuCard
                    key={item.id}
                    id={item.id}
                    title={item.data().title}
                    image={item.data().image}
                    price={item.data().price}
                    description={item.data().description}
                    calories={item.data().calories}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </article>
  );
}

export default MenuItems;
