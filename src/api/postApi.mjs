import axiosClient from "./axiosClient.mjs";
export const postApi = {
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
  // delete:(id)=>{
  //   const url = `/posts/${id}`;
  //   return axiosClient.delete(url);
  // }
};
