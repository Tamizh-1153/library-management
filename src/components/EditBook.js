import React from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useFormik } from "formik"

const EditBook = () => {
  const { id } = useParams()

  const location = useLocation()
  const books = location.state

  const edit = books?.find((item) => item.id === id)
  console.log(edit)

  let refresh = useNavigate()

  const formik = useFormik({
    initialValues: {
      book_name: edit.book_name,
      ISBN: edit.ISBN,
      author: edit.author,
    },
    onSubmit: async (values) => {
      const bookUpload = {
        book_name: values.book_name,
        ISBN: values.ISBN,
        author: values.author,
      }

      await axios.put(
        `https://64bf49715ee688b6250d3bf4.mockapi.io/books/${id}`,
        bookUpload
      )
      refresh("/books")
    },
  })

  return (
    <div className="col-10 ">
      <div className="container text-center p-5">
        <div className="card w-100">
          <div className="card-title">
            <h2 className="text-center mx-4 mt-4 mb-1">Books</h2>
          </div>
          <div className="card-body">
            <form
              onSubmit={formik.handleSubmit}
              className="d-flex flex-column align-items-center"
            >
              <input
                required
                style={{ width: "50%" }}
                className="form-control my-2 "
                type="text"
                name="book_name"
                onChange={formik.handleChange}
                defaultValue={formik.values.book_name}
              />
              <input
                required
                style={{ width: "50%" }}
                className="form-control my-2"
                type="text"
                name="ISBN"
                onChange={formik.handleChange}
                defaultValue={formik.values.ISBN}
              />
              <input
                required
                style={{ width: "50%" }}
                className="form-control my-2"
                type="text"
                name="author"
                onChange={formik.handleChange}
                defaultValue={formik.values.author}
              />
              <button type="submit" className="btn btn-primary py-1">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditBook
