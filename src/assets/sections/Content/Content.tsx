import { Routes, Route } from "react-router-dom";
("react-router-dom");
import Chart from "./Chart/Chart";
import ManageCategories from "./ManageCategories/ManageCategories";
import ManageProducts from "./ManageProducts/ManageProducts";
import ManageUsers from "./ManageUsers/ManageUsers";
import Settings from "./Settings/Settings";
import { TProduct } from "../../types/Product";
import { TCategory } from "../../types/Category";

const Content: React.FC<{
  categoryData: any[];
  productData: any[];
  handleDeleteProduct: (id: string) => void;
  handleDeleteCategory: (id: string) => void;
  handleEditProduct: (product: TProduct) => void;
  handleDuplicateProduct: (product: TProduct) => void;
  handleEditCategory: (category: TCategory) => void;
  handleDuplicateCategory: (category: TCategory) => void;
}> = ({
  categoryData,
  productData,
  handleDeleteProduct,
  handleEditProduct,
  handleDuplicateProduct,
  handleDeleteCategory,
  handleEditCategory,
  handleDuplicateCategory,
}) => {
  return (
    <>
      <section className="flex-grow px-[6rem] py-[3rem]">
        <Routes>
          <Route path="/" element={<Chart />} />
          <Route
            path="/mange-categories"
            element={
              <ManageCategories
                categoryData={categoryData}
                handleDeleteCategory={handleDeleteCategory}
                handleEditCategory={handleEditCategory}
                handleDuplicateCategory={handleDuplicateCategory}
              />
            }
          />
          <Route
            path="/mange-products"
            element={
              <ManageProducts
                productData={productData}
                handleDeleteProduct={handleDeleteProduct}
                handleEditProduct={handleEditProduct}
                handleDuplicateProduct={handleDuplicateProduct}
              />
            }
          />
          <Route path="/mange-users" element={<ManageUsers />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </section>
    </>
  );
};

export default Content;
