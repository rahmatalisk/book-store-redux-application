import { bookAdded } from "../Action";

const addBook = (book) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({
        name: book.name,
        author: book.author,
        price: book.price,
        rating: book.rating,
        thumbnail: book.thumbnail,
        featured: book.featured,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const addingBook = await response.json();

    dispatch(bookAdded(addingBook));
  };
};

export default addBook;

// import { bookAdded } from "../Action";

// const addBook = (book) => {
//   return async (dispatch) => {
//     const response = await fetch("http://localhost:9000/books", {
//       method: "POST",
//       body: JSON.stringify({
//         name: book.name,
//         author: book.author,
//         price: book.price,
//         rating: book.rating,
//         thumbnail: book.thumbnail,
//         featured: book.featured,
//       }),
//       headers: {
//         "Content-type": "application/json ; charset = UTF-8",
//       },
//     });
//     const addBook = await response.json();

//     dispatch(bookAdded(addBook));
//   };
// };

// export default addBook;
