import { LuFacebook, LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-white">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96 flex flex-col ">
          <img
            src="/images/mainlogo.jpg"
            className="w-[100px]  lg:w-[200px] rounded-xl"
          ></img>

          <div>
            <div className="w-full md:w-1/3  pl-20 p-3 flex flex-col items-center">
              <ul className="flex gap-4 pt-3">
                <li>
                  <LuFacebook className="text-2xl cursor-pointer hover:text-cyan-400 transition duration-500" />
                </li>
                <li>
                  <LuTwitter className="text-2xl cursor-pointer  hover:text-cyan-400 transition duration-500" />
                </li>
                <li>
                  <FaInstagram className="text-2xl cursor-pointer  hover:text-cyan-400 transition duration-500" />
                </li>
                <li>
                  <FaLinkedinIn className="text-2xl cursor-pointer  hover:text-cyan-400 transition duration-500" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-cyan-400">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-cyan-400">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>078-5999845</p>
              <p>info@zyntexait.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2025 © <a href="https://prebuiltui.com">ZyntexaIT</a>. All
        Right Reserved.
      </p>
    </footer>
  );
}
