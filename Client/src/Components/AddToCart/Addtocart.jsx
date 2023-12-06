import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, removeItem , clearCart } from "../Redux/Slice";
import { loadStripe } from "@stripe/stripe-js";
import {Divider} from "@mui/material"
import { Link } from 'react-router-dom'
import "./Addtocart.css"
import Footer from "../Footer/Footer";
const Addtocart = () => {
 const Nav=useNavigate()
  const select = useSelector((state) => state.cart.data);
  const userid = localStorage.getItem("userid");
  console.log(select)
  const dispatch = useDispatch(); 


  const handleIncrement = (index) => {
    dispatch(increment(index));
    console.log(index);
  };

  const handleDecrement = (index, num) => {
    if (num === 1) {
      dispatch(removeItem(index));
    }
    dispatch(decrement(index));
    console.log(index);
  };

  const handleRemove = (index) => {
    console.log("Removing item with id:", index);
    dispatch(removeItem(index));
  };

  const pricecal = (item) => {
    return item.price;
  };
  const cart2 = select.map((item) => ({
    ...item,
    // price: item.price ? parseInt(item.price.replace(/\s/g, "").replace(/[^\d]/g, ""), 10) || 0 : 0,
  }));
  
  
  // -----------------------------final---------------------------
  const cart3 = cart2.map((item) => ({
    ...item,
    price: parseInt(item.price),
  }));
  console.log("items in cart", cart3);


  // -------------new--------
  // Filter the items based on user_id
  const filteredItems = cart3.filter((item) => item.user_id === userid);


  const totalQuantity = filteredItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = filteredItems.reduce(
    (total, item) => total +(item.price) * item.quantity,
    0
  );



  // ----------------payment integration ---------------



  const makepayment = async () => {
    console.log("payment is starting")
    const stripe = await loadStripe(
      " pk_test_51OFXU6SJDDUS7wiVs0yGts2wyLMvg5SbD3QP3u16zsg1GHOA2XjgGN3H5KnTwGF4Q16FNagBbtiKQETsoaoonwrD00k5gRFZOB"
    );

    const body = {
      products: cart3,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "https://fignuscart-ly1x.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    console.log("Session details:", session);
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    console.log("Stripe Checkout result:", result); 
    console.log("Nested paymentIntent:", result.paymentIntent);

    if (result.error) {
      console.log("Stripe error:", result.error);
 
    }
    else if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
      console.log("Payment successful! Clearing the cart.");
      dispatch(clearCart()); // Make sure to use the correct action from the import statement
    }
  };
  localStorage.removeItem("cartData");
  return (
<>
    <div className="Order_Container">
<div className="heading">
        <h1>Shopping Cart</h1>
        </div>
        
      <div className="OderProduct">
        
        <Divider/>
        
        {/* Product Render */}
<div className="upper">
        {filteredItems && filteredItems.length > 0 ? (
  filteredItems.map((item, index) => (
    <div key={index} className="containerr">
      {/* Order Image */}
      <div className="first-cont">
        <img src={item.image} alt="click here" height={"200px"} />
      </div>

      {/* Order Details and Btn */}
      <div className="second-cont">
        <h3> <span> {item.name}</span></h3>
        <h3>4.2 ⭐⭐⭐⭐⭐</h3>
        {/* Use brandPrice instead of price */}
        <p className="BrandPrice">Course-Price: ₹<span>{item.price}</span></p>

        <div className="Order_btn">
          <div className="incDre_tn">
            <button className="Left_button" onClick={() => handleDecrement(item.id, item.quantity)}> - </button>
            <h4 className="value">{item.quantity}</h4>
            <button className="Right_button" onClick={() => handleIncrement(item.id)}>+</button>
          </div>
          
          <div className="remove">
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  ))
) : (
  // If Card is Empty Then This Condition renders
  <div className='emptycard' >
        <img src='	https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg' />
        <p>Your Cart is empty.keep shopping to find course.</p>
        <div className='emptybtn' onClick={()=>Nav("/")}>Keep shopping</div>
      </div>
  
)}
      </div>


      {/* Product Balance */}
<div className="lower">
      {filteredItems.length > 0 && (
        <div className="amount">
          <table>
            <tbody>
              <tr>
                <th><h2>Details</h2></th>
              </tr>

              <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Price</th>
              </tr>

              {filteredItems.map((item, index) => (
  <tr key={index} className="Item_amount">
    <td>No of item <span style={{ color: "#d63031" }}>({String(item.quantity || 0)})</span><br /></td>
    <td>{item.name}</td>
    {/* Add a check for item.price */}
    <td>₹{(item.price ? item.price : 0) * (item.quantity || 0)}</td>
    <td>Item Quantity: {item.quantity}</td>
  
  </tr>
))}
              <tr>
                <td colSpan={"2"} style={{color:"#2c3e50", fontSize:"1.5rem", fontWeight:"500"}}>Total Amount :</td>
                <td style={{color:"#27ae60",fontSize:"1.5rem", fontWeight:"500"}}> ₹{totalAmount}</td>
              </tr>
              </tbody>

          </table>

          <button onClick={makepayment} className="PaymentButton">Proceed to Checkout</button>


        </div>
      )}
      </div>
      </div>


    </div>
  
<Footer/>
    </>

  )
}

export default Addtocart
