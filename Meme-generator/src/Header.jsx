import React from "react"
function Header(){
    return(
        <div className="Header">
            <div className="Header-logo">
                <img className="logo" src="../trollface.png" alt="Trollface"/>
                <h2>Meme Generator</h2>
            </div>
            <h2 className="sidetitle">React Course-Project 3</h2>
        </div>
    )
}
export default Header