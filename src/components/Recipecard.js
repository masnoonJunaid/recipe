import React from 'react'
import styled from 'styled-components'
import {RecipeConsumer} from '../context'
import {Link} from  'react-router-dom'
import "../App.css"

class Recipecard extends React.Component {
  render(){

    return (
      <RecipeConsumer>
        {value => {
          const {id,name, price, image} = this.props.recipe;
          return (

            <CardStyle className="recipe-card">
              <Link to="details">
                <img
                  className="recipe-img"
                  alt=""
                  src={image}
                  onClick={() =>{
                    value.handleRecipe(id)
                  }}
                  />
              </Link>
              <div className="img-prop">
                <p className="prop-line"><b>Name : </b> {name}</p>
                <p className="prop-line"><b>Price : </b> {price}</p>
              </div>
              <div className="icon-div">
                <img className="int-icons" alt="" src="../icons/comment.svg"/>
                <img className="int-icons" alt="" src="../icons/share.svg"/>
                <img className="int-icons" alt="" src="../icons/buy.svg"/>
              </div>
            </CardStyle>
          )
        }}
      </RecipeConsumer>
    )
  }
}

const CardStyle = styled.li`


.recipe-img{
    width:100%;
    height:60%;
    border-radius:10px;
  }


.recipe-img:hover{
  transform:scale(1.02);
  transition:all 0.5s ease-in-out;
}
  .int-icons{
    width:10%;
    margin:7%;
  }

  .prop-line{
    font-family:'Roboto', sans-serif;
    margin-left:2%;
  }

  .icon-div {
    display: flex;
    width:100%;
  }

  @media screen and (max-width:715px){
    .recipe-card{
      width:40%;
    }
  }

  @media screen and (min-width:280px) and (max-width:600px){
    .recipe-card{
      width:70%;
    }
    .ul-list{
      margin-left:auto;
      margin-right:auto;
      text-align:center;
    }
  }
`

export default Recipecard
