import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

function MenuItems(props) {
  const [show, setShow] = useState(false);
  const [style, setStyle] = useState("w-full h-20 bg-white sticky top-16");

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
  if (window.scrollY > 200) {
    console.log("POGOLEMO");
  }
  return (
    <article className=" w-full sm:w-[65vw]">
      <div className="w-full h-full">
        <div className={style}>
          <h1 className="text-center mb-5 text-3xl p-5">{props.category}</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-evenly gap-5">
            <MenuCard
              title="Muffin"
              image="https://media.istockphoto.com/id/155099605/photo/overcooked-cinnamon-and-sugar-muffin.jpg?s=612x612&w=0&k=20&c=ojh_qCuTW-EiCCv6Oiw5l3q8C9sy3iIxP57vLEi4COc="
              price="50"
              description="Mufin Muffin Muffin"
              calories="520"
            />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>
      </div>
    </article>
  );
}

export default MenuItems;
