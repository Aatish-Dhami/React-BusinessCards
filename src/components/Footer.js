import React from "react"
import fb from "../images/Facebook Icon.png"
import gh from "../images/GitHub Icon.png"
import ig from "../images/Instagram Icon.png"
import tw from "../images/Twitter Icon.png"


export default function Footer() {
    return (
        <div className="footer">
            <a href="https://twitter.com/aatishdhami" target="_blank" rel="noreferrer">
                <img src={tw}/>
            </a>
            <a href="https://facebook.com/dhamiaatish" target="_blank" rel="noreferrer">
                <img src={fb}/>
            </a>
            <a href="https://instagram.com/aatish_dhami" target="_blank" rel="noreferrer">
                <img src={ig}/>
            </a>
            <a href="https://github.com/Aatish-Dhami" target="_blank" rel="noreferrer">
                <img src={gh}/>
            </a>

        </div>
    )
}