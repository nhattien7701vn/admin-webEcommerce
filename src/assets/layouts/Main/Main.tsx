import React from 'react'
import Header from '../../sections/Header/Header'
import Content from '../../sections/Content/Content'

const Main = () => {
  return (
    <main className="relative flex flex-col grow ml-[calc(250px+2rem)] border-solid border-2">
      <Header />
      <Content />
    </main>
  )
}

export default Main
