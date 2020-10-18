import React from 'react'
import styled from 'styled-components'


class Homepage extends React.Component{
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

`


export default Homepage
