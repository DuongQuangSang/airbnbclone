import React from "react";
// import star from "../assets/images/star.png"
export default function Card(props) {
    return (
        <div className="card">
            <img src={`../assets/images/${props.img}`} alt="image1" className="card--image"/>
            <div className="card-status">
                <img src="../assets/images/star.png" alt="star" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}