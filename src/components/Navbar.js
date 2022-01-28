/* eslint-disable jsx-a11y/alt-text */
import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img src={require("../images/react-icon-small.png")} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}