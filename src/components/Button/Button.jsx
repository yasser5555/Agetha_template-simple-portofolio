import React from "react";
import { NavLink } from "react-router-dom";
export default function Button({ text}) {
  return (
    <NavLink className=" text-decoration-none text-capitalize bg-danger rounded border border-0 text-light text-center  p-2">
      {text}
    </NavLink>
  );
}