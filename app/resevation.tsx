"use client";
import { useState } from "react";
import ResForm from "./resform";

const Reservaiton = (props: { trigger: boolean; setTrigger: any }) => {
  return props.trigger ? (
    <div className="w-[100%] h-[100vh] fixed top-0 left-0 bg-[rgba(0,0,0,0.43)] z-40 flex justify-center items-center">
      <div className="relative p-4 flex flex-col">
        <ResForm trigger={props.trigger} setTrigger={props.setTrigger} />
        <button
          className="absolute top-7 text-black right-7"
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          X
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};
export default Reservaiton;
