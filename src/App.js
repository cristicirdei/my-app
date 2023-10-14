import React from "react";
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

// components
import LandingPage from "./pages/LandingPage";
import DesignSystem from "./pages/DesignSystem";
import Books from "./pages/Books";
import BooksReplay2023 from "./pages/BooksReplay2023";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/ds" element={<DesignSystem />} />
          <Route exact path="/books" element={<Books />} />
          <Route exact path="/booksreplay2023" element={<BooksReplay2023 />} />
        </Routes>
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
