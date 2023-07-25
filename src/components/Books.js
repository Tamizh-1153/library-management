import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Books = () => {
  const [books, setBooks] = useState(null)
  const refresh = useNavigate()

  useEffect(() => {
    fetchData()
  }, [setBooks])

  const fetchData = async () => {
    const resp = await axios.get(
      "https://64bf49715ee688b6250d3bf4.mockapi.io/books"
    )
    setBooks(resp.data)
  }

  const handleBorrow = async (book) => {
    book.status = "borrowed"
    await axios.put(
      `https://64bf49715ee688b6250d3bf4.mockapi.io/books/${book.id}`,
      book
    )
    refresh("/books")
  }

  const handleDelete = async (book) => {
    const deletedBook = books.indexOf(book)
    await axios.delete(
      `https://64bf49715ee688b6250d3bf4.mockapi.io/books/${book.id}`
    )
    books.splice(deletedBook, 1)
    refresh("/books")
  }

  const handleEdit = async (book) => {}

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
                    book.status === "available" && (
                      <tr key={book.id}>
                        <td className="align-content-center">
                          {book.book_name}
                        </td>
                        <td>{book.author}</td>
                        <td>{book.ISBN}</td>
                        <td>
                          <button
                            onClick={() => handleBorrow(book)}
                            className="btn btn-success m-1"
                          >
                            Borrow
                          </button>
                          <Link
                            to={`/edit-book/${book.id}`}
                            state={books}
                          >
                            <button
                              onClick={() => handleEdit(book)}
                              className="btn btn-success m-1"
                            >
                              Edit
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDelete(book)}
                            className="btn btn-danger m-1 "
                          >
                            Delete
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

export default Books
