import axiosClient from "./axiosClient.mjs";
export const productApi = {
  getAllProduct: () => {
    const url = "/products";
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
  deleteProduct: (id) => {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  }
};
