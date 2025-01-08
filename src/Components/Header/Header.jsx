import React from "react"
import styles from "./Header.module.css"
import { getImageUrl } from "../../utils"

const Header = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm <span>Joel Castellvi</span></h1>
                <p className={styles.description}>
                    I am a junior backend developer from Barcelona with 2 years of experience in Python and C#.
                    My work has focused on creating APIs using .NET Core and developing web applications with Django and Flask.
                    I've developed projects in the IT sector and technical consulting.
                </p>
                <div className={styles.headerAction}>
                    <a href="/portfolio-app/CV_JoelCastellvi.pdf" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>See CV</a>
                </div>
            </div>
            <img className={styles.image} src={getImageUrl("header_image.jpg")} alt="Header Image" />
        </section>
    )
}

export default Header