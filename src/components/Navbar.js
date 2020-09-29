import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../redux/actions";
import {Link} from 'react-router-dom';
import {history} from '../App';


const Navbar = () => {
  const auth = useSelector((state) => state.auth);


  const dispatch = useDispatch();
  const onSignOut =  async () => {
    dispatch(signout(auth.uid))

  };
  return (
    <div className="topbar" style={{zIndex:"900"}}>
      <Link className="logo" to='/homepage'>
        <img
        style={{width: '30px'}}
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QAOwBeAJXJ9VaZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QUcFAwZEBLpsAAAAO5JREFUSMdj2Hrw+v+///79pzb4++/f/60Hr/9n/Pvv338mRkYGWoB///8zMP7///8/Aw0BCyWaL99+wXDk7D2Gdx+/M3CwszDw8bAziAvxMfg5aVFuQe+Cgwzr91/FKodsARM5hu89cQen4eiALAs27LtC2zi4+eA1Cr8q2YnBzVqNgYWZiTo++PbzNwrf2UIFq+FkW4AO2NlYqBsHpACiM5pN/DSiDFzRGcUgIyFAOx9IiPLRLoj4eTgwIpuqFkgK85IfB/ji48jCrIFLRaMWjAQL/tGwSv73/z8D047DNxloYcm///8Zdhy+yQAAwrOldG/7uKoAAAAASUVORK5CYII="
        />
      </Link>
      <div className="search-box">
        <div className="input-group">
          <input
            aria-describedby="basic-addon2"
            className="form-control"
            placeholder="Search Facebook"
            type="text"
          />
          <button className="input-group-addon pointer" id="basic-addon2">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
      <div className="right-group">
        <div className="link-group">
          <Link to={`/homepage/user/${auth.uid}`}>
            <img src={auth.userImg ? auth.userImg : 'https://pbs.twimg.com/profile_images/831173492968140804/43M7c5j_.jpg'} />
            {`${auth.FirstName} ${auth.LastName}`}
          </Link>
        </div>
        <div className="link-group">
          <Link to="/homepage">Home</Link>
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
