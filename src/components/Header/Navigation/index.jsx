import React from 'react'
import  "./nav.css"
function Navigation() {
    return (
        <div className="navcont">
            <div className="startbootstrap">Start Bootstrap
            </div>
            <div className="navlinks">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Portfolio</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation