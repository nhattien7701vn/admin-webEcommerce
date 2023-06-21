import { TProduct } from "../assets/types/Product.js";
import axiosClient from "./axiosClient.js";
export const productApi = {
  getAllProduct: () => {
    const url = "/products";
    return axiosClient.get(url);
  },
  createProduct: (data: TProduct) => {
    const url = "/products";
    return axiosClient.post(url, data);
  },
  updateProduct: (id: string, data: TProduct) => {
    const url = `/products/${id}`;
    return axiosClient.put(url, data);
  },
  deleteProduct: (id: string) => {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  }
};
