import React, { useState, useEffect } from "react";
import db, { storage } from "../redux/firebase/firebase";
import { Link } from "react-router-dom";


const Afriend = ({friend}) => {
    const [name, setname] = useState('')
    const [img, setimg] = useState('')
    const [online, setonline] = useState(null)

    useEffect(() => {
       const unsubscribe = db.collection('users').doc(friend.id).onSnapshot(
        user => {
            setname(`${user.data().FirstName} ${user.data().LastName}`)
            setimg(user.data().userImg)
            setonline(user.data().isOnline)
        })

        return () => unsubscribe()
    }, []);


  return (
    <li>
      <Link to={`/homepage/user/${friend.id}`}>
        <img src={img} align="left" alt={name} />
        <b>{name}</b><span className={online ? 'friendOnline' : 'friendOffline'}>{online ? 'Online' : 'Offline'}</span>
      </Link>
    </li>
  );
};

export default Afriend;
