"use client";
import React from "react";
import Image from "next/image";
import { getHello } from "../api/api";

const Hello = () => {
  const hello = getHello();
  return (
    <div>
      This is an api generated message:{" "}
      <span className="text-blue-500">{hello}</span>
      <Image src="/austin.jpg" alt="austin" width={500} height={500} />
    </div>
  );
};

export default Hello;
