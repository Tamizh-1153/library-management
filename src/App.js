import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Books from "./components/Books"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Return from "./components/Return"
import AddBooks from "./components/AddBooks"
import EditBook from "./components/EditBook"

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState=>!prevState)
  }

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="row w-100">
        {isSidebarOpen && <Sidebar />}
        <BrowserRouter>
        <Routes>
          <Route path="/" Component={Books} />
          <Route path="/books" Component={Books} />
          <Route path="/add-books" Component={AddBooks} />
          <Route path="/return" Component={Return} />
          <Route path="/edit-book/:id" Component={EditBook} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
