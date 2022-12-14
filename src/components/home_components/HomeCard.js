import React, { useEffect, useState } from "react";
import "../../styles/HomeCard.css";

function HomeCard(props) {
    return (
        <div w-full h-40 style={{cursor: "pointer"}}>
            <div className={"card w-full h-40 bg-base-100 shadow-xl mt-5"} style={{ background: "rgba(184, 134, 92, 0.7)" }}
                onClick={() => props.setBigImgSrc(props.homeCardImg)}>
                <figure className="w-full bg-white"><img className="w-full h-full" src={props.homeCardImg} alt="Shoes" /></figure>
                <div className={"HomeCardDiv " + (props.cardIsHovered && "HomeCardDivHovered") + " w-1/8 relative text-center"}>
                    <h2>Cake</h2>
                </div>
            </div>
        </div>
    );
}

export default HomeCard;
