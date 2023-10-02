import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { TfiYoutube } from "react-icons/tfi"
import { TbBrandThreads } from "react-icons/tb"
import { GrFacebook } from "react-icons/gr"
import { FaTiktok } from "react-icons/fa"

const Header = () => {
  return (
    <header className="main_header_container rtl flex space-between center">
      <div className="header_text flex space-between">
        <Link>כרטיסים ומנויים</Link>
        <Link>חנות רשמית</Link>
        <Link>יצירת קשר</Link>
        <Link>מנויי יהלום</Link>
        <Link>חווית ה-VIP</Link>
      </div>
      <div className="header_svg flex space-between">
        <Link>EN</Link>
        <Link>
          <TbBrandThreads />
        </Link>
        <Link>
          <GrFacebook />
        </Link>
        <Link>
          <TfiYoutube />
        </Link>
        <Link>
          <AiOutlineInstagram />
        </Link>
        <Link>
          <FaTiktok />
        </Link>
        <Link>
          <AiOutlineSearch />
        </Link>
      </div>
    </header>
  )
}

export default Header
