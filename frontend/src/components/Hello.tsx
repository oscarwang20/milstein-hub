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
      <Image
        src="https://images.squarespace-cdn.com/content/v1/553d091be4b0c687eb3f1b4c/1430066929023-9TLC6IF5QAUAVFG48VA6/image-asset.jpeg?format=750w"
        alt="austin"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Hello;
