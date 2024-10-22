import React from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../assets/logo.png";

import useCounterStore from "../Store/Counterstore";

const Header = () => {
  const count = useCounterStore((state) => state.count); // Subscribe to count
  return (
    <header className="w-full h-[121px] bg-black">
      <div className="w-full h-10 bg-black flex items-center justify-center tracking-[1.2px]">
        <button className="h-full text-[11px] font-[AdihausDIN] uppercase font-bold text-white px-10 hover:opacity-50 hover:bg-gray-800 ">
          Easy return{" "}
          <span>
            {" "}
            <ExpandMoreIcon />{" "}
          </span>
        </button>
      </div>
      <div className="w-full h-[81px] px-10 bg-white">
        <div className="flex w-full items-center justify-end h-1/3 py-2">
          <ul className="flex  space-x-4">
            <a href="#" className="text-xs hover:underline">
              help
            </a>
            <a href="#" className="text-xs hover:underline">
              order tracker
            </a>
            <a href="#" className="text-xs hover:underline">
              become a member
            </a>
            <img
              src="https://flagcdn.com/w40/vn.png"
              alt="Vietnam flag"
              width={30}
            />
          </ul>
        </div>

        <div className="grid grid-cols-4 items-center w-full px-4">
          {/* Logo Section */}
          <a
            href="/en"
            data-auto-id="logo"
            className="justify-self-start col-span-1"
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "auto",
                height: "auto",
                display: "block",
                margin: 0,
                padding: 0,
              }}
            />
          </a>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 text-sm font-semibold col-span-2">
            <Link to="/Men" className="px-3 hover:underline">
              MEN
            </Link>
            <Link to="/Women" className="hover:underline">
              WOMEN
            </Link>
            <Link to="/Kid" className="hover:underline">
              KIDS
            </Link>
            <Link to="/" className="hover:underline">
              SPORTS
            </Link>
            <Link to="/" className="hover:underline">
              BRANDS
            </Link>
            <Link to="/" className="hover:underline">
              NEW ARRIVALS
            </Link>
            <Link to="/" className="text-red-500 hover:underline">
              OUTLET
            </Link>
          </div>

          {/* Search and Icons */}
          <div className="flex items-center justify-end space-x-4 col-span-1">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 px-3 py-2 rounded-md text-sm outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.085-5.365a6.375 6.375 0 11-12.75 0 6.375 6.375 0 0112.75 0z"
              />
            </svg>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 18a7.5 7.5 0 00-15 0"
                />
              </svg>
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-yellow-400 text-xs flex items-center justify-center">
                {count}
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25V6.75A2.25 2.25 0 0018.75 4.5H5.25A2.25 2.25 0 003 6.75v4.5m18 0v6.75a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6.75m18 0H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
