import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import updateBook from "../redux/books/thunk/UpdateBook";

const UpdateBook = ({ updateBookId, setShowUpdateForm }) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [updatedBook, setUpdatedBook] = useState({});

  const findBook = books.find((bk) => bk.id === updateBookId);
  useEffect(() => {
    setUpdatedBook(findBook);
  }, [findBook]);

  // to get update Book info
  const getUpdatedBook = () => {
    if (updatedBook?.name) {
      const { name, author, price, featured, rating, thumbnail } = updatedBook;
      document.getElementById("input-Bookname").value = name;
      document.getElementById("input-Bookthumbnail").value = thumbnail;
      document.getElementById("input-Bookprice").value = price;
      document.getElementById("input-Bookauthor").value = author;
      document.getElementById("input-Bookrating").value = rating;
      document.getElementById("input-Bookfeatured").checked = featured;
    }
  };
  getUpdatedBook();

  // add book
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const author = e.target.author.value;
    const thumbnail = e.target.thumbnail.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const featured = e.target.featured.checked;
    const bookDetail = { name, featured, author, thumbnail, price, rating };
    dispatch(updateBook(bookDetail, updateBookId));
    setShowUpdateForm(false);
  };
  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label forhtml="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              // value={updatedBook?.name}
            />
          </div>

          <div className="space-y-2">
            <label forhtml="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
            />
          </div>

          <div className="space-y-2">
            <label forhtml="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label forhtml="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
              />
            </div>

            <div className="space-y-2">
              <label forhtml="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
            />
            <label forhtml="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
