import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Layout(props) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{props.children}</div>
      <footer>
        <p>Made By Marius</p>
      </footer>
    </div>
  )
}
