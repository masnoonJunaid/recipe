import React from 'react'
import styled from 'styled-components'
import "../App.css"

class Recipecard extends React.Component {
  render(){
    const {name, price, image} = this.props.recipe;
    return (
      <CardStyle className="recipe-card">
          <img
          className="recipe-img"
           alt=""
           src={image}
            />
          <div className="img-prop">
            <p className="prop-line"><b>Name : </b> {name}</p>
            <p className="prop-line"><b>Price : </b> {price}</p>
          </div>
          <div className="icon-div">
            <img className="int-icons" alt="" src="../icons/comment.svg"/>
            <img className="int-icons" alt="" src="../icons/save.svg"/>
            <img className="int-icons" alt="" src="../icons/share.svg"/>
            <img className="int-icons" alt="" src="../icons/buy.svg"/>
          </div>
        </CardStyle>
    )
  }
}

const CardStyle = styled.li`

.recipe-card{
  width:20%;
  height:50vh;
  border:solid lightgrey;
  border-radius: 4%;
  margin:3%;
}

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
