import React from "react";
import "../Header/style.css"
import { Link } from "react-router-dom";

function Header () {
    const pages = [
        {
            route: "/",
            description: "Home"
        },
        {
            route: "/about",
            description: "About"
        },
        {
            route: "/portfolio",
            description: "Portfolio"
        },
        {
            route: "/contact",
            description: "Contact"
        }
    ]

    return (
            <header className="header-menu">
                <div className="header-logo">
                    <a href="/">
                        <img src="https://avatars.githubusercontent.com/u/128085279?v=4"/>
                    </a>
                </div>
                <nav className="header-menu-list">
                    <ul>
                        {
                            pages.map(({route,description}) => {
                                return(
                                <li key={description}><Link className="nav-link" to={route}>{description}</Link></li>
                                )
                            })
                        
                        }
                        {/* <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/aboutme">About Me</Link></li>
                        <li><Link className="nav-link" to="/aboutme">Academic Background</Link></li>
                        <li><Link className="nav-link" to="/aboutme">Portfolio</Link></li>
                        <li><Link className="nav-link" to="/aboutme">Contact</Link></li> */}
                    </ul>
                </nav>
            </header>
    )
}

export { Header }