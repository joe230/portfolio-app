import React from "react"
import styles from "./About.module.css"
import { getImageUrl } from "../../utils"

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h1 className={styles.title}>About</h1>
            <div className={styles.content}>
                <img src={getImageUrl("profile_image.jpg")} alt="Me" className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("info_icon.png")} alt="info-icon" />
                        <div className={styles.aboutItemText}>
                            <h3>About Me</h3>
                            <p>
                                I am a highly motivated individual with a strong capacity for learning, eager to start my professional career in the tech sector. 
                                Although I lack work experience in the field, I am deeply committed to learning, quickly adapting, and acquiring the skills needed. 
                                I am available to work full-time with full mobility in Barcelona and surrounding areas.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("server_icon.png")} alt="server-icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Junior Backend Developer</h3>
                            <p>
                                I'm a Junior backend developer with experience in building APIs and optimizing backend systems.
                                I specialize in Python and C#, with frameworks like Django and Flask to deliver high-performing solutions.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About