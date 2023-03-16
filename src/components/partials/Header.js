import React, { useEffect, useState } from "react";
import {scrollToSection} from "../../js/Main";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                        <img src="/myLogoWhite.png" alt="Logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Over mij</a></li>
                        <li><a href="#" onClick={() => scrollToSection('projects')}>Projecten</a></li>
                        <li><a href="#" onClick={() => scrollToSection('scrollToSkills')}>Skills</a></li>


                        <li><a href="#" onClick={() => scrollToSection('scrollToContact')}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
