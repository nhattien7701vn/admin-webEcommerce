import React from "react";

const MangeCategories = ({ categoryData }) => {
  return (
    <section className="flex justify-between w-full h-screen bg-[#909090]">
      <ul className="flex flex-col gap-[1rem] w-full h-full">
        <li className="flex w-full h-[5rem]">
          <a className="w-[85%] h-full  bg-black text-white" href="">
            <span className="flex items-center w-full h-full ">
              {/* {categoryData[].stt} */}
              <p className="w-[5%]  text-center">1</p>
              {/* {categoryData.id} */}
              <p className="w-[5%]  text-center">dt01</p>
              {/* {categoryData.name} */}
              <p className="w-[25%] text-center">dien thoai</p>
              {/* {categoryData.uri} */}
              <p className="w-[30%] text-center">dien-thoai</p>
              {/* {categoryData.description} */}
              <p className="w-[20%] text-center">dien thoai</p>
              {/* {categoryData.modified_at} */}
              <p className="w-[15%] text-center">1686727203</p>
            </span>
          </a>
          <span className="flex grow justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 33V42C40 43.1046 39.1046 44 38 44H31.5"
                stroke="#333"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M40 16V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H16"
                stroke="#333"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 16H30"
                stroke="#333"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M23 44L40 23"
                stroke="#333"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M16 24H24"
                stroke="#333"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 12L16.2 5H31.8L33 12"
                stroke="#333"
                stroke-width="4"
                stroke-linejoin="round"
              />
              <path
                d="M6 12H42"
                stroke="#333"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37 12L35 43H13L11 12H37Z"
                fill="none"
                stroke="#333"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 35H29"
                stroke="#333"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163"
                stroke="#333"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z"
                fill="none"
                stroke="#333"
                stroke-width="4"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </li>
        <li className="flex w-full h-[5rem]">
          <a className="w-[85%] h-full  bg-black text-white" href="">
            <span className="flex items-center w-full h-full ">
              {/* {categoryData[].stt} */}
              <p className="w-[5%]  text-center">1</p>
              {/* {categoryData.id} */}
              <p className="w-[5%]  text-center">dt01</p>
              {/* {categoryData.name} */}
              <p className="w-[25%] text-center">dien thoai</p>
              {/* {categoryData.uri} */}
              <p className="w-[30%] text-center">dien-thoai</p>
              {/* {categoryData.description} */}
              <p className="w-[20%] text-center">dien thoai</p>
              {/* {categoryData.modified_at} */}
              <p className="w-[15%] text-center">1686727203</p>
            </span>
          </a>
          <span></span>
        </li>
      </ul>
    </section>
  );
};

export default MangeCategories;
