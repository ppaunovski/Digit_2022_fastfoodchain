import React, { useEffect, useState } from 'react'
import "../styles/FindUs.css";

export default function FindUs(props) {
    const [isPanning, setPanning] = useState(false);
    const [oldX, setOldX] = useState(0);

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
                <div className="modal-box relative">
                    <h1 className="absolute right-8 top-3 cursor-pointer" onClick={() => props.setAboutShow(false)}>X</h1>
                    <h1>Map</h1>
                    <div className="overflow-hidden h-64">
                        <img id="mapImg" className="unselectable object-cover relative" style={{ height: "300%", width: "300%" }} src="https://ontheworldmap.com/macedonia/city/skopje/detailed-map-of-skopje.jpg"
                            onMouseDown={(e) => {
                                setPanning(true);
                                setOldX(e.clientX);
                            }}
                            onMouseUp={(e) => {
                                setPanning(false);
                                setOldX(e.clientX);
                            }} 
                            onMouseMove={(e) => {
                                if (isPanning) {
                                    if (e.clientX > oldX) {
                                        document.getElementById("mapImg").style.left += 1;
                                    }
                                }
                            }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
