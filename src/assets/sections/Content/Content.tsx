import React from 'react'
import Chart from './Chart/Chart'
import MangeCategories from './MangeCategories/MangeCategories'
import MangeProducts from './MangeProducts/MangeProducts'
import MangeUsers from './MangeUsers/MangeUsers'
import Settings from './Settings/Settings'

const Content = () => {
  return (
    <>
      <Chart />
      <MangeCategories />
      <MangeProducts />
      <MangeUsers />
      <Settings />
    </>
  )
}

export default Content
