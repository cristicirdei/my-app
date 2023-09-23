import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/molecules/Header";

const LandingPage = () => {
  const [media, setMedia] = useState(0);

  useEffect(() => {
    setMedia(window.matchMedia("(min-width: 768px)").matches);
  }, []);

  return (
    <>
      <Header></Header>
      <div className="page">
        <h1 className="landingTitle">
          hello! my name is cristi. here is a small part of myself
        </h1>
      </div>
    </>
  );
};

export default LandingPage;
