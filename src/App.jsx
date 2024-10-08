import { AiFillFacebook } from "react-icons/ai";
import {
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaSnapchat,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

function App() {
  return (
    <div className="">
      <nav className="h-10 text-white w-full flex justify-between bg-black px-4">
        <ul className="flex items-center h-full">
          <li className="hover:bg-white hover:bg-opacity-70 hover:text-black h-full w-10 flex items-center justify-center cursor-pointer">
            <AiFillFacebook />
          </li>
          <li className="hover:bg-white hover:bg-opacity-70 hover:text-black h-full w-10 flex items-center justify-center cursor-pointer">
            <FaInstagram />
          </li>
          <li className="hover:bg-white hover:bg-opacity-70 hover:text-black h-full w-10 flex items-center justify-center cursor-pointer">
            <FaSnapchat />
          </li>
          <li className="hover:bg-white hover:bg-opacity-70 hover:text-black h-full w-10 flex items-center justify-center cursor-pointer">
            <FaTwitch />
          </li>
          <li className="hover:bg-white hover:bg-opacity-70 hover:text-black h-full w-10 flex items-center justify-center cursor-pointer">
            <FaTwitter />
          </li>
          <li className="hover:bg-white hover:bg-opacity-70 hover:text-black h-full w-10 flex items-center justify-center cursor-pointer">
            <FaLinkedin />
          </li>
        </ul>

        <div className="h-full flex items-center hover:bg-white hover:text-black  w-10 justify-center cursor-pointer">
          <FaSearch />
        </div>
      </nav>

      <div className="h-[30vh] flex flex-col gap-6 items-center justify-center text-center">
        <h1 className="text-5xl font-semibold">Zoba&apos;s BLOGLIFE</h1>

        <p className="font-semibold">
          Welcome to the blog of{" "}
          <span className="bg-black text-white px-2 py-1">
            Zoba&apos;s world
          </span>
        </p>
      </div>

      <div className="relative w-full">
        <img src="/zoba.jpg" alt="" className=" object-contain w-full" />

        <div
          className="absolute top-[50%] left-0 px-4 text-white flex flex-col gap-4"
          style={{
            transform: "translate(0, -50%)",
          }}
        >
          <h2 className="text-3xl font-medium">Zoba&apos;s</h2>
          <h2 className="text-5xl md:text-7xl font-semibold">FASHION BLOG</h2>
          <button className="bg-white bg-opacity-60  hover:bg-opacity-80 text-black text-lg font-semibold w-fit px-6 py-2">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
