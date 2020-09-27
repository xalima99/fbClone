import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import LeftContent from "./LeftContent";
import FeedContent from "./FeedContent";
import ThirdCol from "./ThirdCol";
import RightContent from "./RightContent";
import Layout from "./Layout";

const Accueil = () => {
  const auth = useSelector((state) => state.auth);

  if (!auth.uid) {
    return <Redirect to={"/"} />;
  }

  return (
    <Layout>
      <div className="accueil">
        <LeftContent />
        <FeedContent />
        <ThirdCol />
        <RightContent />
      </div>
    </Layout>
  );
};

export default Accueil;
