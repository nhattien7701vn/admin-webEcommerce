import React from "react";
import { render } from "react-dom";

interface Category {
  id: string;
  name: string;
  uri: string;
  description: string;
  modified_at: number;
}
const ManageCategories: React.FC<{
  categoryData: Category[];
  handleDeleteCategory: (id: string) => void;
}> = ({ categoryData, handleDeleteCategory }) => {
  return (
    <section className="flex justify-between w-full h-screen bg-[#909090]">
      <ul className="flex flex-col gap-[1rem] w-full h-full">
        {categoryData.map((category) => (
          <>
            <li className="flex w-full h-[5rem]">
              <span className="w-[85%] h-full  bg-black text-white">
                <span className="flex items-center w-full h-full ">
                  {/* {categoryData[].stt} */}
                  <p className="w-[5%]  text-center">1</p>
                  {/* {categoryData.id} */}
                  <p className="w-[5%]  text-center">{category.id}</p>
                  {/* {categoryData.name} */}
                  <p className="w-[25%] text-center">{category.name}</p>
                  {/* {categoryData.uri} */}
                  <a
                    href={`https://dienthoaigiakho.vn/${category.uri}`}
                    className="w-[30%] text-center"
                  >
                    {category.uri}
                  </a>
                  {/* {categoryData.description} */}
                  <p className="w-[20%] text-center">{category.description} </p>
                  {/* {categoryData.modified_at} */}
                  <p className="w-[15%] text-center">{category.modified_at}</p>
                </span>
              </span>
              <span className="flex gap-[1rem] grow justify-center items-center">
                <button className="p-[7px] border-solid border-[2px]">
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
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M40 16V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H16"
                      stroke="#333"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 16H30"
                      stroke="#333"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M23 44L40 23"
                      stroke="#333"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 24H24"
                      stroke="#333"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => {
                    handleDeleteCategory(category.id);
                  }}
                  className="p-[7px] border-solid border-[2px]"
                >
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
                      strokeWidth="4"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 12H42"
                      stroke="#333"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M37 12L35 43H13L11 12H37Z"
                      fill="none"
                      stroke="#333"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 35H29"
                      stroke="#333"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <button className="p-[7px] border-solid border-[2px]">
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
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z"
                      fill="none"
                      stroke="#333"
                      strokeWidth="4"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </span>
            </li>
          </>
        ))}
      </ul>
    </section>
  );
};

export default ManageCategories;
