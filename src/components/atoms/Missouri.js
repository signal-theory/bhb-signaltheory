import React, { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import { missouriData } from "../../data-missouri"
import moIcon from "../../images/missouri-icon.svg"
import MoChecklist from "./MoChecklist"

const Missouri = () => {
  //const today = new Date(Date.now());
  const [toggled, setToggled] = useState(false)
  const toggleAccordion = (index) => {
    if (toggled === index) {
      return setToggled(null);
    }
    setToggled(index);
  }
  return (
    <>
      <div className="section registration-links">
        <Fade>
          <h1>{missouriData.heading}</h1>
        </Fade>
        <div className="links-wrapper">
          {missouriData.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.image} alt={link.title} />
            </a>
          ))}
        </div>
      </div>
      <div className="section important-dates pink">
        <Fade>
          <h1>{missouriData.headingDates}<img src={moIcon} alt="missouri state icon" /></h1>
        </Fade>
        <div className="dates-wrapper">
          <div className="dates-content">
            {missouriData.dates.map((date) => (
              <>
                <h3 className="column h3" key={date.id}>
                  {date.date}
                </h3>
                <h4 className="column h4" key={date.id}>
                  {date.title}
                </h4>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="section faqs primary-yellow">
        <Fade>
          <h1>{missouriData.headingFAQs}</h1>
        </Fade>
        <div class="accordion-wrapper">
          {missouriData.faqs.map((item, index) => (
            <div className="accordion-item">
              <button className={`accordion-title ${toggled === index ? 'active' : ''}`} key={item.index} onClick={() => toggleAccordion(index)}>
                <h3>{item.title}</h3>
              </button>
              <div className={`accordion-panel ${toggled === index ? 'open' : 'closed'}`} key={item.index}>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <MoChecklist />
    </>
  )
}

export default Missouri