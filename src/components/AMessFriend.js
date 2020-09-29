import React, { useState, useEffect } from "react";
import db, { storage } from "../redux/firebase/firebase";
import { Link } from "react-router-dom";

const Afriend = ({ friend, authuid, onClick }) => {
  const [name, setname] = useState("");
  const [img, setimg] = useState("");
  const [online, setonline] = useState(null);

  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .doc(friend.id)
      .onSnapshot((user) => {
        setname(
          `${user
            .data()
            ?.FirstName?.toLowerCase()} ${user.data()?.LastName?.toLowerCase()}`
        );
        setimg(user.data()?.userImg);
        setonline(user.data()?.isOnline);
      });

    return () => unsubscribe();
  }, []);

  return (
    <li onClick={() => onClick({id: friend.id, name: name, img: img, online: online})}>
      <div className="avatar">
        <div className="avatar-image">
          <div className="status online" />
          <img src={img} />
        </div>
      </div>
      <h3>{name}</h3>
      <p>{online ? 'Online' : 'Offline'}</p>
    </li>
  );
};

export default Afriend;
