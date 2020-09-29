import React, { useState, useEffect } from "react";
import db, { storage } from "../redux/firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/imgs/loggo.png";
import AMessFriend from "./AMessFriend";
import { Link } from "react-router-dom";
import Chat from "./Chat";

const Messenger = () => {
  const auth = useSelector((state) => state.auth);
  const [friends, setfriends] = useState([]);
  const [chatUserName, setchatUserName] = useState("");
  const [chatStarted, setchatStarted] = useState(false);
  const [ImgUrl, setImgUrl] = useState("");
  const [isOnline, setisOnline] = useState(null);
  const [userUid, setuserUid] = useState(null);
  const [toggleMessage, settoggleMessage] = useState(false);

  const onManageMess = () => {
    settoggleMessage((prev) => !prev);
  };

  useEffect(() => {
    let unsub = db
      .collection("users")
      .doc(auth.uid)
      .collection("friends")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        setfriends(
          snap.docs.map((doc) => {
            return doc.data();
          })
        );
      });

    return () => unsub();
  }, []);

  const initChat = ({ id, name, img, online }) => {
    setchatStarted(true);
    setchatUserName(name);
    setuserUid(id);
    setisOnline(online);
    setImgUrl(img);
  };

  return (
    <div className="body">
      <div>
        <div className="wrapper-mobile">
          <div className="mobile">
            <img src={logo} />
            Not available on Tablet or Mobile devices.
          </div>
        </div>
        <div className="wrapper">
          <header>
            <div className="container">
              <div className="left">
                <Link to="/homepage"><img src={logo} /></Link>
              </div>
              <div className="middle">
                {chatStarted ? <h3>{chatUserName}</h3> : 'Click on one user to start Chat'}
              </div>
              <div className="right">
                {chatStarted ? (
                  <button
                  style={{cursor: "pointer"}}
                    className="btn btn-info btn-sm"
                    onClick={onManageMess}
                  >
                    Manage messages
                  </button>
                ) : null}
                <div className="username">
                  <div className="settings">
                    <img src="./img/settings.svg" />
                  </div>
                  <Link to="/homepage" style={{color: '#8c396e'}}>{`${auth.FirstName} ${auth.LastName}`}</Link>
                </div>
                <div className="avatar">
                  <img src={auth.userImg} />
                </div>
              </div>
            </div>
          </header>
          <main className="disc" style={{ height: "100vh" }}>
            <div className="col-left">
              <div className="col-content">
                <div className="messages">
                <div className="text-center">
                <p className="text-sm text-muted">PS :You can only chat with you friend</p>
                </div>
                  {friends.map((friend) => {
                    return (
                      <div
                        className=""
                        key={friend.id}
                        style={{
                          cursor: "pointer",
                          borderBottom: "1px solid 1px solid rgba(0, 0, 0, 1)",
                          boxShadow: "0 0px 13px rgba(0, 0, 0, 0.06)",
                        }}
                      >
                        <AMessFriend friend={friend} onClick={initChat} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col" style={{ height: "revert" }}>
              {chatStarted ? (
                <>
                  <Chat
                    user_uid_1={userUid}
                    ImgUrl={ImgUrl}
                    toggleMessage={toggleMessage}
                  />
                </>
              ) : null}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
