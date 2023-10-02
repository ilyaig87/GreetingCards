import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineInstagram } from "react-icons/ai"
import { TfiYoutube } from "react-icons/tfi"
import { TbBrandThreads } from "react-icons/tb"
import { GrFacebook } from "react-icons/gr"
import { FaTiktok } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="flex center">
        <img
          className="logo_img"
          src="https://mhaifafc.com/assets/images/logo.png"
          alt="logo"
        />
      </div>
      <ul className="footer_text flex center">
        <Link>דרושים</Link>
        <Link>צור קשר</Link>
        <Link>חדשות</Link>
        <Link>מדיניות פרטיות</Link>
        <Link>תקנון האתר</Link>
        <Link>רכישת כרטיסים</Link>
        <Link>תקנון המועדון</Link>
        <Link>תקנונים</Link>
      </ul>
      <div className="footer_social flex center rtl">
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
      </div>
      <div className="inc">
        <a>Powered by Art-up</a>
      </div>
    </footer>
  )
}

export default Footer
