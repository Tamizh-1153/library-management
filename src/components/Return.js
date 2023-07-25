import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Return = () => {
  const [books, setBooks] = useState(null)
  const refresh=useNavigate()

  useEffect(() => {
    fetchData()
  }, [setBooks])

  const fetchData = async () => {
    const resp = await axios.get(
      "https://64bf49715ee688b6250d3bf4.mockapi.io/books"
    )
    setBooks(resp.data)
  }

  const handleReturn = async (book) => {
    book.status = "available"
    await axios.put(
      `https://64bf49715ee688b6250d3bf4.mockapi.io/books/${book.id}`,
      book
    )
    refresh('/return')
  }

  return (
    <div className="col-10 ">
      <div className="container text-center p-5">
        <div className="card w-100">
          <div className="card-title">
            <h2 className="text-center mx-4 mt-4 mb-1">Books</h2>
          </div>
          <div className="card-body">
            <table
              style={{ width: "100%" }}
              className="table table-bordered table-hover align-middle table-responsive-sm my-3"
            >
              <thead className="bg-dark text-white">
                <tr>
                  <td>Title</td>
                  <td>Author</td>
                  <td>ISBN</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {books?.map(
                  (book) =>
                    book.status === "borrowed" && (
                      <tr key={book.id}>
                        <td className="align-content-center">
                          {book.book_name}
                        </td>
                        <td>{book.author}</td>
                        <td>{book.ISBN}</td>
                        <td>
                          <button
                            onClick={() => handleReturn(book)}
                            className="btn btn-success"
                          >
                            Return
                          </button>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Return
