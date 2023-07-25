import React from "react"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
      <div className="container-fluid">
        <button
          onClick={toggleSidebar}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample01"
          aria-controls="navbarsExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">Admin Dashboard</a>
      </div>
    </nav>
  )
}

export default Navbar
