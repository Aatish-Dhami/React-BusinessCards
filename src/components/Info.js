import React from "react"
import image1 from "../images/image1.png"

export default function Info() {
    return (
        <info className="infos">
            <img src={image1} />
            <h3 className="infos--name">Laura Smith</h3>
            <h4 className="infos--desig">Frontend Developer</h4>
            <h5 className="infos--website">laurasmith.website</h5>
        </info>
    )
}