import React from 'react'
import styled from 'styled-components'
import{ RecipeConsumer } from '../context'
import Recipecard from './Recipecard'
import escapeRegExp from 'escape-string-regexp'


class Homepage extends React.Component{

  render(){
    return (
      <HomeStyle>
        <div className="search-bar">
          <img className="search-icon" alt="" src='./icons/search.svg'/>

          {/*this form is an Example of controlled component,
            A component which renders a form, but the source of truth for that
            form state lives inside of the component state rather than inside of DOM
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
        <div className="ul-list">
              <RecipeConsumer >
              {/*
                Here How the combination of query search and filters work to render result
                based on input in above format
                Here What happening under the Hood;
                1. The user enters text into the input field above.
                2. An Event listener invokes the updateQuery() function on every onChange event.
                3. updateQuery() then calls setState(), merging in the new state to update the component's internal statte.
                4. Because componet state has changed, the component re-renders based on new state.
                5. A npm package installed to support RegExp with command `npm install --save escape-string-regexp sort-by`
                */}
                {
                  (value) => {
                    let showingRecipe;
                    if(value.query){
                      const match  = new RegExp(escapeRegExp(value.query),'i')
                      showingRecipe = value.recipe.filter((recipe)=>match.test(recipe.name))
                    } else {
                      showingRecipe = value.recipe;
                    }
                  return showingRecipe.map(recipe=>{
                  return <Recipecard
                    key = {recipe.id}
                    recipe = {recipe}
                    />
                  })
                }}
              </RecipeConsumer>
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
    margin-left:auto;
    margin-right:auto;
    list-style-type:none;
  }

  .ul-div{
    margin-left:;
    margin-right:auto;
    text-align:center;
  }


`


export default Homepage
