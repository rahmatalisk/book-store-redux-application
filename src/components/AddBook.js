import React from "react";
import { useDispatch } from "react-redux";
import addBook from "../redux/books/thunk/AddBook";

const AddBookForm = () => {
  const dispatch = useDispatch();

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
    dispatch(addBook(bookDetail));

    e.target.name.value = "";
    e.target.author.value = "";
    e.target.thumbnail.value = "";
    e.target.price.value = "";
    e.target.rating.value = "";
    e.target.featured.checked = "";
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
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
