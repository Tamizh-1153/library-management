import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"

const AddBooks = () => {
  const formik = useFormik({
    initialValues: {
      book_name: "",
      ISBN: "",
      author: "",
    },
    validationSchema: Yup.object({
      book_name: Yup.string().required("*Required"),
      ISBN: Yup.string().required("*Required"),
      author: Yup.string()
        .max(20, "Must be less than 30 characters")
        .required("*Required"),
    }),
    onSubmit: async (values,{resetForm}) => {
      const newBook = {
        book_name: values.book_name,
        ISBN: values.ISBN,
        author: values.author,
        status: "available",
      }

      await axios.post(
        "https://64bf49715ee688b6250d3bf4.mockapi.io/books",
        newBook
      )
      resetForm({values: ''})
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
            <form onSubmit={formik.handleSubmit} className="  m-1 text-center">
              <div className="  mx-5 my-4">
                <input
                  required
                  className="form-control "
                  type="text"
                  name="book_name"
                  placeholder="Enter Book Title"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.book_name}
                />
                {formik.touched.book_name && formik.errors.book_name ? (
                  <p
                    style={{ fontSize: "13px" }}
                    className="text-left px-2 text-danger"
                  >
                    {formik.errors.book_name}
                  </p>
                ) : null}
              </div>
              <div className=" mx-5 my-4">
                <input
                  required
                  className="form-control "
                  type="text"
                  name="ISBN"
                  placeholder="Enter ISBN"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ISBN}
                />
                {formik.touched.ISBN && formik.errors.ISBN ? (
                  <p
                    style={{ fontSize: "13px" }}
                    className="text-left px-2 text-danger"
                  >
                    {formik.errors.ISBN}
                  </p>
                ) : null}
              </div>
              <div className=" mx-5 my-4 ">
                <input
                  required
                  className="form-control "
                  type="text"
                  name="author"
                  placeholder="Enter author name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.author}
                />
                {formik.touched.author && formik.errors.author ? (
                  <p
                    style={{ fontSize: "13px" }}
                    className="text-left px-2 text-danger"
                  >
                    {formik.errors.author}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                className="btn btn-primary ml-4 mt-1  mb-5 "
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBooks
