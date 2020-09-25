import React from 'react';
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Navbar from './Navbar';
import LeftContent from './LeftContent';
import FeedContent from './FeedContent';
import ThirdCol from './ThirdCol';
import RightContent from './RightContent';

const Accueil = () => {
    const auth = useSelector(state => state.auth)

    if(!auth.isAuthed){
    return <Redirect to={"/"} />
  }


    return (
        <div className="accueil">
             <div>
       <Navbar />
       <LeftContent />
        <FeedContent />
        <ThirdCol />
        <RightContent />
      </div>
        </div>
    )
}

export default Accueil
