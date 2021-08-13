import React from 'react';
{/*creating context api , a sofware architecture that make sure
  data is flowing top to bottom components, handling all the operation with data
  in this structure at a single place , and then passing methods as props to other
  components;
*/}
const RecipeContext = React.createContext();
class RecipeProvider extends React.Component {
  state = {
    recipe : [],
    isLoaded:false,
    query:'',
    recipeDetails:[]
  };
  componentDidMount() {
    fetch('http://starlord.hackerearth.com/recipe')
      .then(res => res.json())
      .then(recipies=> {
        this.setState({
          recipe: recipies,
          isLoaded:true
        })
      })

  }

  updateQuery = (query) => {
    this.setState({query:query.trim()})
    console.log(this.state.query)
  }

/*
  1.getDetails method take parameter id and and find the recipe
  with same id, and return all its data as item
  2. The method handleRecipe called on onClick method on listed recipe image
  and return its all properties aligned to it in recipeDetails object and update state
  */


  getDetails = (id) => {
    const item = this.state.recipe.find(item => item.id === id);
    return item;
}

  handleRecipe = (id) => {
    const recipe = this.getDetails(id);
    this.setState(() => {
      return {recipeDetails:recipe};
    })
    console.log(`I am working correctly and you clicked this img ${id}`)
  }


  render() {

    return (
      <RecipeContext.Provider value={{
          ...this.state,
          updateQuery:this.updateQuery,
          handleRecipe:this.handleRecipe,
          isLoaded:this.isLoaded,
      }}
      >
        {this.props.children}
      </RecipeContext.Provider>
    )
  }
}


const RecipeConsumer = RecipeContext.Consumer;

export { RecipeProvider, RecipeConsumer}
