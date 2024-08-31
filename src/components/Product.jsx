import React from "react";
import Button from "./Button";

function Product({ item }) {
  return (
    <div className="w-full h-[50vh] flex justify-between px-10  items-center">
      <h1 className="text-[10vh] font-semibold text-white ">{item.title}</h1>
      <div className="flex flex-col gap-10 w-1/3">
        <h5 className="font-medium text-white">{item.description}</h5>
        <div className="flex gap-5">
          {item.live && <Button val="Live Demo" />}
          {item.case && <Button val="Case Study" />}
        </div>
      </div>
    </div>
  );
}

export default Product;
