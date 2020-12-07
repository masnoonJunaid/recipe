import React from 'react'
import styled from 'styled-components'
import {RecipeConsumer } from '../context'


class RecipeDetails extends React.Component {
  render(){
    return (
      <RecipeConsumer>
        {value=>{
      const  {id, name, image, category,label,price,description} = value.recipeDetails
          return(
            <RecipeStyles>
              <div className="details-checkout">
              <article className="detail-article display-flex">
                <div className="div-img div-details">
                  <img className="detail-img" alt="" src={image}/>
                </div>
                <div className="div-details">
                  <p className="recipe-detail"><b>Name : </b> {name}</p>
                  <p className="recipe-detail"><b>Price : </b> {price}</p>
                  <p className="recipe-detail"><b>Category : </b> {category}</p>
                  <p className="recipe-detail"><b>Description : </b> {description}</p>
                </div>
              </article>
              <form className="form">
                <h3>Checkout</h3>
                <label for="name">Name On Card</label>
                <br/>
                <input className="up-form" id="name" type="text" name="cardname" placeholder="Crime Master Gogo" required autoComplete="Name"/>
                <br/>
                <label for="card_number">Enter Card Number</label>
                <br/>
                <input className="up-form" id="card_number"label="Card Number"max="16" type="text" name="cardnumber" placeholder="1111-2222-3333-4444" required autoComplete="card_number"/>
                <br/>
                <div className="display-flex">
                  <label for="expiration_date" type="text" name="exp_date">Expiration Date</label>
                  <br/>
                  <input className="b-form" id="expiration_date" type="text" name="expmonth" placeholder="07/24"/>
                  <br/>
                  <label for="cvv">CVV</label>
                  <br/>
                  <input className="b-form" id="cvv" type="cvv"name="cvv" placeholder="171" required autoComplete="CVV"/>
                </div>
                <br/>
                <p><b>{price}$</b></p>
                <input className="buy-button" type="submit"value="Place Order"/>
              </form>
            </div>
            </RecipeStyles>
          )
        }}
    </RecipeConsumer>
    )
  }
}

const RecipeStyles = styled.div`
*{
margin:0;
padding:0;
}

.details-checkout{
  width:100%;
}
.form{
  width:25%;
  float:left;
  display:
}

.detail-article{
  width:75%;
  float:left;
}

div-details{
  display:flex;
  float:left;
}

.div-img{
  width:100%;
}




.detail-img{
  width:60%;
  border:solid lightgrey;
  border-radius:10px;
  height:60vh;

}
.recipe-detail{
  font-family:'Roboto', sans-serif;
  margin:1%;
}

.detail-img:hover {
  opacity:0.9;
  scale:1.2;
}

.buy-button{
  background-color:brown;
  width:40%;
  height:6vh;
  margin-top:6%;
}

.up-form{
  height:5vh;
  width:20vw;
  margin:2%;
  border:solid brown;
  text-align:center;
  border-radius:4px;
}

.b-form{
  height:5vh;
  width:4vw;
  margin:2%;
  border:solid brown;
  text-align:center;
  border-radius:4px;
}

`

export default RecipeDetails
