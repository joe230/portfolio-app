import React from "react"
import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils"

const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h1>Contact</h1>
                <p>Feel free to reach me out!</p>
            </div>
            <ul className={styles.links}>
            <li className={styles.link}>
                    <img src={getImageUrl("phone_icon.png")} alt="Phone icon" />
                    <p>+34 685 53 42 16</p>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("email_icon.png")} alt="Email icon" />
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=joelcm230@gmail.com" target="_blank" rel="noopener noreferrer">
                        joelcm230@gmail.com
                    </a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("linkedin_icon.png")} alt="Linkedin icon" />
                    <a href="https://www.linkedin.com/in/joelcm" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/joelcm
                    </a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("github_icon.png")} alt="Github icon" />
                    <a href="https://github.com/joe230" target="_blank" rel="noopener noreferrer">
                        @joe230
                    </a>
                </li>
            </ul>
        </footer>
    )
}
export default Contact