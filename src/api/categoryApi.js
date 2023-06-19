import axiosClient from "./axiosClient.mjs";
export const categoryApi = {
  getAllCategory: () => {
    const url = "/categories";
    return axiosClient.get(url);
  },

  // create:(data)=>{
  //   const url = "/posts";
  //   return axiosClient.post(url, data);
  // },
  // update:(id, data)=>{
  //   const url = `/posts/${id}`;
  //   return axiosClient.patch(url, data);
  // },
  deleteCategory: (id) => {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  }
};
