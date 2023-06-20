import axiosClient from "./axiosClient.mjs";
export const productApi = {
  getAllProduct: () => {
    const url = "/products";
    return axiosClient.get(url);
  },
  createProduct: (data) => {
    const url = "/products";
    return axiosClient.post(url, data);
  },
  updateProduct: (id, data) => {
    const url = `/products/${id}`;
    return axiosClient.put(url, data);
  },
  deleteProduct: (id) => {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  }
};
