import React, { useState } from "react"
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils"


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <div className={styles.navBrand}>
                <img className={styles.navLogo} src={getImageUrl("JC_portfolio_logo.png")} alt="nabvar-logo" />
                <a className={styles.navTitle} href="/">Portfolio</a>
            </div>
            <div className={styles.navMenu}>
                <img 
                    className={styles.navMenuBtn} 
                    src={menuOpen ? getImageUrl("nav_closeIcon.png") : getImageUrl("nav_menuIcon.png")}
                    onClick={() => setMenuOpen(!menuOpen)} 
                    alt="menu-button" 
                />
                <ul className={`${styles.navMenuItems} ${menuOpen && styles.navMenuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar