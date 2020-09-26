import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'

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
                  Facebook helps you connect and share with the people in your
                  life.
                </div>
                <div className="welcomepic">
                  <img src="images/connecting.png" alt="welcome" />
                </div>
              </div>
              <SignupForm />
            </div>
          </div>
        </div>
        {/*Code for Mobile Screen*/}
        <div className="mobile">
          <div className="mobheader">
            <img alt="welcome" src="images/fblogo.png" className="mobfblogo" />
          </div>
          <div id="mobapplink" className="clearfix">
            <a href="#">
              <img alt="welcome" src="images/fbandroid.png" id="mobandroidpic" />
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
