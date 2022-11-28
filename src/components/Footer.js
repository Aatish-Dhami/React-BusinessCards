import React from "react"
import fb from "../images/Facebook Icon.png"
import gh from "../images/GitHub Icon.png"
import ig from "../images/Instagram Icon.png"
import tw from "../images/Twitter Icon.png"


export default function Footer() {
    return (
        <div className="footer">
            <img src={tw}/>
            <img src={fb}/>
            <img src={ig}/>
            <img src={gh}/>
        </div>
    )
}