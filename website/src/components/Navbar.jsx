import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaRegFile } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
const Navbar = () => {
  return (
    <>
      <nav className="flex w-full h-20 bg-black  items-center justify-between pl-5 pr-7">
        <div className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl font-bold ">
          &#123; Deepthink &#125;
        </div>
        <div className="flex  gap-5  text-indigo-400">
          <button className="focus:border-2 rounded-2xl cursor-pointer px-2 py-1 flex items-center gap-2  transition  duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
            <AiOutlineHome />
            Home
          </button>
          <button className="focus:border-2 rounded-2xl cursor-pointer px-2 py-1 flex items-center gap-2  transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
            <MdOutlineHomeRepairService />
            Services
          </button>
          <button className="focus:border-2 rounded-2xl cursor-pointer px-2 py-1 flex items-center gap-2 transition  duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
            <FaRegFile />
            Portfolio
          </button>
          <button className="focus:border-2 rounded-2xl cursor-pointer px-2 py-1 flex items-center gap-2  transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
            <FaRegUser />
            About
          </button>
          <button className="focus:border-2 rounded-2xl cursor-pointer px-2 py-1 flex items-center gap-2 transition  duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
            <LuMail />
            Contact
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
