import React from "react"
import { Link, useLocation } from "react-router-dom"

const GreetingCard = () => {
  const location = useLocation()
  const { greet } = location.state

  return (
    <div className="greeting_card_container container grid">
      <div className="greeting_card">
        <h2>זו הברכה שבחרתם</h2>
        <div className="greet_card">
          <h1 className="rtl">ברכה מספר: {greet.name}</h1>
          <p className="rtl"> {greet.desc}</p>
          {greet.source === "video" ? (
            <div className="youtube">
              <h3>דוגמא ניתן לראות בסרטון הבא:</h3>
              <iframe
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${greet.video}`}
                title="Greeting Video"
                allowFullScreen
              >
                Your browser does not support the iframe tag.
              </iframe>
            </div>
          ) : (
            <div className="image">
              <h3>דוגמא לברכה</h3>
              <img
                src={greet.file}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      <div className="form_box ">
        <h3>מילאו את הפרטים הבאים</h3>
        <form
          action=""
          className="flex column rtl"
        >
          <label htmlFor="name">שם מלא</label>
          <input
            type="text"
            required
          />
          <label htmlFor="date">תאריך </label>
          <input
            type="date"
            required
          />
          <label htmlFor="email">מייל</label>
          <input
            type="email"
            required
          />
          <label htmlFor="phone"> מספר טלפון נייד</label>
          <input
            type="number"
            required
          />
          <label htmlFor="extras"> בקשות מיוחדות </label>

          <textarea
            name="extras"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">שלח</button>
        </form>
      </div>

      <Link to={"/greeting-cards"}>חזרה</Link>
    </div>
  )
}

export default GreetingCard
