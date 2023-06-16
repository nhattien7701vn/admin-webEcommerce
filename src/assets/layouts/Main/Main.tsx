import React from 'react'
import Header from '../../sections/Header/Header'
import Content from '../../sections/Content/Content'

const Main = () => {
  return (
    <main className="flex flex-col w-full pl-[calc(250px+2.1rem)]">
      <Header />
      <Content />
    </main>
  )
}

export default Main
