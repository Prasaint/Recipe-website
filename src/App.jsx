import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Page/Home";
import Recipe from "./Page/Recipe";
import Setting from "./Page/Setting";
import Vrecipe from "./Page/VRecipe";
function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />{" "}
        <Route path="/setting" element={<Setting />} />{" "}
        <Route path="/vrecipe" element={<Vrecipe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
