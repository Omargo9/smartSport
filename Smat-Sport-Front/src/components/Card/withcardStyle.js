import styled from 'styled-components';
export default (component) => styled(component)`
.cart{
    width: 250px;
     border:  #787878 2px solid;
    text-align: center;
    border-radius: 10px;
    position: relative;
    margin: 10px 4px;
 }
 .descrition{
   font-size:12px;

   color:grey;

 }
 .name{
   font-weight: bold;
   
 }
 .product-img{
    width: 200;
    height: 200px;
 }
 .status{
     border: 2px #787878 solid;
    border-radius: 0 10px 0 20px;
    width: 50px;
    padding:5px;
   position: absolute;
   top: -3px;
   right: -3px;
   background: rgb(199, 2, 2);
   color: white;
 }
 .buy{display: flex;
 justify-content: space-between;
 border-top:2px  rgb(199, 2, 2) solid;
 margin-left:20px;
 margin-bottom: 5px;
 margin-right: 5px}
 .addtocart{
    color: white;
    background:  rgb(199, 2, 2);
    padding: 7px;
    border:2px rgb(199, 2, 2) solid;
    text-decoration: none;
    cursor: pointer;
 
 }
 .product{
    padding: 5px;
 }
 .cart:hover{
    -webkit-box-shadow: -1px 10px 49px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 10px 49px 0px rgba(0,0,0,0.75);
    box-shadow: -1px 10px 49px 0px rgba(0,0,0,0.75);
 }
 .addtocart:hover{
    background:  rgb(241, 75, 75);
     border:2px  rgb(241, 75, 75) solid;
 }
  `