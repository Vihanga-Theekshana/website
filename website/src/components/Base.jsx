"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Navbar from "./Navbar";
import LiquidEther from "./Background";
import { MdWeb } from "react-icons/md";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
export function Base() {
  return (
    <>
      <div className="z-50 fixed w-full ">
        <Navbar />
      </div>

      <div className="min-h-screen w-full bg-black flex flex-col items-center pt-30 px-4">
        <h1 className="font-bold text-center relative z-20">
          <span className="text-3xl md:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Welcome to ZyntexaIT
          </span>
          <br />
          <span className="text-white text-xl md:text-4xl lg:text-5xl">
            Driving Digital Evolution
          </span>
        </h1>
        <p className="pt-3 text-gray-400 font-semibold text-center text-sm md:text-lg w-full md:w-3/4 lg:w-1/2">
          ZyntexaIT is an AI-driven web development agency that crafts sleek
          websites, powerful software, and smart automation solutions to fuel
          business growth with innovation and precision.
        </p>

        <div className="w-full md:w-[60rem] h-40 relative mt-5">
          <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={800}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(250px_150px_at_top,transparent_20%,white)]"></div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button className="text-black font-semibold w-40 h-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-2xl cursor-pointer">
            Get our Service &#45;&#62;
          </button>
          <button className="text-white w-40 h-10 rounded-2xl border-2 border-cyan-400 cursor-pointer">
            See our Project
          </button>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 w-full md:w-5/6 mt-20">
          <div className="w-full md:w-[30%] rounded-2xl bg-gray-950 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-103 hover:bg-green-950 p-4">
            <div className="flex flex-col items-center">
              <MdWeb className="text-green-300 text-5xl" />
              <h1 className="text-white font-bold text-lg text-center mt-2">
                Web Application Development
              </h1>
            </div>
            <p className="text-gray-400 text-sm pt-2 text-center md:text-left">
              Building robust, scalable, and high-performance web applications
              from concept to deployment. We leverage the power of the MERN
              stack to deliver modern digital solutions for businesses and
              educational projects.
            </p>
            <ul className="text-white list-disc marker:text-cyan-400 pl-5 pt-3">
              <li>Express.js / Node.js (Server-Side Power)</li>
              <li>React.js (Modern UI/UX)</li>
              <li>FullStack Expertise</li>
            </ul>
          </div>
          <div className="w-full md:w-[30%] rounded-2xl shadow-cyan-300 bg-gray-950 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-103 hover:bg-orange-950 p-4">
            <div className="flex flex-col items-center">
              <BiSolidBadgeCheck className="text-orange-300 text-5xl" />
              <h1 className="text-white font-bold text-lg text-center mt-2">
                Scalable & High-Performance Solutions
              </h1>
            </div>
            <p className="text-gray-400 text-sm pt-2 text-center md:text-left">
              We ensure your web application is fast, secure, and ready to
              handle growth. Our MERN-based architecture guarantees scalability,
              fast load times, and superior user experience, regardless of
              traffic.
            </p>
            <ul className="text-white list-disc marker:text-cyan-400 pl-5 pt-3">
              <li>Real-time Data Flow (WebSockets)</li>
              <li>API Integration & Custom Endpoints</li>
              <li>Optimized Security Practices</li>
            </ul>
          </div>
          <div className="w-full md:w-[30%] rounded-2xl bg-gray-950 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-103 hover:bg-pink-950 p-4">
            <div className="flex flex-col items-center">
              <MdOutlineWbSunny className="text-pink-300 text-5xl" />
              <h1 className="text-white font-bold text-lg text-center mt-2">
                Modern UI/UX & Continuous Support
              </h1>
            </div>
            <p className="text-gray-400 text-sm pt-2 text-center md:text-left">
              We design intuitive, aesthetically pleasing, and responsive user
              interfaces using React. After launch, we provide ongoing support,
              bug fixing, and feature updates to keep your application running
              smoothly.
            </p>
            <ul className="text-white list-disc marker:text-cyan-400 pl-5 pt-3">
              <li>Clean & Modern User Interface</li>
              <li>Post-Launch Maintenance & Support</li>
              <li>Version Control with Git</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <RiTeamFill className="text-white  text-3xl sm:text-4xl lg:text-5xl" />
          <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">
            About Our Team
          </h1>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 w-full md:w-5/6 mt-20 mb-20">
          <div className="w-full md:w-[30%] shadow-[0px_0px_20px_1px] shadow-cyan-600  rounded-2xl bg-gray-950 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-103  p-4">
            <div className="flex flex-col items-center">
              <img
                className="w-4/5 h-4/5 border-4 border-blue-950 rounded-full"
                src="/images/dhanushka.jpg"
              ></img>
              <div className="mt-4 flex flex-col items-center">
                <h1 className="font-semibold text-white text-lg">
                  Dhanushka Sandaruwan
                </h1>
                <h1 className="font-semibold text-cyan-400 text-sm">
                  Full stack Developer
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[30%] shadow-[0px_0px_20px_1px] shadow-cyan-600 rounded-2xl bg-gray-950 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-103  p-4">
            <div className="flex flex-col items-center">
              <img
                className="w-4/5 h-4/5 border-4 border-blue-950 rounded-full"
                src="/images/vihanga.jpg"
              ></img>
              <div className="mt-4 flex flex-col items-center">
                <h1 className="font-semibold text-white text-lg">
                  Vihanga Theekshana
                </h1>
                <h1 className="font-semibold text-cyan-400 text-sm">
                  Front-end Developer
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[30%] shadow-[0px_0px_20px_1px] shadow-cyan-600 rounded-2xl bg-gray-950 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-103 p-4">
            <div className="flex flex-col items-center">
              <img
                className="w-4/5 h-4/5 border-4 border-blue-950 rounded-full"
                src="/images/shashin.jpg"
              ></img>
              <div className="mt-4 flex flex-col items-center">
                <h1 className="font-semibold text-white text-lg">
                  Shashin Deemantha
                </h1>
                <h1 className="font-semibold text-cyan-400 text-sm">
                  Marketing & Designer
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[600px] relative">
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
