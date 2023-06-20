import React from "react";
import image1 from "../assets/images/katie-zaferes.png"
import star from "../assets/images/star.png"
export default function Card() {
    return (
        <div className="card">
            <img src={image1} alt="image1" className="card--image"/>
            <div className="card-status">
                <img src={star} alt="star" className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6)</span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}