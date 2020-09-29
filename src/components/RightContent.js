import React, { useState, useEffect } from "react";
import db, { storage } from "../redux/firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {acceptFriend, denyFriend} from '../redux/actions'
import Afriend from "./Afriend";


const RightContent = () => {
  const [requests, setrequests] = useState([]);
  const [friends, setfriends] = useState([]);
  const authuid = useSelector((state) => state.auth.uid);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = db
      .collection("users")
      .doc(authuid)
      .collection("asked")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        setrequests(snap.docs.map((doc) => doc.data()));
      });

    

    return () => unsub();
  }, []);

  useEffect(() => {
    let unsub = db
      .collection("users")
      .doc(authuid)
      .collection("friends")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        setfriends(snap.docs.map((doc) => doc.data()));
      });

    

    return () => unsub();
  }, []);


  const onAccept = (id) => {
    dispatch(acceptFriend({source:id, target:authuid}))
  }

  const onDeny = (id) => {
    dispatch(denyFriend({source:id, target:authuid}))
  }

  return (
    <div className="right-content">
      <ul style={{overflow:"scroll"}}>
      <h4 className="yournotif">You Have <span className={requests.length > 0 ? 'pastille' : ''}>{requests.length}</span> Notifications</h4>
        {requests?.map((item) => {
          return (
            <li key={item.id}>
              <Link to="#">
                <img src={item.userImg} align="left" />
                <b>{item.name}</b> <span>Vous a demandé en ami</span>
              </Link>
              <div className="p-2">
                <div className="btn btn-success btn-sm" onClick={() => onAccept(item.id)}>Accept</div>
                <div className="btn btn-danger btn-sm ml-3" onClick={() => onDeny(item.id)}>Deny</div>
              </div>
            </li>
          );
        })}
      </ul>
      <ul style={{overflow:"scroll"}}>
        <h4>Your Friends</h4>
        {
          friends.map(friend => {
            return (
              <Afriend friend={friend} key={friend.id} authuid={authuid} />
            )
          })
        }
      </ul>
    </div>
  );
};

export default RightContent;
