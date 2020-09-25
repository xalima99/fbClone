import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'

import connecting from '../assets/imgs/connecting.png'

const Sub = () => {
  //   const auth = useSelector(state => state.auth)
  // if(auth.isAuthed){
  //   return <Redirect to={"/homepage"} />
  // }



  return (
    <div>
      <div>
        <div className="computer">
    <LoginForm />
          <div className="maindiv">
            <div className="mainsubdiv">
              <div className="welcome">
                <div className="welcometext">
                  Facebook helps you connect and share with the people in your
                  life.
                </div>
                <div className="welcomepic">
                  <img src={connecting} alt="welcome" />
                </div>
              </div>
              <SignupForm />
            </div>
          </div>
          <footer>
            <div id="footersubdiv">
              <div id="languagediv">
                <a href="#" className="language" id="currentlang">
                  English (UK)
                </a>
                <a href="#" className="language">
                  മലയാളം
                </a>
                <a href="#" className="language">
                  தமிழ்
                </a>
                <a href="#" className="language">
                  ಕನ್ನಡ
                </a>
                <a href="#" className="language">
                  हिन्दी
                </a>
                <a href="#" className="language">
                  اردو
                </a>
                <a href="#" className="language">
                  বাংলা
                </a>
                <a href="#" className="language">
                  తెలుగు{" "}
                </a>
                <a href="#" className="language">
                  Español
                </a>
                <a href="#" className="language">
                  Português (Brasil)
                </a>
                <a href="#" className="language">
                  Français (France)
                </a>
                <a href="#" id="morelang">
                  <i className="fa fa-plus" aria-hidden="true" />
                </a>
              </div>
              <hr id="hrfinal" />
              <div id="extralinksdiv">
                <a href="#" className="extralinks">
                  Sign Up
                </a>
                <a href="#" className="extralinks">
                  Log In
                </a>
                <a href="#" className="extralinks">
                  Messenger
                </a>
                <a href="#" className="extralinks">
                  Facebook Lite
                </a>
                <a href="#" className="extralinks">
                  Find Friends
                </a>
                <a href="#" className="extralinks">
                  People
                </a>
                <a href="#" className="extralinks">
                  Profiles
                </a>
                <a href="#" className="extralinks">
                  Pages
                </a>
                <a href="#" className="extralinks">
                  Page categories
                </a>
                <a href="#" className="extralinks">
                  Places
                </a>
                <a href="#" className="extralinks">
                  Games
                </a>
                <a href="#" className="extralinks">
                  Locations
                </a>
                <a href="#" className="extralinks">
                  Marketplace
                </a>
                <a href="#" className="extralinks">
                  Groups
                </a>
                <a href="#" className="extralinks">
                  Instagram
                </a>
                <a href="#" className="extralinks">
                  Local
                </a>
                <a href="#" className="extralinks">
                  Fundraisers
                </a>
                <a href="#" className="extralinks">
                  About
                </a>
                <a href="#" className="extralinks">
                  Create ad
                </a>
                <a href="#" className="extralinks">
                  Create Page
                </a>
                <a href="#" className="extralinks">
                  Developers
                </a>
                <a href="#" className="extralinks">
                  Careers
                </a>
                <a href="#" className="extralinks">
                  Privacy
                </a>
                <a href="#" className="extralinks">
                  Cookies
                </a>
                <a href="#" className="extralinks">
                  AdChoices
                </a>
                <a href="#" className="extralinks">
                  Terms
                </a>
                <a href="#" className="extralinks">
                  Account security
                </a>
                <a href="#" className="extralinks">
                  Login help
                </a>
                <a href="#" className="extralinks">
                  Help
                </a>
              </div>
              <div id="copyrightdiv">
                <span id="copyright">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    id="copyrightfblink"
                  >
                    Facebook
                  </a>{" "}
                  © 2019
                </span>
                <span id="disclaimer">
                  UI cloned for educational purposes by{" "}
                  <a
                    href="https://www.linkedin.com/in/kspranav10/"
                    target="_blank"
                    id="pranavks"
                  >
                    Pranav K S &nbsp;
                    <i className="fa fa-linkedin-square" />
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </div>
        {/*Code for Mobile Screen*/}
        <div className="mobile">
          <div className="mobheader">
            <img src="images/fblogo.png" className="mobfblogo" />
          </div>
          <div id="mobapplink" className="clearfix">
            <a href="#">
              <img src="images/fbandroid.png" id="mobandroidpic" />
              <div id="getfbandroid">
                Get Facebook for Android and browse faster.
              </div>
            </a>
          </div>
          <div className="mobmaindiv">
            <div id="mobtextdiv">
              <input
                type="text"
                className="mobtextbox mobtextbox1"
                placeholder="Mobile number or email address"
              />
              <input
                type="password"
                className="mobtextbox mobtextbox2"
                placeholder="Password"
              />
            </div>
            <div className="mobloginbuttondiv">
              <input
                type="submit"
                className="mobloginbutton"
                defaultValue="Log In"
              />
            </div>
            <div id="ordiv">
              <span id="or">or</span>
            </div>
            <div id="mobcreatediv">
              <button id="mobcreate">Create New Account</button>
            </div>
            <div className="mobforgotpw">
              <a href="#">Forgotten password?</a>
              <span>·</span>
              <a href="#">Help Center</a>
            </div>
          </div>
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
                  Facebook
                </a>{" "}
                ©2019
              </span>
              <br />
              <span id="mobdisclaimer">
                UI cloned for educational purposes by{" "}
                <a
                  href="https://www.linkedin.com/in/pranavks/"
                  target="_blank"
                  id="mobpranavks"
                >
                  Pranav K S &nbsp;
                  <i className="fa fa-linkedin-square" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sub;
