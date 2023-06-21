import { TCategory } from "../assets/types/Category.js";
import axiosClient from "./axiosClient.js";
export const categoryApi = {
  getAllCategory: () => {
    const url = "/categories";
    return axiosClient.get(url);
  },

  createCategory: (data: TCategory) => {
    const url = "/categories";
    return axiosClient.post(url, data);
  },
  updateCategory: (id: string, data: TCategory) => {
    const url = `/categories/${id}`;
    return axiosClient.put(url, data);
  },
  deleteCategory: (id: string) => {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  }
};
