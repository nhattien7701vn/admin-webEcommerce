import axiosClient from "./axiosClient.mjs";
export const categoryApi = {
  getAllCategory: () => {
    const url = "/categories";
    return axiosClient.get(url);
  },

  createCategory: (data) => {
    const url = "/categories";
    return axiosClient.post(url, data);
  },
  updateCategory: (id, data) => {
    const url = `/categories/${id}`;
    return axiosClient.put(url, data);
  },
  deleteCategory: (id) => {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  }
};
