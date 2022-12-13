import React, { useEffect, useState } from 'react'
import "../styles/NavigationBar.css"

export default function Test() {
    const [show, setShow] = useState(true);
    
    const controlNavbar = () => {
        if (window.scrollY > 200) {
            setShow(false);
        }
        else {
            setShow(true);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar)
        
        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [])
  
    return (
    <div className={"NavBarHidden " + (show && "NavBar") + " h-14 w-full"}>
        <ul className={"Menu inline-flex h-full"} style={{visibility: show ? "visible" : "hidden"}}>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}
