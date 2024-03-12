import "./Book.css";

const Book = ({book, handleAddToCart}) => {
  const {name, image, originalPrice, discountPrice, rating} = book;

  return (
    <div className="book">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <div className="book-para">
        <p style={{textDecoration: "line-through"}}>{originalPrice} Tk;</p>
        <p>{discountPrice} Tk</p>
      </div>
      <p>Rating: {rating}</p>
      <button onClick={() => handleAddToCart(book)}>Add To cart</button>
    </div>
  );
};

export default Book;
