import React, { useEffect, useState } from 'react'
import "../styles/FindUs.css";

export default function FindUs(props) {
    const [isPanning, setPanning] = useState(false);
    const [oldX, setOldX] = useState(0);
    const [oldY, setOldY] = useState(0);
    const [leftCount, setLeftCount] = useState(0);
    const [topCount, setTopCount] = useState(0);

    return (
        <div>
            <input type="checkbox" checked={props.aboutShow} id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative" style={{height: 900, maxWidth: 1000, width: 900,}}>
                    <h1 className="absolute right-10 top-5 cursor-pointer" onClick={() => props.setAboutShow(false)}>X</h1>
                    <div className="pb-3 text-center">
                        <h1>Map</h1>
                    </div>
                    <div className="overflow-hidden relative w-full" style={{height: "95%"}}>
                        <img id="mapImg" className='MapImg unselectable absolute cursor-move' draggable="false" style={{ transform: "scale(3)"}} src="https://cdn.discordapp.com/attachments/385909243984740352/1052945337876230164/image.png"
                            onMouseDown={(e) => {
                                setPanning(true);
                                setOldX(e.clientX);
                                setOldY(e.clientY);
                            }}
                            onMouseUp={(e) => {
                                setPanning(false);
                            }} 
                            onMouseMove={(e) => {
                                if (isPanning) {
                                    if (e.clientX > oldX) {
                                        if (leftCount > 800) {
                                            return;
                                        }
                                        
                                        setLeftCount(leftCount+10);
                                        document.querySelector(".MapImg").style.left = leftCount + "px";
                                    }
                                    if (e.clientX < oldX) {
                                        if (leftCount < -800) {
                                            return;
                                        }
                                        
                                        setLeftCount(leftCount-10);
                                        document.querySelector(".MapImg").style.left = leftCount + "px";
                                    }
                                    if (e.clientY > oldY) {
                                        if (topCount > 400) {
                                            return;
                                        }

                                        setTopCount(topCount+10);
                                        document.querySelector(".MapImg").style.top = topCount + "px";
                                    }
                                    if (e.clientY < oldY) {
                                        if (topCount < -100) {
                                            return;
                                        }

                                        setTopCount(topCount-10);
                                        document.querySelector(".MapImg").style.top = topCount + "px";
                                    }
                                    setOldX(e.clientX);
                                    setOldY(e.clientY);
                                }
                            }}
                            onMouseLeave={() => {
                                setPanning(false);
                            }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
