import React from "react";
import image1 from "../images/pp.png";
import EmailImage from "../images/Mail.png";
import Limage from "../images/linkedin.png"

export default function Info() {
    return (
        <info className="infos">
            <img src={image1} />
            <h3 className="infos--name">Aatish Dhami</h3>
            <h4 className="infos--desig">Software Developer</h4>
            <h5 className="infos--website">DigitalCard</h5>

            <div className="buttons">
                <a className="email-button" href="mailto:aatishdhami14@gmail.com">
                    <img src= {EmailImage} />
                    <h2>Email</h2>  
                </a>
                <a className="linkedin-button" href="https://www.linkedin.com/in/aatish-dhami/" target="_blank">
                    <img src= {Limage} />
                    <h2>LinkedIn</h2>
                </a>
            </div>
        </info>
    )
}