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
            <p className="text-2xl">Categories</p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <MenuCategoryItem
              setCategory={setCategory}
              title="Best sellers"
              icon="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/best-seller.png?alt=media&token=c37ef27e-b294-41e1-bc7f-8116a54cfd7b"
              link="link_to"
            />
            <MenuCategoryItem
              setCategory={setCategory}
              title="Pancakes"
              icon="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/pancakes.png?alt=media&token=dd243acf-83cf-4481-a6c6-679bd215c856"
              link="link_to"
            />
            <MenuCategoryItem
              setCategory={setCategory}
              title="Pastery"
              icon="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/croissant.png?alt=media&token=8fb8a34a-7e90-4056-bc33-7f5b5979784a"
              link="link_to"
            />
            <MenuCategoryItem
              setCategory={setCategory}
              title="Ice cream"
              icon="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/ice-cream.png?alt=media&token=17688a57-ecc5-44df-af09-e594c418c5e6"
              link="link_to"
            />
            <MenuCategoryItem
              setCategory={setCategory}
              title="Coffee"
              icon="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/coffee.png?alt=media&token=90fd8e8a-1442-4f2b-9bd8-fead78a8b022"
              link="link_to"
            />
            <MenuCategoryItem
              setCategory={setCategory}
              title="Cakes"
              icon="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/cheesecake.png?alt=media&token=9dec89ba-1b48-4b6c-8990-7344aad072be"
              link="link_to"
            />
            <MenuCategoryItem
              setCategory={setCategory}
              title="Muffins"
              icon="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/muffin.png?alt=media&token=4c5676ee-0dd1-44d6-9637-4521fe7413e2"
              link="link_to"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
