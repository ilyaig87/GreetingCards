import React from "react"
import { Link } from "react-router-dom"

const Logos = () => {
  return (
    <div className="main_logos_container flex space-between center full">
      <div>
        <img
          className="volvo_img"
          src="https://mhaifafc.com/assets/images/header-sponser-2.png"
          alt="volvo"
        />
      </div>
      <div className="flex center ">
        <article>
          <h1>מועדון כדורגל מכבי חיפה</h1>
          <h3>האתר הרשמי</h3>
        </article>
        <Link to={"/"}>
          <img
            className="logo_img"
            src="https://mhaifafc.com/assets/images/logo.png"
            alt="logo"
          />
        </Link>
      </div>
    </div>
  )
}

export default Logos
