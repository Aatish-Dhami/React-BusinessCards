import React from "react";
import image1 from "/Users/aatishdhami/Documents/Personal Project/businesscards/src/images/image1.png";
import EmailImage from "/Users/aatishdhami/Documents/Personal Project/businesscards/src/images/Mail.png";
import Limage from "/Users/aatishdhami/Documents/Personal Project/businesscards/src/images/linkedin.png"
import EmailButton from "./InfoButtons/EmailButton";

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