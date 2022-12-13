import React, { useContext, useEffect, useState } from "react";
import MenuCategoryItem from "./MenuCategoryItem";
import { ScrollContext } from "../../App";

export default function MenuCategory({ setCategory }) {
  const showNavBar = useContext(ScrollContext);
  useEffect(() => {
    if (showNavBar) {
      setStyle(
        "fixed top-24 transition-all ease-in-out duration-200 sm:w-[25vw] sm:block lg:w-[20vw]"
      );
    } else {
      setStyle(
        "fixed top-12 transition-all ease-in-out duration-200 sm:w-[25vw] sm:block lg:w-[20vw]"
      );
    }
  }, [showNavBar]);
  const [style, setStyle] = useState(
    "fixed top-24 sm:w-[25vw] sm:block lg:w-[20vw]"
  );
  return (
    <aside className="hidden relative sm:w-[25vw] sm:block lg:w-[20vw]">
      <div className={style}>
        <div className="flex flex-col items-center gap-6 border-solid border-black border-2 p-2">
          <div className="w-full h-[50px] bg-white flex justify-center items-center">
            <p>Categories</p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <MenuCategoryItem
              setCategory={setCategory}
              title="Pancakes"
              image="url_od_img"
              link="link_to"
            />
            <MenuCategoryItem
              setCategory={setCategory}
              title="Pastery"
              image="url_od_img"
              link="link_to"
            />
            <MenuCategoryItem
              setCategory={setCategory}
              title="Ice cream"
              image="url_od_img"
              link="link_to"
            />
            <MenuCategoryItem
              setCategory={setCategory}
              title="Coffee"
              image="url_od_img"
              link="link_to"
            />
            <MenuCategoryItem
              setCategory={setCategory}
              title="Cakes"
              image="url_od_img"
              link="link_to"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
