import React from "react";
import { Link, useLocation } from "react-router-dom";
function Vrecipe() {
  const location = useLocation();
  const food = location.state;
  if (!food) {
    return <p>No recipe Selected</p>;
  }

  return (
    <div className="mt-[75px]  px-[5%] tablet:px-[15%] my-5 gap-2 flex flex-col ">
      <h1
        style={{
          fontSize: "var(--xl)",
          fontWeight: "500",
          textShadow: "2px 1px 0 var(--red)",
        }}
      >
        {food.name}
      </h1>
      <img
        src={food.image}
        className=" bg-slate-950 object-cover h-auto w-auto shadow-2xl shadow-gray-50"
        alt={food.name.spl}
      />
      <h1
        style={{
          fontSize: "var(--xl)",
          fontWeight: "500",
          color: "var(--red)",
        }}
      >
        Recipe
      </h1>
      <ul style={{ listStyleType: "number" }} className="pl-[4%]">
        {food.recipe
          .split(".")
          .filter((sentence) => sentence.trim() !== "")
          .map((sentence, index) => (
            <li
              key={index}
              style={{ fontSize: "var(--sm)", fontWeight: "400" }}
            >
              {sentence.trim()}.
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Vrecipe;
