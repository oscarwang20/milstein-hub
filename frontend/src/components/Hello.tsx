"use client";
import React from "react";
import getHello from "../api/api";

const Hello = () => {
  const hello = getHello();
  return (
    <div>
      This is an api generated message:{" "}
      <span className="text-blue-500">{hello}</span>
    </div>
  );
};

export default Hello;
