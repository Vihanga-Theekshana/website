"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Navbar from "./Navbar";
import LiquidEther from "./Background";
export function Base() {
  return (
    <>
      <div className="z-50 fixed ">
        <Navbar />
      </div>

      <div className="h-[60rem] w-full bg-black flex flex-col items-center pt-30">
        <h1 className=" font-bold text-center relative z-20">
          <span className="md:text-7xl text-3xl lg:text-6xl bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent ">
            Welcome to ZyntexaIT
          </span>
          <br />
          <span className="text-white md:text-5xl text-xl lg:text-4xl">
            Driving Digital Evolution
          </span>
        </h1>
        <p className=" pt-3 text-gray-400 font-semibold text-center text-lg w-1/2 flex-wrap">
          ZyntexaIT is an AI-driven web development agency that crafts sleek
          websites, powerful software, and smart automation solutions to fuel
          business growth with innovation and precision.
        </p>

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

        <div className="mt-6 flex gap-4">
          <button className="text-black font-semibold w-40 h-10 bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-2xl cursor-pointer">
            Get our Service &#45;&#62;
          </button>
          <button className="text-white w-40 h-10 rounded-2xl border-2 border-cyan-400 cursor-pointer">
            See our Project
          </button>
        </div>
        <div className="flex gap-6 w-3/4 mt-10">
          <div className="w-1/3 h-80 rounded-2xl bg-gray-950"></div>
          <div className="w-1/3 h-80 rounded-2xl bg-gray-950 border-white"></div>
          <div className="w-1/3 h-80 rounded-2xl bg-gray-950"></div>
        </div>
      </div>

      <div style={{ width: "100%", height: 600, position: "relative" }}>
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          className="bg-black"
        />
      </div>
    </>
  );
}
