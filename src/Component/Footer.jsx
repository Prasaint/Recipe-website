import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" px-[5%] tablet:px-[15%] py-5 tablet:py-8 bg-black text-white flex tablet:flex-row flex-col-reverse gap-3  tablet:justify-between">
      <div className="sec-1 ">
        <h1 className="font-bold">NepFoodies.com</h1>
        <p>
          NepFoodies is your go-to platform for discovering authentic Nepali
          cuisine and international flavors. We bring food enthusiasts together
          to explore recipes, restaurant reviews, and cooking tips.
        </p>
        <p>@2025 Copyright Reversed.</p>
      </div>
      <div className="sec-2 ">
        <h1 className="font-bold">Contact Us</h1>
        <ul>
          <p>NepFoodie@gmail.com</p>
          <p>+997 9815565757</p>
          <p>Nepalgunj, Nepal</p>
        </ul>
      </div>
      <div className="sec-3 ">
        <h1 className="font-bold">Socials</h1>
        <ul className="flex gap-2">
          <Link to="/" className=" hover:underline hover:underline-offset-1">
            Home
          </Link>
          <Link to="/recipe">Recipe</Link>
          <Link to="/setting">Setting</Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
