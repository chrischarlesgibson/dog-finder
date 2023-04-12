import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchComponent from "./pages/SearchComponent";
import LoginComponent from "./pages/LoginComponent";
import Footer from "./components/Footer";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Routes>
          <Route exact path="/" element={<LoginComponent />} />
          <Route exact path="/Search" element={<SearchComponent />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
