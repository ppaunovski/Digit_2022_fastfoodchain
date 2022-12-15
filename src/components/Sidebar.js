import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../index";
import HomeCard from "../components/home_components/HomeCard";
import MenuCard from "./menu_components/MenuCard";

function Sidebar() {
  const [cardIsHovered, setCardIsHovered] = useState(false);
  const [bigImgSrc, setBigImgSrc] = useState(
    "https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/chocolate-cupcake.png?alt=media&token=dd6fa2fa-fea5-4a1e-83d9-7f5269532442"
  );

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

  let filtered = menuItems.filter((item) =>
    item.data().category.includes("best sellers")
  );

  return (
    <div className="lg:flex lg:flex-row justify-center items-center overflow-hidden">
      <div className="block">
        <div className="lg:hidden">
          <p className="text-center text-2xl font-bold">Special offers</p>
          <div className="carousel carousel-center w-full  p-4 space-x-4 bg-white rounded-box">
            <div className="carousel-item">
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
        <div className="hidden h-screen overflow-scroll lg:flex flex-col">
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
      <div className="relative h-full w-full">
        <div className="absolute w-full h-full ">
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-[70vw] h-[70vh] lg:h-[50vh] rounded-3xl bg-white/60">
              {/* <p className="text-right m-5 text-3xl font-bold text-black">
                We are Sweetster!
              </p> */}
              <img
                src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/sweetster.png?alt=media&token=6dba84bb-73dc-44d5-b9e6-b4dc676ea93f"
                className="w-[500px]"
              ></img>
              <p className="text-black text-center  p-3 -mt-7 sm:text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[80vh] w-[100vw] lg:absolute -z-10 lg:top-0 lg:h-full lg:w-full">
          <div className="absolute flex justify-center items-center -z-20 w-full h-full bg">
            <div className="absolute  h-[30vh] -rotate-[39deg] sm:-rotate-[30deg] md:-rotate-[24deg] lg:-rotate-[18deg] w-[2000px] bg-pink-200"></div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            {/* <img
              className="lg:hidden"
              src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/sweetster.png?alt=media&token=6dba84bb-73dc-44d5-b9e6-b4dc676ea93f"
            ></img>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/Logo%20background.jpg?alt=media&token=13b7bde1-c3d6-4981-99f4-a14bcf861afb"
              className="lg:block hidden w-[100vw]"
            ></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
