import { Routes, Route } from "react-router-dom";
("react-router-dom");
import Chart from "./Chart/Chart";
import ManageCategories from "./ManageCategories/ManageCategories";
import ManageProducts from "./ManageProducts/ManageProducts";
import ManageUsers from "./ManageUsers/ManageUsers";
import Settings from "./Settings/Settings";
import { Product } from "./ManageProducts/ManageProducts";

const Content: React.FC<{
  categoryData: any[];
  productData: any[];
  handleDeleteProduct: (id: string) => void;
  handleDeleteCategory: (id: string) => void;
  handleEditProduct: (product: Product) => void;
}> = ({
  categoryData,
  productData,
  handleDeleteProduct,
  handleDeleteCategory,
  handleEditProduct,
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
