import {useEffect} from "react";
import {useState} from "react";
import Book from "../Book/Book";
import "./Books.css";

const Books = ({cart, setCart}) => {
  const [books, setBooks] = useState([]);
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  // console.log(books);
  const handleAddToCart = (book) => {
    const isExist = cart.find((b) => book.id === b.id);
    if (isExist) {
      return alert("Book already added");
    }
    setCart([...cart, book]);
  };

  return (
    <div>
      <div className="books">
        {books?.map((book) => (
          <Book
            key={book.id}
            handleAddToCart={handleAddToCart}
            book={book}
          ></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
