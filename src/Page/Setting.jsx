import React, { useState } from "react";
import "../index.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

// style={{ fontSize: "var(--)" }}
// style={{ color: "var(--)" }}
function Setting() {
  const [col, setcol] = useState("");
  const [the, setthe] = useState("");
  const colors = (col) => {
    document.documentElement.style.setProperty("--red", col);
    setcol(col);
  };
  const theme = (the) => {
    document.documentElement.style.setProperty("--white", the);

    setthe(the);
  };
  const large = () => {
    document.documentElement.style.cssText = `
    --xl: 40px;
  --lg: 38px;
  --md: 30px;
  --base: 24px;
  --sm: 22px;
    `;
  };
  const medium = () => {
    document.documentElement.style.cssText = `
    --xl: 38px;
  --lg: 36x;
  --md: 28px;
  --base: 22px;
  --sm: 20px;
    `;
  };
  const small = () => {
    document.documentElement.style.cssText = `
    --xl: 36px;
  --lg: 34px;
  --md: 26px;
  --base: 20px;
  --sm: 18px;
    `;
  };

  return (
    <>
      <div className="mt-[75px] px-[5%] tablet:px-[15%] ">
        <div className="sec1 my-5">
          <h1 style={{ fontSize: "var(--xl)", fontWeight: "bold" }}>
            Prefered Theme
          </h1>
          <div
            className=" border-l-8 border-red-400 w-full h-[70px] shadow-md bg-slate-300 flex flex-row items-center justify-start rounded-md"
            style={{ borderLeftWidth: "10px", borderColor: "var(--red)" }}
          >
            <button
              className="h-[55px] w-[55px] rounded-md ml-3 shadow-md  flex flex-row justify-center items-center"
              style={{ backgroundColor: "gray" }}
              onClick={() => theme("white")}
            >
              {the === "#ffffff" ? (
                <IoIosCheckmarkCircleOutline
                  style={{ color: "white", height: "40px", width: "40px" }}
                />
              ) : (
                ""
              )}
            </button>
            <button
              className="h-[55px] w-[55px] rounded-md ml-3 shadow-md flex flex-row justify-center items-center"
              style={{ backgroundColor: "#141010" }}
              onClick={() => theme("#141010")}
            >
              {the === "#141010" ? (
                <IoIosCheckmarkCircleOutline
                  style={{ color: "white", height: "40px", width: "40px" }}
                />
              ) : (
                ""
              )}
            </button>
          </div>
        </div>
        <div className="sec2  my-5">
          <h1 style={{ fontSize: "var(--xl)", fontWeight: "bold" }}>
            Primary Color
          </h1>
          <div
            className="border-l-8 border-red-400 w-full h-[70px] shadow-md bg-slate-300 flex flex-row items-center justify-start rounded-md"
            style={{ borderLeftWidth: "10px", borderColor: "var(--red)" }}
          >
            <button
              className="h-[55px] w-[55px] rounded-md ml-3 shadow-md  flex flex-row justify-center items-center"
              style={{ backgroundColor: "#ef4444" }}
              onClick={() => colors("#ef4444")}
            >
              {col === "#ef4444" ? (
                <IoIosCheckmarkCircleOutline
                  style={{ color: "white", height: "40px", width: "40px" }}
                />
              ) : (
                " "
              )}
            </button>
            <button
              className="h-[55px] w-[55px] rounded-md ml-3 shadow-md flex flex-row justify-center items-center"
              style={{ backgroundColor: "#a855f7" }}
              onClick={() => colors("#a855f7")}
            >
              {col === "#a855f7" ? (
                <IoIosCheckmarkCircleOutline
                  style={{ color: "white", height: "40px", width: "40px" }}
                />
              ) : (
                " "
              )}
            </button>
            <button
              className="h-[55px] w-[55px] rounded-md ml-3 shadow-md flex flex-row justify-center items-center"
              style={{ backgroundColor: "#22c55e" }}
              onClick={() => colors("#22c55e")}
            >
              {col === "#22c55e" ? (
                <IoIosCheckmarkCircleOutline
                  style={{ color: "white", height: "40px", width: "40px" }}
                />
              ) : (
                " "
              )}
            </button>
            <button
              className="h-[55px] w-[55px] rounded-md ml-3 shadow-md flex flex-row justify-center items-center"
              style={{ backgroundColor: "#3b82f6" }}
              onClick={() => colors("#3b82f6")}
            >
              {col === "#3b82f6" ? (
                <IoIosCheckmarkCircleOutline
                  style={{ color: "white", height: "40px", width: "40px" }}
                />
              ) : (
                " "
              )}
            </button>
            <button
              className="h-[55px] w-[55px] rounded-md ml-3 shadow-md flex flex-row justify-center items-center"
              style={{ backgroundColor: "#f59e0b" }}
              onClick={() => colors("#f59e0b")}
            >
              {col === "#f59e0b" ? (
                <IoIosCheckmarkCircleOutline
                  style={{ color: "white", height: "40px", width: "40px" }}
                />
              ) : (
                " "
              )}
            </button>
          </div>
        </div>
        <div className="sec3 my-5">
          <h1 style={{ fontSize: "var(--xl)", fontWeight: "bold" }}>
            Text Size
          </h1>
          <div
            className="border-l-8 border-red-400 w-full h-[70px] shadow-md bg-slate-300 flex flex-row items-center justify-start rounded-md"
            style={{ borderLeftWidth: "10px", borderColor: "var(--red)" }}
          >
            <button
              className="h-[45px] w-[30%] rounded-md ml-3 shadow-md"
              style={{
                backgroundColor: "var(--red)",
                fontSize: "var(--md)",
                fontWeight: "500",
              }}
              onClick={() => small()}
            >
              Small
            </button>
            <button
              className="h-[45px] w-[30%] rounded-md ml-3 shadow-md"
              style={{
                backgroundColor: "var(--red)",
                fontSize: "var(--md)",
                fontWeight: "500",
              }}
              onClick={() => medium()}
            >
              Medium
            </button>
            <button
              className="h-[45px] w-[30%] rounded-md ml-3 shadow-md"
              style={{
                backgroundColor: "var(--red)",
                fontSize: "var(--md)",
                fontWeight: "500",
              }}
              onClick={() => large()}
            >
              Large
            </button>
          </div>
        </div>
        <div className="sec4 my-5">
          <h1 style={{ fontSize: "var(--xl)", fontWeight: "bold" }}>
            Animation Speed
          </h1>
          <div
            className="border-l-8 border-red-400 w-full h-[70px] shadow-md bg-slate-300 flex flex-row items-center justify-start rounded-md"
            style={{ borderLeftWidth: "10px", borderColor: "var(--red)" }}
          >
            <button
              className="h-[45px] w-[30%] rounded-md ml-3 shadow-md"
              style={{
                backgroundColor: "var(--red)",
                fontSize: "var(--md)",
                fontWeight: "500",
              }}
            >
              Slow
            </button>
            <button
              className="h-[45px] w-[30%] rounded-md ml-3 shadow-md"
              style={{
                backgroundColor: "var(--red)",
                fontSize: "var(--md)",
                fontWeight: "500",
              }}
            >
              Medium
            </button>
            <button
              className="h-[45px] w-[30%] rounded-md ml-3 shadow-md"
              style={{
                backgroundColor: "var(--red)",
                fontSize: "var(--md)",
                fontWeight: "500",
              }}
            >
              Fast
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setting;
