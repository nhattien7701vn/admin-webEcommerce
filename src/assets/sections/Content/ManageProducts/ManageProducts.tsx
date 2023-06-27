import React, { useState } from "react";
import { TProduct } from "../../../types/Product";
const ManageProducts: React.FC<{
  productData: TProduct[];
  handleDeleteProduct: (id: string) => void;
  handleEditProduct: (product: TProduct) => void;
  handleDuplicateProduct: (product: TProduct) => void;
}> = ({
  productData,
  handleDeleteProduct,
  handleEditProduct,
  handleDuplicateProduct,
}) => {
  const [btnSelected, setBtnSelected] = useState<string>("none");
  const [productSelected, setProductSelected] = useState<TProduct>({
    id: "",
    name: "",
    uri: "",
    description: "",
    image_source: "",
    sub_category_id: "",
    price: 0,
    flash_sale: false,
    flash_price: 0,
    created_at: 0,
    modified_at: 0,
  });

  const formatTimeStamp = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };

  return (
    <>
      {btnSelected === "Edit" ? (
        <>
          <section className="fixed top-0 left-0 z-[999] w-[100vw] h-[100vh] bg-black opacity-[0.5]"></section>
          <form
            className="fixed flex flex-col z-[1000] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[40vw] h-[95vh] py-[1rem] px-[2rem] text-black bg-white"
            onSubmit={(e) => {
              e.preventDefault();
              handleEditProduct(productSelected);
            }}
          >
            <h2 className="w-fit mx-auto text-[2rem]">Product</h2>
            <button
              className="fixed top-0 right-0 translate-x-[-50%] translate-y-[50%]  w-[2rem] h-[2rem]"
              onClick={() => {
                setBtnSelected("none");
              }}
            >
              <svg
                className="w-full h-full"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.6567 18.3432L18.343 29.6569"
                  stroke="#000000"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3433 18.3432L29.657 29.6569"
                  stroke="#000000"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex flex-col gap-[5px]">
              <label className="text-[15px]" htmlFor="">
                ID
              </label>
              <input
                className="w-[100%] px-[5px] border-solid border-[1px] border-black rounded-[5px] text-[20px]"
                type="text"
                placeholder="ID"
                value={productSelected.id}
                readOnly
              />
              <label className="text-[15px]" htmlFor="">
                NAME
              </label>
              <input
                className="w-[100%] px-[5px] border-solid border-[1px] border-black rounded-[5px] text-[20px]"
                type="text"
                placeholder="NAME"
                value={productSelected.name}
                onChange={(e) => {
                  setProductSelected((prevProduct) => ({
                    ...prevProduct,
                    name: e.target.value,
                  }));
                }}
              />
              <label className="text-[15px]" htmlFor="">
                SUB CATEGORY ID
              </label>
              <input
                className="w-[100%] px-[5px] border-solid border-[1px] border-black rounded-[5px] text-[20px]"
                type="text"
                placeholder="SUB CATEGORY ID"
                value={productSelected.sub_category_id}
                onChange={(e) => {
                  setProductSelected((prevProduct) => ({
                    ...prevProduct,
                    category_id: e.target.value,
                  }));
                }}
              />
              <label className="text-[15px]" htmlFor="">
                URI
              </label>
              <input
                className="w-[100%] px-[5px] border-solid border-[1px] border-black rounded-[5px] text-[20px]"
                type="text"
                placeholder="URI"
                value={productSelected.uri}
                onChange={(e) => {
                  setProductSelected((prevProduct) => ({
                    ...prevProduct,
                    uri: e.target.value,
                  }));
                }}
              />
              <label className="text-[15px]" htmlFor="">
                DESCRIPTION
              </label>
              <input
                className="w-[100%] px-[5px] border-solid border-[1px] border-black rounded-[5px] text-[20px]"
                type="text"
                placeholder="DESCRIPTION"
                value={productSelected.description}
                onChange={(e) => {
                  setProductSelected((prevProduct) => ({
                    ...prevProduct,
                    description: e.target.value,
                  }));
                }}
              />
              <label className="text-[15px]" htmlFor="">
                PRICE
              </label>
              <input
                className="w-[100%] px-[5px] border-solid border-[1px] border-black rounded-[5px] text-[20px]"
                type="number"
                placeholder="PRICE"
                value={productSelected.price}
                onChange={(e) => {
                  setProductSelected((prevProduct) => ({
                    ...prevProduct,
                    price: e.target.valueAsNumber,
                  }));
                }}
              />
              <label className="text-[15px]" htmlFor="">
                FLASH SALE
              </label>
              <input
                className="w-[30px] h-[30px] px-[5px] border-solid border-[1px] border-black rounded-[5px] text-[20px]"
                type="checkbox"
                placeholder="PRICE"
                checked={productSelected.flash_sale}
                onChange={(e) => {
                  setProductSelected((prevProduct) => ({
                    ...prevProduct,
                    flash_sale: !prevProduct.flash_sale,
                  }));
                }}
              />
              <label className="text-[15px]" htmlFor="">
                FLASH PRICE
              </label>
              <input
                className="w-[100%] px-[5px] border-solid border-[1px] border-black rounded-[5px] text-[20px]"
                type="number"
                placeholder="PRICE"
                value={productSelected.flash_price}
                onChange={(e) => {
                  setProductSelected((prevProduct) => ({
                    ...prevProduct,
                    flash_price: e.target.valueAsNumber,
                  }));
                }}
              />
              <label className="text-[15px]" htmlFor="">
                IMGAGE SOURCE
              </label>
              <input
                className="w-[100%] px-[5px] border-solid border-[1px] border-black rounded-[5px] text-[20px]"
                type="text"
                placeholder="IMAGE SOURCE"
                value={productSelected.image_source}
                onChange={(e) => {
                  setProductSelected((prevProduct) => ({
                    ...prevProduct,
                    image_source: e.target.value,
                  }));
                }}
              />
              <figure className="w-[30%] my-0 mx-auto">
                <img
                  className="w-full h-full"
                  src={productSelected.image_source}
                  alt=""
                />
              </figure>
            </div>
            <button className="relative bot-0 left-[50%] translate-x-[-50%] w-[20%] h-[5rem] border-solid border-[2px] border-black rounded-[10px]">
              SUBMIT
            </button>
          </form>
        </>
      ) : (
        <></>
      )}
      {btnSelected === "Duplicate" ? (
        <>
          <section className="fixed top-0 left-0 z-[999] w-[100vw] h-[100vh] bg-black opacity-[0.5]"></section>
          <form
            className="fixed flex flex-col z-[1000] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[40vw] h-[95vh] py-[1rem] px-[2rem] text-black bg-white"
            onSubmit={(e) => {
              e.preventDefault();
              handleDuplicateProduct(productSelected);
            }}
          >
            <h2 className="mx-auto w-fit text-[2rem]">Product</h2>
            <button
              className="fixed top-0 right-0 translate-x-[-50%] translate-y-[50%]  w-[2rem] h-[2rem]"
              onClick={() => {
                setBtnSelected("none");
              }}
            >
              <svg
                className="w-full h-full"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.6567 18.3432L18.343 29.6569"
                  stroke="#000000"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3433 18.3432L29.657 29.6569"
                  stroke="#000000"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex flex-col  gap-[5px]">
              <label className="text-[15px]" htmlFor="">
                ID (CAREFUL: ID CANNOT DUPLICATE)
              </label>
              <input
                className="w-[100%] px-[5px] border-solid border-[1px] border-black rounded-[5px] text-[20px]"
                type="text"
                placeholder="ID"
                value={productSelected.id}
                onChange={(e) => {
                  setProductSelected((prevProduct) => ({
                    ...prevProduct,
                    id: e.target.value,
                  }));
                }}
              />
              <label className="text-[15px]" htmlFor="">
                NAME
              </label>
              <input
                className="w-[100%] px-[5px] border-solid border-[1px] border-black rounded-[5px] text-[20px]"
                type="text"
                placeholder="NAME"
                value={productSelected.name}
                onChange={(e) => {
                  setProductSelected((prevProduct) => ({
                    ...prevProduct,
                    name: e.target.value,
                  }));
                }}
              />
              <label className="text-[15px]" htmlFor="">
                SUB CATEGORY ID
              </label>
              <input
                className="w-[100%] px-[5px] border-solid border-[1px] border-black rounded-[5px] text-[20px]"
                type="text"
                placeholder="SUB CATEGORY ID"
                value={productSelected.sub_category_id}
                onChange={(e) => {
                  setProductSelected((prevProduct) => ({
                    ...prevProduct,
                    category_id: e.target.value,
                  }));
                }}
              />
              <label className="text-[15px]" htmlFor="">
                URI
              </label>
              <input
                className="w-[100%] px-[5px] border-solid border-[1px] border-black rounded-[5px] text-[20px]"
                type="text"
                placeholder="URI"
                value={productSelected.uri}
                onChange={(e) => {
                  setProductSelected((prevProduct) => ({
                    ...prevProduct,
                    uri: e.target.value,
                  }));
                }}
              />
              <label className="text-[15px]" htmlFor="">
                DESCRIPTION
              </label>
              <input
                className="w-[100%] px-[5px] border-solid border-[1px] border-black rounded-[5px] text-[20px]"
                type="text"
                placeholder="DESCRIPTION"
                value={productSelected.description}
                onChange={(e) => {
                  setProductSelected((prevProduct) => ({
                    ...prevProduct,
                    description: e.target.value,
                  }));
                }}
              />
              <label className="text-[15px]" htmlFor="">
                PRICE
              </label>
              <input
                className="w-[100%] px-[5px] border-solid border-[1px] border-black rounded-[5px] text-[20px]"
                type="number"
                placeholder="PRICE"
                value={productSelected.price}
                onChange={(e) => {
                  setProductSelected((prevProduct) => ({
                    ...prevProduct,
                    price: e.target.valueAsNumber,
                  }));
                }}
              />
              <label className="text-[15px]" htmlFor="">
                IMGAGE SOURCE
              </label>
              <input
                className="w-[100%] px-[5px] border-solid border-[1px] border-black rounded-[5px] text-[20px]"
                type="text"
                placeholder="IMAGE SOURCE"
                value={productSelected.image_source}
                onChange={(e) => {
                  setProductSelected((prevProduct) => ({
                    ...prevProduct,
                    image_source: e.target.value,
                  }));
                }}
              />
              <figure className="w-[30%] my-0 mx-auto">
                <img
                  className="w-full h-full"
                  src={productSelected.image_source}
                  alt=""
                />
              </figure>
            </div>
            <button className="relative bot-0 left-[50%] translate-x-[-50%] w-[20%] h-[5rem] border-solid border-[2px] border-black rounded-[10px]">
              SUBMIT
            </button>
          </form>
        </>
      ) : (
        <></>
      )}
      <section className="flex flex-col justify-between w-full ">
        <h1 className="text-[3rem]">Product</h1>
        <div>
          <form className="flex ">
            <input type="text" />
            <select name="cars" id="cars">
              <option value="volvo">sub_cate</option>
            </select>{" "}
            <p>0-5m</p>
            <input type="range" min="0" max="50" />
            <button></button>
          </form>
        </div>
        <ul className="flex flex-col gap-[1rem] w-full h-full">
          {productData.map((product) => (
            <>
              <li className="flex gap-[10px] w-full border-solid border-[2px] border-black rounded-[7px]">
                <span className="w-[87%] h-full p-[1rem] text-black">
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
                      setBtnSelected("Edit");
                      setProductSelected(product);
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

                  <button
                    className="p-[7px] border-solid border-[2px]"
                    onClick={() => {
                      setBtnSelected("Duplicate");
                      setProductSelected(product);
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
