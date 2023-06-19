import { NavLink } from "react-router-dom";
import "./index.css";
const Sidebar = () => {
  return (
    <aside className="fixed px-[1rem] h-[100vh] border-solid border-r-2 border-[#d7d6d6] ">
      <figure className="w-[250px] h-[70px]">
        <img
          className="w-full h-full"
          src="https://dienthoaigiakho.vn/_next/image?url=%2Fimages%2Fcommon%2Flogo.svg&w=384&q=75"
          alt="logo"
        />
      </figure>
      <nav id="sidebar" className="flex flex-col mt-[10%] gap-[1.5rem]">
        <NavLink
          className="flex gap-[1.5rem] pl-[10%] py-[1rem] w-full h-full text-[18px] rounded duration-[0.5s]"
          to="/"
        >
          <svg
            className="w-[1.5rem] h-[1.5rem]"
            width="24"
            height="24"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4V24H44Z"
              fill="none"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M43.0844 18H30V4.91553C36.2202 6.86917 41.1308 11.7798 43.0844 18Z"
              fill="none"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Chart
        </NavLink>

        <NavLink
          className="flex gap-[1.5rem] pl-[10%] py-[1.5rem] w-full h-fu text-[18px] rounded duration-[0.5s]"
          to="/mange-categories"
        >
          <svg
            className="w-[1.5rem] h-[1.5rem]"
            width="24"
            height="24"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="6"
              y="28"
              width="36"
              height="14"
              rx="4"
              stroke="#000000"
              strokeWidth="4"
            />
            <path
              d="M20 7H10C7.79086 7 6 8.79086 6 11V17C6 19.2091 7.79086 21 10 21H20"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle
              cx="34"
              cy="14"
              r="8"
              fill="none"
              stroke="#000000"
              strokeWidth="4"
            />
            <circle cx="34" cy="14" r="3" fill="#000000" />
          </svg>
          Mange Categories
        </NavLink>

        <NavLink
          className="flex gap-[1.5rem] pl-[10%] py-[1.5rem] w-full h-fu text-[18px] rounded duration-[0.5s]"
          to="/mange-products"
        >
          <svg
            className="w-[1.5rem] h-[1.5rem]"
            width="24"
            height="24"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44 14L24 4L4 14V34L24 44L44 34V14Z"
              stroke="#000000"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M4 14L24 24"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24 44V24"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M44 14L24 24"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M34 9L14 19"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Mange Products
        </NavLink>

        <NavLink
          className="flex gap-[1.5rem] pl-[10%] py-[1.5rem] w-full h-fu text-[18px] rounded duration-[0.5s]"
          to="/mange-users"
        >
          <svg
            className="w-[1.5rem] h-[1.5rem]"
            width="24"
            height="24"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24"
              cy="12"
              r="8"
              fill="none"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Mange Users
        </NavLink>

        <NavLink
          className="flex gap-[1.5rem] pl-[10%] py-[1.5rem] w-full h-fu text-[18px] rounded duration-[0.5s]"
          to="/settings"
        >
          <svg
            className="w-[1.5rem] h-[1.5rem]"
            width="24"
            height="24"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z"
              fill="none"
              stroke="#000000"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z"
              fill="none"
              stroke="#000000"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </svg>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
