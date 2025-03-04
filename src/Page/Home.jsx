import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import chiefs from "../assets/c1.jpg";
import all from "../assets/s.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

function Home() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const chief_data = [
    {
      name: "Peashant Khadka",
      image: chiefs,
      recipe: "12",
      cuisine: "Italian",
      fac: "https://www.facebook.com/peashant",
      ins: "https://www.instagram.com/peashant",
      x: "https://www.x.com/peashant",
    },
    {
      name: "Aarav Thapa",
      image: chiefs,
      recipe: "15",
      cuisine: "Nepali",
      fac: "https://www.facebook.com/aarav",
      ins: "https://www.instagram.com/aarav",
      x: "https://www.x.com/aarav",
    },
    {
      name: "Maya Shah",
      image: chiefs,
      recipe: "18",
      cuisine: "French",
      fac: "https://www.facebook.com/maya",
      ins: "https://www.instagram.com/maya",
      x: "https://www.x.com/maya",
    },
    {
      name: "Rajesh Acharya",
      image: chiefs,
      recipe: "20",
      cuisine: "Indian",
      fac: "https://www.facebook.com/rajesh",
      ins: "https://www.instagram.com/rajesh",
      x: "https://www.x.com/rajesh",
    },
    {
      name: "Emily Killer",
      image: chiefs,
      recipe: "25",
      cuisine: "American",
      fac: "https://www.facebook.com/emily",
      ins: "https://www.instagram.com/emily",
      x: "https://www.x.com/emily",
    },
    {
      name: "Sanjay Chaudry",
      image: chiefs,
      recipe: "22",
      cuisine: "Chinese",
      fac: "https://www.facebook.com/sanjay",
      ins: "https://www.instagram.com/sanjay",
      x: "https://www.x.com/sanjay",
    },
  ];

  return (
    <div className="mt-[75px] px-[5%] tablet:px-[15%] ">
      <div className="sec-1 tablet:flex-row flex flex-col-reverse mb-10 tablet:justify-around ">
        <div className="text-justify  my-4  tablet:w-[40%] flex flex-col tablet:justify-around ">
          <h1
            style={{
              fontSize: "var(--xl)",
              fontWeight: "bold",
              marginTop: "5px",
            }}
          >
            What We Are About
          </h1>
          <p
            style={{
              fontSize: "var(--sm)",
              fontWeight: "400",
              marginTop: "5px",
            }}
          >
            "NepFoodies is your go-to platform for discovering authentic Nepali
            cuisine and international flavors. We bring food enthusiasts
            together to explore recipes, restaurant reviews, and cooking tips."
          </p>
          <button
            className="rounded-md shadow-md text-white w-[50%] mt-5"
            style={{
              fontSize: "var(--base)",
              fontWeight: "bolder",
              backgroundColor: "var(--red)",
              paddingInline: "8px",
              marginTop: "16px",
            }}
          >
            Explore Now
          </button>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-2 place-items-center h-[50%] tablet:w-[40%] mt-16">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="h-28 w-28 object-cover"
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div
        className="sec-2 flex flex-col tablet:flex-row gap-5 items-center mt-3
      "
      >
        <div className="w-full">
          <img src={all} sizes="80%" />
        </div>
        <div className=" w-full tablet:pl-5 ">
          <h2
            style={{
              fontSize: "var(--xl)",
              fontWeight: "bold",
            }}
          >
            What We Are About
          </h2>
          <ul
            style={{
              fontSize: "var(--sm)",
              fontWeight: "400",
              listStyleType: " square",
            }}
            className="pl-[5%]  mt-4 text-justify"
          >
            <li c>Practice basic knife skills.</li>
            <li>Master fundamental cooking techniques.</li>
            <li>Experiment with new recipes weekly.</li>
            <li>Learn seasoning and flavor balancing.</li>
            <li>Focus on plating and presentation.</li>
            <li>Use fresh, quality ingredients.</li>
          </ul>
          <button
            className="rounded-md shadow-md text-white w-[50%] mt-5"
            style={{
              fontSize: "var(--base)",
              fontWeight: "bolder",
              backgroundColor: "var(--red)",
              paddingInline: "8px",
              marginTop: "16px",
            }}
          >
            Learn Now
          </button>
        </div>
      </div>
      <div className="sec-3 mt-10">
        <h2
          style={{
            fontSize: "var(--xl)",
            fontWeight: "500",
            textAlign: "justify",
          }}
        >
          <span
            style={{
              fontSize: "VAR(--lg)",
              fontWeight: "bold",
              color: "var(--red)",
            }}
          >
            "
          </span>
          Food is not just fuel; it's an experience, a story, and a way to bring
          people together."
        </h2>
      </div>
      <div className="sec-4 my-10">
        <h2
          style={{ fontSize: "var(--xl)", fontWeight: "bold", padding: "5px" }}
        >
          Our Top Chefs
        </h2>
        <div className="grid tablet:grid-cols-2 grid-cols-1  ">
          {chief_data.map((chief, index) => (
            <div key={index} className="flex flex-row my-3 gap-2">
              <img
                src={chief.image}
                className="h-32 w-32 object-cover rounded-md shadow-md "
                alt={`${chief.name}'s image`}
              />
              <div className="gap-1">
                <h3 style={{ fontSize: "var(--md)", fontWeight: "500" }}>
                  {chief.name}
                </h3>
                <p
                  className="rec"
                  style={{ fontSize: "var(--sm)", fontWeight: "400" }}
                >
                  Recipes: {chief.recipe}
                </p>
                <p
                  className="cuisine"
                  style={{ fontSize: "var(--sm)", fontWeight: "400" }}
                >
                  Cuisine: {chief.cuisine}
                </p>
                <ul className="social flex flex-row gap-3">
                  <li>
                    <a
                      href={chief.fac}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href={chief.ins}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareInstagram />
                    </a>
                  </li>
                  <li>
                    <a href={chief.x} target="_blank" rel="noopener noreferrer">
                      <FaSquareXTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
