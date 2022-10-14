import React from "react";
import {   Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import MainBody from "./components/MainBody";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<MainBody />}></Route>
        {/* <Route path="/body" element={<MainBody />}></Route> */}
      </Routes>
      {/* <Header/> */}
    </>
  );
}

export default App;
