import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterStyle>
      <ul className="footer-list">
        <li className="f-details">
          Get in touch!
        </li>
        <li className="f-details">
          <h4 className="f-text"> Location</h4>
          <p> Mumbai India</p>
        </li>
        <li className="f-details">
          <h4 className="f-text"> Contact</h4>
          <p className="f-text">support@topRecipe.com</p>
        </li>
        <li className="f-details">
        <h4 className="f-text">Follow</h4>
          <ul className="social-media">
            <img className="social-img" alt="" src="icons/fb.svg"/>
            <img className="social-img" alt="" src="icons/linkedin.svg"/>
          </ul>
        </li>
      </ul>
    </FooterStyle>
  )
}


const FooterStyle = styled.footer`
    *{
      margin:0;
      padding:0;
    }

    .footer-list{
      display:flex;
      flext-wrap:wrap;
      margin-left:auto;
      margin-top:100vh;
      margin-right:auto;
      text-align:center;
      height:14%;
      float:left;
      background-color:brown;
      width:100%;

    }

    .f-details{
      margin:6%;
      list-style-type:none;
    }
    .social-img{
      float:left;
      display:flex;
      height:30px;
      width:30px;
    }

    @media screen and (min-width:300px) and (max-width:600px) {
      .f-details{
        margin:0.7%
      }
    }


    /* responsiveness can improve further adding breakpoints at different fixels, but the time tikk tik tik .. */
`


export default Footer
