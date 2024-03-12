import {useState} from "react";
import "./App.css";
import Books from "./components/Books/Books";
import Title from "./components/Title/Title";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Title></Title>
      <section className="home-page">
        <div>
          <Books cart={cart} setCart={setCart}></Books>
        </div>
        <div className="sidebar">
          <h3>Total Cart Items:</h3>
          <p></p>
          <div style={{border: "2px solid tomato", padding: "15px"}}>
            <thead>
              <tr>
                <th style={{paddingRight: "40px"}}>Name: </th>
                <th>Price: </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td style={{paddingRight: "40px"}}>{item.name}</td>
                  <td>{item.discountPrice} Tk</td>
                </tr>
              ))}
            </tbody>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
