import { Add, Home, KeyboardReturn, LibraryBooks } from "@mui/icons-material"
import { Typography } from "@mui/material"
import React from "react"

const Sidebar = () => {
  return (
    <div className="col-2">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark collapse navbar-collapse "
        style={{ width: "280px !important", minHeight: "92.4vh" }}
      >
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item ">
            <a
              href="/"
              className="nav-link text-white d-flex justify-content-between"
            >
              <Home />
              <Typography className="mx-4">Home</Typography>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="nav-link text-white d-flex justify-content-between"
            >
              <LibraryBooks />
              <Typography className="mx-4"> Books</Typography>
            </a>
          </li>
          <li>
            <a
              href="/add-books"
              className="nav-link text-white d-flex justify-content-between"
            >
              <Add />
              <Typography className="mx-4">Add</Typography>
            </a>
          </li>
          <li>
            <a
              href="/return"
              className="nav-link text-white d-flex justify-content-between"
            >
              <KeyboardReturn />
              <Typography className="mx-4">Return</Typography>
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  )
}

export default Sidebar
