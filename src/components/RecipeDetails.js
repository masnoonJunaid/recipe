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
              <div className="detail-container">
                <div className="div-details">
                  <img className="detail-img" alt="" src={image}/>
                </div>
                <div className="div-details">
                  <p className="recipe-detail"><b>Name : </b> {name}</p>
                  <p className="recipe-detail"><b>Price : </b> {price}</p>
                  <p className="recipe-detail"><b>Category : </b> {category}</p>
                  <p className="recipe-detail"><b>Description : </b> {description}</p>
                  <button className="buy-button">Buy Now</button>
                </div>
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

.detail-container{
  width:100%;
  display:flex;
  flex-wrap:wrap;
  float:left;
  margin:2%;
}

.div-details{
 margin-left:
}

.detail-img{
  width:75%;
  border:solid lightgrey;
  border-radius:10px;
  height:60vh;

}
.recipe-detail{
  font-family:'Roboto', sans-serif;
  margin:3%;
}

.detail-img:hover {
  opacity:0.9;
  scale:1.2;
}

.buy-button{
  background-color:brown;
  width:30%;
  height:6vh;
  margin-top:8%;
}
`

export default RecipeDetails
