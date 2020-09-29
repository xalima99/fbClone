import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../redux/actions";
import { Link } from "react-router-dom";
import { history } from "../App";
import db from "../redux/firebase/firebase";
import {Media} from 'react-bootstrap';

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const [allusers, setallusers] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    db.collection("users")
      .get()
      .then((users) => {
        setallusers(
          users.docs.map((user) => {
            return user.data();
          })
        );
      });
  }, []);

  const dispatch = useDispatch();
  const onSignOut = async () => {
    dispatch(signout(auth.uid));
  };

  const onSearching = (e) => {
    setsearch(e.target.value);
  };

  return (
    <div className="topbar" style={{ zIndex: "900" }}>
      <div className="search-box">
        
      </div>

      
      <div className="right-group">
        <div className="link-group">
          <Link to={`/homepage/user/${auth.uid}`}>
            <img
              src={
                auth.userImg
                  ? auth.userImg
                  : "https://pbs.twimg.com/profile_images/831173492968140804/43M7c5j_.jpg"
              }
            />
            {`${auth.FirstName} ${auth.LastName}`}
          </Link>
        </div>
        <div className="link-group">
          <Link to="/homepage">Home</Link>
        </div>
        <div className="link-group">
          <Link to="/messenger">Messagerie</Link>
        </div>
        <div className="notification-group">
          <div className="link-group" onClick={() => onSignOut(auth)}>
            <Link className="helpguide" to="#">
              <i className="fas fa-sign-out-alt"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
