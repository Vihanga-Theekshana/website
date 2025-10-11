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

      <div className="h-[30rem] w-full bg-black flex flex-col items-center pt-30">
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
        <p className="text-cyan-500 font-semibold text-center text-lg w-1/2 flex-wrap">
          DeepThink is a visionary AI-driven web development agency dedicated to
          creating intelligent digital solutions. We design sleek,
          high-performance websites, build powerful software systems, and
          integrate advanced AI technologies to accelerate business growth. From
          modern web design to smart automation, DeepThink empowers your brand
          to thrive in the digital era with innovation and precision.
        </p>
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
