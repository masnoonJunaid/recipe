import React from 'react';
{/*creating context api , a sofware architecture that make sure
  data is flowing top to bottom components, handling all the operation with data
  in this structure at a single place , and then passing methods as props to other
  components;
*/}
const RecipeContext = React.createContext();
class RecipeProvider extends React.Component {
  state = {
    recipe:[];
  };
  componentDidMount() {
    fetch('http://starlord.hackerearth.com/recipe')
      .then(res => res.json())
      .then(recipe=> {
        this.setState({
          recipe: recipe;
        })
      })
  }

  render() {
    return (
      <RecipeContext.Provider value={{
          ...this.state,
      }}
      >
        {this.props.children}
      <RecipeContext.Provider>
    )
  }
}


const RecipeConsumer = RecipeContext.Consumer;

export {RecipeProvider, DataConsumer};
