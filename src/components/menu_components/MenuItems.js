import React, { useContext, useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { ScrollContext } from "../../App";
import chocolateChipCookie from "../../images/chocolate-chip-cookie.png";
import chocolateCake from "../../images/chocolate-cake.png";
// import { useGetData } from "../../hooks/useGetData";
import { db } from "../../index.js";
import { doc, getDocs, collection, query, where } from "firebase/firestore";
import Searchbar from "./Searchbar";

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

  let filtered;

  // useEffect(() => {
  //   if (props.search !== "") {
  //     filtered = menuItems.filter((item) =>
  //       item.data().title.toLowerCase().includes(props.search.toLowerCase())
  //     );
  //   } else {

  //   }
  //   console.log("FILTERED", filtered);
  // }, [props.search, props.category]);

  if (props.search !== "") {
    props.setCategory("Search");
    filtered = menuItems.filter((item) =>
      item.data().title.toLowerCase().includes(props.search.toLowerCase())
    );
  } else {
    filtered = menuItems.filter((item) =>
      item.data().category.includes(props.category.toLowerCase())
    );
  }

  return (
    <article className=" w-full sm:w-[65vw]">
      {/* <div className="fixed flex justify-center top-20 w-full">
        <div className="flex w-full justify-center">
          <h1 className="">{props.category}</h1>
        </div>
      </div> */}

      <div className="w-full h-full flex justify-center">
        <div className="fixed flex justify-center top-16 bg-white z-20 h-16 w-full">
          <div className="flex w-full justify-center items-center">
            <h1 className="text-3xl">{props.category}</h1>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="absolute top-5 sm:relative flex flex-col sm:justify-top items-center">
            <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 justify-evenly gap-5">
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
      </div>
    </article>
  );
}

export default MenuItems;
