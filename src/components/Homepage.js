import React from 'react'
import styled from 'styled-components'


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



  render(){  
    return (
      <HomeStyle>
        <div className="search-bar">
          <img className="search-icon" alt="" src='./icons/search.svg'/>
          <input
            className="search-input"
            type="tex"
            placeholder="Search"
            onChange={{}}
          />
        </div>
        <div>
          <ul className="ul-list">
            {this.state.items.map(recipe => (
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


const HomeStyle = styled.div`
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
  }

  .ul-list{
    width:100%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    margin-left:auto;
    margin-rigt:auto;
    list-style-type:none;
  }

  .recipe-card{
    width:25%;
    height:65vh;
    border:solid lightgrey;
    border-radius: 4%;
    margin:2%;
  }

  .recipe-img{
    width:100%;
    height:60%;
    border-radius:10px;
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
