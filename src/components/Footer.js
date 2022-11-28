import React from "react"
import fb from "/Users/aatishdhami/Documents/Personal Project/businesscards/src/images/Facebook Icon.png"
import gh from "/Users/aatishdhami/Documents/Personal Project/businesscards/src/images/GitHub Icon.png"
import ig from "/Users/aatishdhami/Documents/Personal Project/businesscards/src/images/Instagram Icon.png"
import tw from "/Users/aatishdhami/Documents/Personal Project/businesscards/src/images/Twitter Icon.png"


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