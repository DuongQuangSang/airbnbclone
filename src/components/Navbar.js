import React from "react"
import logo from "../assets/images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="logo" className="nav--logo"/>
        </nav>
    )
}