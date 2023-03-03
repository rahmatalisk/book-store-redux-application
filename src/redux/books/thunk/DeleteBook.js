import { bookDelete } from "../Action";

const deleteBook = (id) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${id}`, {
      method: "DELETE",
    });

    dispatch(bookDelete(id));
  };
};

export default deleteBook;
