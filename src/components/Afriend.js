import React, { useState, useEffect } from "react";
import db, { storage } from "../redux/firebase/firebase";
import { Link } from "react-router-dom";


const Afriend = ({friend, authuid}) => {
    const [name, setname] = useState('')
    const [img, setimg] = useState('')
    const [online, setonline] = useState(null)

    useEffect(() => {
       const unsubscribe = db.collection('users').doc(friend.id).onSnapshot(
        user => {
            setname(`${user.data()?.FirstName?.toLowerCase()} ${user.data()?.LastName?.toLowerCase()}`)
            setimg(user.data()?.userImg)
            setonline(user.data()?.isOnline)
        })

        return () => unsubscribe()
    }, []);


  return (
    <li>
      <Link to={`/messenger/${authuid}`}>
        <img src={img} align="left" alt={name} />
        <b>{name}</b><span className={online ? 'friendOnline' : 'friendOffline'}>{online ? 'Online' : 'Offline'}</span>
      </Link>
    </li>
  );
};

export default Afriend;
