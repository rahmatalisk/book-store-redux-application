import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/books/thunk/fetchBooks";
import AddBookForm from "./AddBook";
import BooksCard from "./BooksCard";
import UpdateBook from "./UpdateBook";

const BooksContainer = ({ searchText }) => {
  const [items, setItems] = useState([]);
  const [updateBookId, setUpdateBookId] = useState();
  const [featured, setFeatured] = useState();
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const loadedAllBooks = useSelector((state) => state.books);

  useEffect(() => {
    if (searchText) {
      setItems(
        loadedAllBooks?.filter((bk) =>
          bk.name.toLowerCase().includes(searchText)
        )
      );
    } else {
      setItems(loadedAllBooks);
    }
  }, [loadedAllBooks, searchText]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  return (
    <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button
              className={`filter-btn ${!featured && "active-filter"} `}
              id="lws-filterAll"
              onClick={() => setFeatured(false)}
            >
              All
            </button>
            <button
              className={`filter-btn ${featured && "active-filter"} `}
              id="lws-filterFeatured"
              onClick={() => setFeatured(true)}
            >
              Featured
            </button>
          </div>
        </div>
        <div className="lws-bookContainer">
          {/* <!-- Card 1 --> */}
          {
            !featured && (items.length === 0 && <p>No product found...</p>)
          }

          {
            featured &&
         ( items?.filter((bk) => bk.featured === true).length === 0 && (
          <p>No product found...</p>
        ))
          }

          {!featured
            ? items.map((book, index) => (
                <BooksCard
                  setUpdateBookId={setUpdateBookId}
                  setShowUpdateForm={setShowUpdateForm}
                  key={index}
                  book={book}
                />
              ))
            : items
                ?.filter((bk) => bk.featured === true)
                .map((book, index) => (
                  <BooksCard
                    setUpdateBookId={setUpdateBookId}
                    setShowUpdateForm={setShowUpdateForm}
                    key={index}
                    book={book}
                  />
                ))}
        </div>
      </div>
      {showUpdateForm ? (
        <UpdateBook
          setShowUpdateForm={setShowUpdateForm}
          updateBookId={updateBookId}
        />
      ) : (
        <AddBookForm updateBookId={updateBookId} />
      )}
    </div>
  );
};

export default BooksContainer;
