import { ADDED, DELETED, LOADED, UPDATE } from "./ActionTypes";

export const bookLoaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};
export const bookAdded = (book) => {
  return {
    type: ADDED,
    payload: book,
  };
};
export const bookDelete = (bookId) => {
  return {
    type: DELETED,
    payload: bookId,
  };
};
export const bookUpdate = (book,bookID) => {
  return {
    type: UPDATE,
    payload: book,
    bookID,
  };
};
