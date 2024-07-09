import React from "react";

function Footer(props) {
  return (
    <div className="flex flex-wrap items-center justify-between w-full p-8 border-0 border-t-2 text-lg font-medium border-dark">
      <div className="">
        {new Date().getFullYear()} &copy; All Rights Reserved.
      </div>
      <div className="">Build By Anamol Soman</div>
      <div className="">Call Me</div>
    </div>
  );
}

export default Footer;
