import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import { Counter } from "./features/counter/Counter";

// styles
import "./styles/Layout.scss";
import "./styles/App.scss";
import "./styles/Master.scss";
import "./styles/Landing.scss";
import "./styles/BookView.scss";
import "./styles/Books.scss";
import "./styles/BooksResponsive.scss";
import "./styles/Stats.scss";
import "./styles/BooksReplay.scss";

// components
import LandingPage from "./pages/LandingPage";
import DesignSystem from "./pages/DesignSystem";
import Books from "./pages/Books";
import BooksReplay2023 from "./pages/BooksReplay2023";

function App() {
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token !== null && token !== undefined) {
      const decoded = parseJwt(token);

      if (decoded.exp * 1000 < new Date().getTime()) {
        localStorage.clear();
        window.location.reload();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="col-12">
          <Routes>
            <Route exact path="/my-app/" element={<LandingPage />} />
            <Route exact path="/my-app/ds/" element={<DesignSystem />} />
            <Route exact path="/my-app/books/" element={<Books />} />
            <Route
              exact
              path="/my-app/booksreplay2023/"
              element={<BooksReplay2023 />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      {/*<BrowserRouter>
        <div className="col-12">
          <Routes>
            <Route path="/login" element={<Login></Login>} />
            <Route path="/auth/join" element={<></>} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
  </BrowserRouter>*/}
    </>
  );
}

export default App;
