import { bookUpdate } from "../Action";


const updateBook = (book,bookID ) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${bookID}`, {
            method: "PATCH",
           
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

        
        const updatingBook = await response.json();
        dispatch(bookUpdate(updatingBook,bookID))
       

        
    };
};

export default updateBook;
