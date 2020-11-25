import React from 'react'
import styled from 'styled-components'
import escapeRegExp from 'escape-string-regexp'


class Homepage extends React.Component{



  state={
    items : [],
    query : ''
  }

  componentDidMount(){
    fetch('http://starlord.hackerearth.com/recipe')
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: data
        })
      })
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
  }



  render(){

    let showingRecipe;
    let {items, query} = this.state; //JavaScript destructing method

    if(query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingRecipe = items.filter((recipe) => match.test(recipe.name))
    } else{
      showingRecipe =  items
    }


    return (
      <HomeStyle>
        <div className="search-bar">
          <img className="search-icon" alt="" src='./icons/search.svg'/>
          <input
            className="search-input"
            type="text"
            placeholder="Search Top Recipe"
            onChange={event => {this.updateQuery(event.target.value)}}
          />
        </div>
        <div>
          <ul className="ul-list">
            {showingRecipe.map(recipe => (
              <li className="recipe-card">
                <img
                className="recipe-img"
                 alt=""
                 src={recipe.image}
                  />
                <div className="img-prop">
                  <p className="prop-line"><b>Name : </b> {recipe.name}</p>
                  <p className="prop-line"><b>Price : </b> {recipe.price}</p>
                </div>
                <div className="icon-div">
                  <img className="int-icons" alt="" src="../icons/comment.svg"/>
                  <img className="int-icons" alt="" src="../icons/save.svg"/>
                  <img className="int-icons" alt="" src="../icons/share.svg"/>
                  <img className="int-icons" alt="" src="../icons/buy.svg"/>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </HomeStyle>
    )
  }
}


export const HomeStyle = styled.div`
  .search-bar {
    margin-left:auto;
    margin-right:auto;
    width: 70%;
    background-color:brown;
    height:8vh;
    display:flex;
    border: lightgrey solid;
    border-radius:10px;
  }
  .search-icon {
    width:20%;
  }
  .search-input {
    width:80%;
    border:solid lightgrey;
    text-align:center;
    font-family: 'Castoro', serif;
    line-height:3rem;
    font-size:25px;
  }

  .ul-list{
    width:100%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    margin-left:10%;
    margin-right:auto;
    list-style-type:none;
  }

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


export default Homepage
