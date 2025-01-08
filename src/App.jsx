import React from "react"
import styles from "./App.module.css"
import Navbar from "./Components/Navbar/Navbar"
import Header from "./Components/Header/Header"
import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Header/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App