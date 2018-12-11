import React from "react";
import withcardStyle from './withcardStyle';





 function Card(props){

    const { className, product } = props;
    const isHappy= product.happyHour ? 'solde': 'new'
    console.log(product)
  return (
    <div className={className}>

    <div class="cart">
    <div class="product">
    <div>
        <span className="status">{isHappy}</span>
    </div>
        <img src={product.imgPath} alt=""/>
        <span className="name">{product.name}</span> <br/>
        <span className="descrition">{product.description}</span>
        <div class="buy">
            <span>
            {product.price}$
            </span>
            <a className="addtocart" href="">Add To Cart</a>
        </div>
    </div>
    
    </div>
    </div>
    
    
   
  );
}

export default withcardStyle(Card);

