import React, { useState } from "react";
export interface Product {
  id: string;
  name: string;
  uri: string;
  description: string;
  image_source: string;
  category_id: string;
  price: number;
  modified_at: number;
}
const ManageProducts: React.FC<{
  productData: Product[];
  handleDeleteProduct: (id: string) => void;
  handleEditProduct: (product: Product) => void;
}> = ({ productData, handleDeleteProduct, handleEditProduct }) => {
  const formatTimeStamp = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      {isEdit === true ? (
        <>
          <section className="fixed top-0 left-0 z-[999] w-[100vw] h-[100vh] bg-black opacity-[0.5]"></section>
          <form className="fixed flex flex-col z-[1000] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[40vw] h-[90vh] p-[2rem] text-black bg-white">
            <h2 className="relative w-fit top-0 left-[50%] translate-x-[-50%] text-[4rem]">
              Product
            </h2>

            <label htmlFor="">ID</label>
            <input type="text" />
            <label htmlFor="">NAME</label>
            <input type="text" />
            <label htmlFor="">URI</label>
            <input type="text" />
            <label htmlFor="">DESCRIPTION</label>
            <input type="text" />
            <label htmlFor="">IMGAGE SOURCE</label>
            <input type="text" />
            <figure>
              <input type="text" />
              <img src="" alt="" />
            </figure>
            <button className="relative bot-0 left-[50%] translate-x-[-50%] w-[20%] h-[5rem] border-solid border-[2px] border-black">
              SUBMIT
            </button>
          </form>
        </>
      ) : (
        <></>
      )}
      <section className="flex justify-between w-full bg-[#909090]">
        <ul className="flex flex-col gap-[1rem] w-full h-full">
          {productData.map((product) => (
            <>
              <li className="flex gap-[10px] w-full">
                <span className="w-[87%] h-full p-[1rem] bg-black text-white">
                  <span className="flex gap-[1rem] items-center w-full h-full ">
                    {/* {product.stt} */}
                    <p className="w-[3%]  text-center">1</p>
                    {/* {product.id} */}
                    <p className="flex-grow break-words text-center">
                      {product.id}
                    </p>{" "}
                    {/* {product.image_source} */}
                    <a
                      href={product.image_source}
                      className="w-[5%] break-words text-center"
                    >
                      <figure className="w-[100%]">
                        <img
                          className="w-full"
                          src={product.image_source}
                          alt=""
                        />
                      </figure>
                    </a>
                    {/* {product.name} */}
                    <p className="w-[20%] text-center">{product.name}</p>{" "}
                    {/* {product.price} */}
                    <p className="w-[10%] text-center">{product.price} $</p>
                    {/* {product.uri} */}
                    <a
                      href={`https://dienthoaigiakho.vn/${product.uri}`}
                      className="w-[17%] text-center"
                    >
                      {product.uri}
                    </a>
                    {/* {product.description} */}
                    <p className="w-[15%] text-center">
                      {product.description}{" "}
                    </p>
                    {/* {product.modified_at} */}
                    <p className="w-[7%] text-center">
                      {formatTimeStamp(product.modified_at)}
                    </p>
                  </span>
                </span>

                <span className="flex gap-[1rem] grow justify-center items-center">
                  <button
                    className="p-[7px] border-solid border-[2px]"
                    onClick={() => {
                      setIsEdit(true);
                    }}
                  >
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
                    className="p-[7px] border-solid border-[2px]"
                    onClick={() => {
                      handleDeleteProduct(product.id);
                    }}
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
    </>
  );
};

export default ManageProducts;