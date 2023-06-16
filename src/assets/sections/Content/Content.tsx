import { Routes, Route } from 'react-router-dom';
'react-router-dom'
import Chart from './Chart/Chart'
import MangeCategories from './MangeCategories/MangeCategories'
import MangeProducts from './MangeProducts/MangeProducts'
import MangeUsers from './MangeUsers/MangeUsers'
import Settings from './Settings/Settings'

const Content = () => {
  return (
    <>
      <section className='flex-grow px-[6rem] py-[3rem]'>
        <Routes>
          <Route path="/" element={<Chart />} />
          <Route path="/mange-categories" element={<MangeCategories />} />
          <Route path="/mange-products" element={<MangeProducts />} />
          <Route path="/mange-users" element={<MangeUsers />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </section>
    </>
  )
}

export default Content
