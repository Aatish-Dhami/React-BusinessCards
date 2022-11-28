import React from "react";
import image1 from "../images/image1.png";
import EmailImage from "../images/Mail.png";
import Limage from "../images/linkedin.png"

export default function Info() {
    return (
        <info className="infos">
            <img src={image1} />
            <h3 className="infos--name">Laura Smith</h3>
            <h4 className="infos--desig">Frontend Developer</h4>
            <h5 className="infos--website">laurasmith.website</h5>

            <div className="buttons">
                <div className="email-button">
                    <img src= {EmailImage} />
                    <h2>Email</h2>  
                </div>
                <div className="linkedin-button">
                    <img src= {Limage} />
                    <h2>LinkedIn</h2>
                </div>
            </div>
        </info>
    )
}