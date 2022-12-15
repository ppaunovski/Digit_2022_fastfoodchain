import React, { useEffect, useState } from 'react'
import "../styles/FindUs.css";

export default function FindUs(props) {
    const [isPanning, setPanning] = useState(false);
    const [oldX, setOldX] = useState(0);
    const [oldY, setOldY] = useState(0);
    const [leftCount, setLeftCount] = useState(0);
    const [topCount, setTopCount] = useState(0);

    useEffect(() => {
        if (isPanning) {
            console.log("Panning");
        }
        else {
            console.log("Not panning anymore");
        }
    }, [isPanning])

    return (
        <div>
            <input type="checkbox" checked={props.aboutShow} id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative" style={{height: 900, maxWidth: 1000, width: 900,}}>
                    <h1 className="absolute right-8 top-3 cursor-pointer" onClick={() => props.setAboutShow(false)}>X</h1>
                    <h1>Map</h1>
                    <div className="overflow-hidden relative w-full" style={{height: "95%"}}>
                        <img id="mapImg" className='MapImg unselectable absolute cursor-move' style={{ transform: "scale(2)"}} src="https://cdn.discordapp.com/attachments/385909243984740352/1052945337876230164/image.png"
                            onMouseDown={(e) => {
                                setPanning(true);
                                setOldX(e.clientX);
                                setOldY(e.clientY);
                            }}
                            onMouseUp={(e) => {
                                setPanning(false);
                                setOldX(e.clientX);
                                setOldY(e.clientY);
                            }} 
                            onMouseMove={(e) => {
                                if (isPanning) {
                                    setOldX(e.clientX);
                                    setOldY(e.clientY);
                                    if (e.clientX > oldX) {
                                        if (leftCount > 400) {
                                            return;
                                        }
                                        
                                        setLeftCount(leftCount+9);
                                        document.querySelector(".MapImg").style.left = leftCount + "px";
                                    }
                                    if (e.clientX < oldX) {
                                        if (leftCount > document.querySelector(".MapImg").clientWidth) {
                                            return;
                                        }
                                        
                                        setLeftCount(leftCount-9);
                                        document.querySelector(".MapImg").style.left = leftCount + "px";
                                    }
                                    if (e.clientY > oldY) {
                                        if (topCount > 0) {
                                            return;
                                        }

                                        setTopCount(topCount+9);
                                        document.querySelector(".MapImg").style.top = topCount + "px";
                                    }
                                    if (e.clientY < oldY) {
                                        setTopCount(topCount-9);
                                        document.querySelector(".MapImg").style.top = topCount + "px";
                                    }
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
