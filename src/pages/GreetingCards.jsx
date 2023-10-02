import React from "react"
import { Link } from "react-router-dom"
import greetCardImage1 from "../assets/images/greet-card1.jfif"
import greetCardImage2 from "../assets/images/greet-card2.jfif"
import greetCardImage3 from "../assets/images/greet-card3.jfif"
import greetCardImage4 from "../assets/images/greet4.png"
import greetCardImage5 from "../assets/images/greet5.png"
import greetCardImage6 from "../assets/images/greet6.png"
import greetCardImage7 from "../assets/images/greet7.png"

const GreetingCards = () => {
  const data = [
    {
      id: "1",
      name: "ברכה מספר 1",
      title: "abc",
      desc: "תמונה עם חתימת השחקן האהוב",
      file: greetCardImage1,
      source: "img",
    },
    {
      id: "2",
      name: "ברכה מספר 2",
      title: "abc",
      desc: " סמל מכבי חיפה עם שם החוגג דוגמא 1",
      file: greetCardImage2,
      source: "img",
    },
    {
      id: "3",
      name: "ברכה מספר 3",
      title: "שם החוגג עם סמל דוגמא 2",
      desc: "שם החוגג עם סמל דוגמא 2",
      file: greetCardImage3,
      source: "img",
    },
    {
      id: "4",
      name: "ברכה מספר 4",
      title: "abc",
      desc: "רונאלדו מברך",
      file: greetCardImage4,
      source: "video",
      video: "I2uo_at-6lU?si=PP5UEuyxcKQ-YlGl",
    },
    {
      id: "5",
      name: "ברכה מספר 5",
      title: "abc",
      desc: "מסי מברך",
      file: greetCardImage5,
      source: "video",
      video: "3ScCl4-wzuw?si=50KZvZaLdEZCzYDK",
    },
    {
      id: "6",
      name: "ברכה מספר 6",
      title: "abc",
      desc: "אמבפה וחברים מברכים",
      file: greetCardImage6,
      source: "video",
      video: "rptW0C6nQ0U?si=4peljlv60EATmrsA",
    },
    {
      id: "7",
      name: "ברכה מספר 7",
      title: "abc",
      desc: "שחקני ריאל מדריד מברכים",
      file: greetCardImage7,
      source: "video",
      video: "zOtItOFZe2E?si=a7MmGopXs9qYqvvB",
    },
  ]

  return (
    <div className="greeting_cards_container full">
      <div className="container">
        <article className="desc flex center column">
          <h1 className="rtl">איזו ברכה תרצו ?</h1>
          <p className="desc rtl">
            הינכם יכולים לבחור ברכה אשר תשלח אליכם ביום ההולדת/נישואין/בר
            מצווה/בת מצווה או כל חגיגה שיש לכם, אנחנו נשמח להשתתף בה ולהכין לכם
            את הברכה לחגיגה זו, אז למה אתם מחכים?
            <br />
            מה שנותר לכם הוא למלא את הפרטים בתוך הברכה הרצויה ואנחנו כבר נדאג
            שזה יגיע כמו שביקשתם!
          </p>
        </article>
        <div className="greet_cards grid">
          {data.map((greet) => {
            return (
              <article
                key={greet.id}
                className="greet_card_item flex column center"
              >
                <h1>{greet.name}</h1>
                <p> {greet.desc}</p>
                <h4>Greet Type: {`${greet.source}`}</h4>
                <img
                  src={greet.file}
                  alt=""
                />
                <Link
                  to={`/greeting-cards/:${greet.id}`}
                  state={{ greet }}
                >
                  לחץ כאן
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default GreetingCards
