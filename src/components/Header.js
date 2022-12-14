import React from "react"
import Tabs from "./atoms/Tabs"
import { Fade, AttentionSeeker } from "react-awesome-reveal"
//https://www.npmjs.com/package/react-reveal
//import scrollTo from "gatsby-plugin-smoothscroll"
import { headerData } from "../data/data-header"
import VoteLogo from './atoms/VoteYourHeartOut.js'


const Header = (props) => {
  return (
    <>
      <header className="header primary-yellow" id="header">
        <div className="container">
          <div className="header-wrapper">
            <AttentionSeeker effect="pulse" duration={2000}>
              <VoteLogo />
            </AttentionSeeker>
            <Fade duration={500} direction="down">
              <p>
                {headerData.titlename}
              </p>
              <p className="bold">
                {headerData.headername}
              </p>
            </Fade>
            <AttentionSeeker effect="tada" delay={100} duration={2000} triggerOnce>
              <p className="bold arrow">
                {props.yourStateHeadline}
                <img src={headerData.arrowImg} alt="down arrow" width={31} />
              </p>
            </AttentionSeeker>
            <div id="stateTabs"></div>
            <Fade>
              <img className="sticker" src={headerData.stickerImg} alt="Babes Helpin Babes at Signal Theory" width={200} />
            </Fade>
          </div>
        </div>
      </header>
      <Tabs
        tabClass1={props.tabClass1}
        tabClass2={props.tabClass2}
        handleState1={props.handleState1}
        handleState2={props.handleState2}
      />
    </>
  )
}

export default Header
