"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Navbar from "./Navbar";

export function Base() {
  return (
    <>
      <Navbar />
      <div className="h-[30rem] w-full bg-black flex flex-col items-center pt-10  overflow-hidden ">
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-20">
          Welcome to Deepthink
        </h1>
        <div className="w-[60rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </>
  );
}
