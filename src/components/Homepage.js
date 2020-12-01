import React from 'react'
import styled from 'styled-components'
import{ RecipeConsumer } from '../context'
import Recipecard from './Recipecard'


class Homepage extends React.Component{

  render(){
    return (
      <HomeStyle>
        <div className="search-bar">
          <img className="search-icon" alt="" src='./icons/search.svg'/>

          {/*this form is an Example of controlled component,
             A controlled component let you render UI based on user input.
             Few benefits of controlled components
             1. Instant input validation usin state;
             2. Allow to conditionally disable or enable form button.
             3. They enforce input formats updating UI, Based on some user Input.
            */}
            {/*

              */}
              <RecipeConsumer>
                {value => {
                  return <input
                    className="search-input"
                    type="text"
                    placeholder="Search Top Recipe"
                    onChange={event => {value.updateQuery(event.target.value)}}
                    />
                }}
              </RecipeConsumer>
        </div>
        <div>
          <ul className="ul-list">
              <RecipeConsumer>
                {value => {
                  return value.recipe.map(recipe=>{
                    return <Recipecard key = {recipe.id} recipe = {recipe}/>
                  })
                }}
              </RecipeConsumer>
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
    font-family:'Castoro', serif;
    line-height:3rem;
    font-size:25px;
  }

  .search-input:focus{
    color: brown;
    border:solid brown;
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

`


export default Homepage
