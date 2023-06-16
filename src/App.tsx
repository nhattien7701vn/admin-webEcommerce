import Main from "./assets/layouts/Main/Main"
import Sidebar from "./assets/layouts/Sidebar/Sidebar"

function App() {
  return (
    <div className="flex w-full h-[150vh] bg-[#f0f0f0]">
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
