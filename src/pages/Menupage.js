import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuCard from "../components/menu_components/MenuCard";
import MenuCategory from "../components/menu_components/MenuCategory";
import MenuItems from "../components/menu_components/MenuItems";
import data from "../json/menu.json";

function Menupage() {
  const [category, setCategory] = useState("Best sellers");
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
  return (
    <div>
      <section className="relative h-screen w-screen  p-10 flex gap-10">
        <MenuCategory setCategory={setCategory} />
        <MenuItems category={category} />
      </section>
    </div>
  );
}

export default Menupage;
