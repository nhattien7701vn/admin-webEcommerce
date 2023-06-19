import React, { useEffect, useState } from "react";
import Header from "../../sections/Header/Header";
import Content from "../../sections/Content/Content";
import { postApi } from "../../../api/postApi.mjs";

const Main = () => {
  const [cateData, setCateData] = useState([])
  const [apiLoading, setApiLoading] = useState("Loading")

  useEffect(() => {
    (async () => {
      try {
        const res = await postApi.getAllCategory()
        setCateData(res.data)
        setApiLoading("Finish")
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])
  return (<>
    {apiLoading === "Loading" ? <section className="fixed z-[999] w-[100vw] h-[100vh] bg-black opacity-[0.5]">
      <p className="z-[1000] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[10rem]">LOADING</p>
    </section> : <main className="flex flex-col w-full pl-[calc(250px+2.1rem)]">
      <Header />
      <Content categoryData={cateData} />
    </main>}

  </>
  );
};

export default Main;
