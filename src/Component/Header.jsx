import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
function Header() {
  const [menuopn, setMenuopn] = useState(false);
  const toggle = () => {
    setMenuopn(!menuopn);
  };
  return (
    <div
      className="fixed top-0 left-0 right-0 h-[70px] px-[5%] tablet:px-[15%] flex flex-row justify-between items-center tablet:justify-around  shadow-md"
      style={{ backgroundColor: "var(--white)" }}
    >
      <h1 className="logoname ">
        Nep
        <span className="text-black " style={{ textShadow: "2px 2px 0 white" }}>
          Food
        </span>
        ies
      </h1>
      <ul className=" hidden tablet:flex tablet:flex-row ">
        {" "}
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                  color: " var(--red)",
                  fontWeight: 500,
                  textDecoration: "none",
                  fontSize: "var(--sm)",
                }
              : {
                  color: " #404040",
                  fontWeight: 500,
                  fontSize: "var(--sm)",
                  textDecoration: "none",
                }
          }
          className="p-2"
        >
          Home
        </NavLink>
        <NavLink
          to="/recipe"
          style={({ isActive }) =>
            isActive
              ? {
                  color: " var(--red)",
                  fontWeight: 500,
                  textDecoration: "none",
                  fontSize: "var(--sm)",
                }
              : {
                  color: " #404040",
                  fontWeight: 500,
                  fontSize: "var(--sm)",
                  textDecoration: "none",
                }
          }
          className="p-2"
        >
          Recipe
        </NavLink>
        <NavLink
          to="/setting"
          style={({ isActive }) =>
            isActive
              ? {
                  color: " var(--red)",
                  fontWeight: 500,
                  textDecoration: "none",
                  fontSize: "var(--sm)",
                }
              : {
                  color: " #404040",
                  fontWeight: 500,
                  fontSize: "var(--sm)",
                  textDecoration: "none",
                }
          }
          className="p-2"
        >
          Setting
        </NavLink>
      </ul>
      <div className=" tablet:hidden flex flex-col justify-between items-center  ">
        <button onClick={toggle}>
          {menuopn ? (
            <RxCross1
              className=" font-semibold"
              style={{ color: "var(--red)" }}
            />
          ) : (
            <FaBars
              className=" font-semibold"
              style={{ color: "var(--red)" }}
            />
          )}
        </button>
        {menuopn && (
          <ul className=" tablet:hidden flex flex-col  absolute top-20 right-1 bg-slate-100 border-2 rounded-[10px] shadow-sm">
            {" "}
            <NavLink
              to="/"
              className="w-20 text-center hover:bg-slate-200 rounded-t-[9px]"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: " var(--red)",
                      fontWeight: 500,
                      textDecoration: "none",
                      fontSize: "var(--sm)",
                    }
                  : {
                      color: " #404040",
                      fontWeight: 500,
                      fontSize: "var(--sm)",
                      textDecoration: "none",
                    }
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/recipe"
              className="w-20 text-center hover:bg-slate-200"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: " var(--red)",
                      fontWeight: 500,
                      textDecoration: "none",
                      fontSize: "var(--sm)",
                    }
                  : {
                      color: " #404040",
                      fontWeight: 500,
                      fontSize: "var(--sm)",
                      textDecoration: "none",
                    }
              }
            >
              Recipe
            </NavLink>{" "}
            <NavLink
              to="/setting"
              className="w-20 text-center hover:bg-slate-200 rounded-b-[9px]"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: " var(--red)",
                      fontWeight: 500,
                      fontSize: "var(--sm)",
                      textDecoration: "none",
                    }
                  : {
                      color: " #404040",
                      fontWeight: 500,
                      fontSize: "var(--sm)",
                      textDecoration: "none",
                    }
              }
            >
              Setting
            </NavLink>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
