import React from "react";
import {Link} from 'react-router-dom'


const LeftContent = () => {
  return (
    <div className="left-content">
      <div className="global-links">
        <Link to="#">
          <img  alt="creationfallbook" src="//i.imgur.com/5jInimY.jpg" /> First Last
          <span className="counter">1</span>
        </Link>
        <Link className="activepage" to="#">
          <img alt="creationfallbook" src="http://brassnecktheatre.com/wp-content/uploads/2013/11/news-icon.png" />{" "}
          News Feed
          <span className="counter">
            <i className="fa fa-ellipsis-h" />
          </span>
        </Link>
        <Link to="/messenger">
          <img alt="creationfallbook" src="http://icons.iconarchive.com/icons/wineass/ios7-redesign/512/Messages-icon.png" />{" "}
          Messenger
          <span className="counter">1</span>
        </Link>
        <div className="group-content">
          <h4>shortcuts</h4>
          <Link to="#">
            <img alt="creationfallbook" src="http://theieltscoach.com/wp-content/uploads/2015/03/IELTS-Speaking-Tips-Icon-2.png" />{" "}
            Group name
            <span className="counter">1</span>
          </Link>
          <Link to="#">
            <img alt="creationfallbook" src="http://theieltscoach.com/wp-content/uploads/2015/03/IELTS-Speaking-Tips-Icon-2.png" />{" "}
            Group name
            <span className="counter">1</span>
          </Link>
        </div>
        <div className="group-content">
          <h4>explore</h4>
          <Link to="#">
            <img alt="creationfallbook" src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-13/512/Webpage-icon.png" />{" "}
            Pages
            <span className="counter">1</span>
          </Link>
          <Link to="#">
            <img alt="creationfallbook" src="https://www.iconfinder.com/data/icons/unique-round-blue/93/group-512.png" />{" "}
            Groups
            <span className="counter">1</span>
          </Link>
        </div>
        <div className="group-content">
          <h4>create</h4>
          <Link to="#">
            <img alt="creationfallbook" src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-13/512/Webpage-icon.png" />{" "}
            Page
          </Link>
          <Link to="#">
            <img alt="creationfallbook" src="https://www.iconfinder.com/data/icons/unique-round-blue/93/group-512.png" />{" "}
            Group
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
