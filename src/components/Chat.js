import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import db, { timestamp } from "../redux/firebase/firebase";
import { sendMessage } from "../redux/actions";

function setOneToOneChat(uid1, uid2) {
  //Check if user1’s id is less than user2's
  if (uid1 < uid2) {
    return uid1 + uid2;
  } else {
    return uid2 + uid1;
  }
}

const Chat = ({ user_uid_1, ImgUrl, toggleMessage }) => {
  const [message, setMessage] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [privateMessage, setPrivate] = useState([]);
  const dummy = useRef();

  useEffect(() => {
    let roomID = setOneToOneChat(user_uid_1, auth.uid);
    let unsubscribe = db
      .collection("rooms")
      .doc(roomID)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snap) => {
        setPrivate(
          snap.docs.map((doc) => ({ data: doc.data(), MessageId: doc.id }))
        );
      });
    return () => unsubscribe();
  }, [user_uid_1]);

  const submitMessage = async (e) => {
    e.preventDefault();
    const msgObj = {
      receiver: user_uid_1,
      sender: auth.uid,
      message,
      timestamp: timestamp,
    };

    let roomID = setOneToOneChat(user_uid_1, auth.uid);
    // db.collection("rooms").doc(roomID).collection("messages").add(msgObj);

    if (message !== "") {
      db.collection("rooms")
        .doc(roomID)
        .collection("messages")
        .add(msgObj)
        .then(() => console.log("sent"));
    }

    setMessage("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  const deleteMessage = (id) => {
    let roomID = setOneToOneChat(user_uid_1, auth.uid);
    db.collection("rooms")
      .doc(roomID)
      .collection("messages")
      .doc(id)
      .delete()
      .then(() => {
        console.log("deleted");
      });
  };

  return (
    <>
      <div className="col-content">
        <section className="message">
          <div className="" style={{ width: "100%", display: "inline-grid" }}>
            {privateMessage.map((item) => {
              return (
                <div className="" key={item.MessageId}>
                  {item.data.sender === auth.uid ? (
                    <>
                      <div className="col-message-sent">
                        <div className="message-sent">
                          <p> {item.data.message}</p>
                        </div>
                        {toggleMessage ? (
                          <i style={{color: 'rgb(227, 38, 54)'}}
                            class="far fa-trash-alt"
                            onClick={() => deleteMessage(item.MessageId)}
                          ></i>
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className="col-message-received">
                      <div className="message-received">
                        <p> {item.data.message}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
        <div ref={dummy}></div>
      </div>
      {/** FOOTER INPUT */}
      <div className="col-foot" style={{position: 'static'}}>
        <div className="compose">
          <form onSubmit={submitMessage}>
            <input
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="compose-dock">
              <div className="dock">
                <button type="submit" className="postcomment">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
