import React from "react";
import MenuCard from "./MenuCard";

function MenuItems(props) {
  return (
    <article className="bg-yellow-100 w-full sm:w-[65vw] overflow-y-scroll">
      <div className="w-full h-full ">
        <h1 className="text-center text-3xl">{props.category}</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3">
          <MenuCard
            title="Muffin"
            image="https://media.istockphoto.com/id/155099605/photo/overcooked-cinnamon-and-sugar-muffin.jpg?s=612x612&w=0&k=20&c=ojh_qCuTW-EiCCv6Oiw5l3q8C9sy3iIxP57vLEi4COc="
            price="50"
          />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
    </article>
  );
}

export default MenuItems;
