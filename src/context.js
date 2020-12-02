import React from 'react';
import escapeRegExp from 'escape-string-regexp'
{/*creating context api , a sofware architecture that make sure
  data is flowing top to bottom components, handling all the operation with data
  in this structure at a single place , and then passing methods as props to other
  components;
*/}
const RecipeContext = React.createContext();
class RecipeProvider extends React.Component {
  state = {
    recipe : [],
    items:[],
    isLoaded:false,
    query:'',
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

  render() {
  
    return (
      <RecipeContext.Provider value={{
          ...this.state,
          updateQuery:this.updateQuery,
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
