import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="main_nav_link rtl ">
      <div className="links flex center space-between container">
        <Link>המועדון</Link>
        <Link>VOD</Link>
        <Link>חדשות</Link>
        <Link>הקבוצה</Link>
        <Link>משחקים</Link>
        <Link>היסטוריה</Link>
        <Link>נוער</Link>
        <Link>Green+</Link>
        <Link>ירוק בקהילה</Link>
        <Link to={"/greeting-cards"}>ברכות לאוהדים</Link>
      </div>
    </nav>
  )
}

export default Nav
