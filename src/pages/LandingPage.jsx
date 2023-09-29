import React from "react";
import Header from "../components/molecules/Header";

const LandingPage = () => {
  /*const [media, setMedia] = useState(0);

  useEffect(() => {
    setMedia(window.matchMedia("(min-width: 768px)").matches);
  }, []);*/

  return (
    <>
      <Header></Header>
      <div className="page">
        <div className="blob"></div>
        <div className="glass"></div>
        <h1 className="landingTitle">cristi cîrdei</h1>
        <p className="about-me">
          <em>hi!</em> and <em>welcome!</em> more about me soon-ish :)
        </p>
      </div>
    </>
  );
};

export default LandingPage;
