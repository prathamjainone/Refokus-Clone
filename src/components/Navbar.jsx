import React from "react";
import Button from "./Button";


const Navbar = () => {
  return (
    <div className="max-w-screen-xl m-auto  flex justify-between items-center border-b-2 p-5 border-zinc-600">
      <div className="nleft flex gap-20">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="refokus_logo"
        />
        <div className="links text-white flex gap-10 items-center">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            <a className="flex items-center" href="#">
              {elem.length == 0 ? (
                <span className="h-8 w-[2px] bg-zinc-600"></span>
              ) : null}
              {index == 1 && (
                <span
                  style={{ boxShadow: "0 0 0.25rem #00FF19" }}
                  className="mr-1 inline-block w-1 h-1 rounded-full bg-[#00FF19] "
                ></span>
              )}
              {elem}
            </a>
          ))}
        </div>
      </div>
      <div>
        <Button/>
      </div>
    </div>
  );
};

export default Navbar;
