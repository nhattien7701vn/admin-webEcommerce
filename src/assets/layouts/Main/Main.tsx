import { useEffect, useState } from "react";
import Header from "../../sections/Header/Header.js";
import Content from "../../sections/Content/Content.js";
import { productApi } from "../../../api/productApi.ts";
import { categoryApi } from "../../../api/categoryApi.ts";
import { TProduct } from "../../types/Product.js";
import { TCategory } from "../../types/Category.js";

const Main = () => {
  const [cateData, setCateData] = useState<[]>([]);
  const [productData, setProductData] = useState<[]>([]);
  const [apiLoading, setApiLoading] = useState<string>("Loading");

  useEffect(() => {
    fetchProductData();
    fetchCategoryData();
  }, []);
  async function fetchProductData() {
    try {
      const product = await productApi.getAllProduct();
      setProductData(product.data);
      setApiLoading("Finish");
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchCategoryData() {
    try {
      const category = await categoryApi.getAllCategory();
      setCateData(category.data);
      setApiLoading("Finish");
    } catch (error) {
      console.log(error);
    }
  }
  function handleDeleteProduct(id: string) {
    setApiLoading("Loading");
    productApi.deleteProduct(id);

    //Xóa ở client thôi
    // console.log("Truoc DELETE", productData);
    // const newProductData = productData.filter(
    //   (product: Product) => product.id !== id
    // );
    // setProductData(newProductData);

    fetchProductData();
    setApiLoading("Finish");
  }
  function handleDeleteCategory(id: string) {
    setApiLoading("Loading");

    categoryApi.deleteCategory(id);
    fetchCategoryData();
    setApiLoading("Finish");
  }

  function handleEditProduct(product: TProduct) {
    setApiLoading("Loading");
    productApi.updateProduct(product.id, product);
    fetchProductData();
    setApiLoading("Finish");
  }
  function handleDuplicateProduct(product: TProduct) {
    setApiLoading("Loading");
    productApi.createProduct(product);
    fetchProductData();
    setApiLoading("Finish");
  }
  function handleEditCategory(category: TCategory) {
    setApiLoading("Loading");
    categoryApi.updateCategory(category.id, category);
    fetchCategoryData();
    setApiLoading("Finish");
  }
  function handleDuplicateCategory(category: TCategory) {
    setApiLoading("Loading");
    categoryApi.createCategory(category);
    fetchCategoryData();
    setApiLoading("Finish");
  }

  return (
    <>
      {apiLoading === "Loading" ? (
        <section className="fixed z-[999] w-[100vw] h-[100vh] bg-black opacity-[0.5]">
          <p className="fixed z-[1000] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[10rem]">
            LOADING
          </p>
        </section>
      ) : (
        <main className="flex top-0 left-0 flex-col w-full pl-[calc(250px+2.1rem)]">
          <Header />
          <Content
            categoryData={cateData}
            productData={productData}
            handleDeleteProduct={handleDeleteProduct}
            handleEditProduct={handleEditProduct}
            handleDuplicateProduct={handleDuplicateProduct}
            handleDeleteCategory={handleDeleteCategory}
            handleEditCategory={handleEditCategory}
            handleDuplicateCategory={handleDuplicateCategory}
          />
        </main>
      )}
    </>
  );
};

export default Main;
