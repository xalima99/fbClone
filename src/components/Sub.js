import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import connecting from '../assets/imgs/homelogo.png';
import MobiLog from './MobiLog'

const Sub = () => {
    const auth = useSelector(state => state.auth)
  if(auth.isAuthed){
    return <Redirect to={"/homepage"} />
  }



  return (
    <div>
      <div>
        <div className="computer">
    <LoginForm />
          <div className="maindiv">
            <div className="mainsubdiv">
              <div className="welcome">
                <div className="welcometext">
                  NOMAD is a small clone of Facebook. Made by Amadou Fall.
                  Tech Stack : React, Redux, Firebase. <a href=" https://github.com/xalima99/fbClone">Github</a>
                </div>
                <div className="welcomepic">
                  <img src={connecting} alt="welcome" />
                </div>
              </div>
              <SignupForm />
            </div>
          </div>
        </div>
        {/*Code for Mobile Screen*/}
        <div className="mobile">
          <div className="mobheader">
           
          </div>
          <div id="mobapplink" className="clearfix">
          </div>
          <MobiLog />
          <div className="mobfooter">
            <div id="moblangs">
              <div className="item1">
                <li>
                  <a href="#" id="mobcurrentlang">
                    English (UK)
                  </a>
                </li>
                <li>
                  <a href="#">தமிழ்</a>
                </li>
                <li>
                  <a href="#">हिन्दी</a>
                </li>
                <li>
                  <a href="#">বাংলা</a>
                </li>
              </div>
              <div className="item2">
                <li>
                  <a href="#">മലയാളം</a>
                </li>
                <li>
                  <a href="#">ಕನ್ನಡ</a>
                </li>
                <li>
                  <a href="#">اردو</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-plus-square-o" />
                  </a>
                </li>
              </div>
            </div>
            <div className="mobcopyright">
              <span className="mobfbcopyright">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  id="mobcopyrightfblink"
                >
                  Nomad
                </a>{" "}
                ©2020
              </span>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sub;
