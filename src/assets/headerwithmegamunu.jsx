import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MegaMenu } from "primereact/megamenu";
import useCounterStore from "../Store/Counterstore";
import logo from "../assets/logo.png";
import "../Components/index.css";

const Header = () => {
  const count = useCounterStore((state) => state.count); // Subscribe to count

  // Custom item renderer function to display each menu item
  const itemRenderer = (item, options) => {
    if (item.root) {
      return (
        <Link
          to={item.url} // Use Link instead of <a> to handle routing in React
          className={` ${item.classNames} cursor-pointer  font-normal uppercase `}
          onClick={(e) => options.onClick(e)}
        >
          <span className="ml-2  hover:underline px-2 py-3 Item">
            {item.label}
          </span>
        </Link>
      );
    } else {
      return (
        <div
          className="flex flex-column align-items-start gap-3"
          onClick={options.onClick}
        >
          <img alt="megamenu-demo" src={item.image} className="w-full" />
          <span>{item.subtext}</span>
        </div>
      );
    }
  };

  const menuItems = [
    {
      label: "MEN",
      root: true,
      url: "/Men", // Define the route for the "MEN" link
      template: itemRenderer,
      classNames: "font-bold",
      items: [
        {
          items: [
            { label: "Clothing", icon: "pi pi-shirt" },
            { label: "Shoes", icon: "pi pi-shoe" },
            { label: "Accessories", icon: "pi pi-wallet" },
          ],
        },
      ],
    },
    {
      label: "WOMEN",
      root: true,
      url: "/women", // Define the route for the "WOMEN" link
      template: itemRenderer,
      classNames: "font-bold",
      items: [
        {
          items: [
            { label: "Clothing", icon: "pi pi-shirt" },
            { label: "Shoes", icon: "pi pi-shoe" },
            { label: "Accessories", icon: "pi pi-wallet" },
          ],
        },
      ],
    },
    {
      label: "KIDS",
      root: true,
      url: "/Kid", // Define the route for the "KIDS" link
      template: itemRenderer,
      classNames: "font-bold",
      items: [
        {
          items: [
            { label: "Clothing", icon: "pi pi-shirt" },
            { label: "Shoes", icon: "pi pi-shoe" },
          ],
        },
      ],
    },
    {
      label: "Sports",
      root: true,
      url: "/Kid", // Define the route for the "KIDS" link
      template: itemRenderer,
      items: [
        {
          items: [
            { label: "Clothing", icon: "pi pi-shirt" },
            { label: "Shoes", icon: "pi pi-shoe" },
          ],
        },
      ],
    },
    {
      label: "Brands",
      root: true,
      url: "/Kid", // Define the route for the "KIDS" link
      template: itemRenderer,
      items: [
        {
          items: [
            { label: "Clothing", icon: "pi pi-shirt" },
            { label: "Shoes", icon: "pi pi-shoe" },
          ],
        },
      ],
    },
    {
      label: "New Arrivals",
      root: true,
      url: "/Kid", // Define the route for the "KIDS" link
      template: itemRenderer,
      items: [
        {
          items: [
            { label: "Clothing", icon: "pi pi-shirt" },
            { label: "Shoes", icon: "pi pi-shoe" },
          ],
        },
      ],
    },
    {
      label: "Outlet",
      root: true,
      url: "", // Define the route for the "KIDS" link
      template: itemRenderer,
      classNames: "text-red-500",
      items: [
        {
          items: [
            { label: "Clothing", icon: "pi pi-shirt" },
            { label: "Shoes", icon: "pi pi-shoe" },
          ],
        },
      ],
    },
    // Other menu items
  ];

  return (
    <header className="w-full h-[121px] bg-black">
      <div className="w-full h-10 bg-black flex items-center justify-center tracking-[1.2px]">
        <button className="h-full text-[11px] font-[AdihausDIN] uppercase font-bold text-white px-10 hover:opacity-50 hover:bg-gray-800">
          Easy return{" "}
        </button>
      </div>

      <div className="w-full h-[81px] px-10 bg-white">
        <div className="flex w-full items-center justify-end h-1/3 py-2">
          <ul className="flex space-x-4">
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
          <Link
            to="/"
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
          </Link>

          {/* Mega Menu Section */}
          <div className="flex justify-center space-x-8 text-sm font-semibold col-span-2">
            <MegaMenu
              model={menuItems}
              itemTemplate={itemRenderer}
              trigger="hover"
            />
          </div>

          {/* Cart and Icons Section */}
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
                d="M2.25 12l9.75 9.75L21.75 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
