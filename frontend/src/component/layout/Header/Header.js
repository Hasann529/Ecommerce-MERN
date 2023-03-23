import React from 'react'
import {ReactNavbar} from 'overlay-navbar'
import logo from '../../../images/logo.png'
import {MdAccountCircle } from "react-icons/md";
import {MdSearch } from "react-icons/md";
import {MdAddShoppingCart } from "react-icons/md";


const Header =() => {
  return (
    <ReactNavbar
      burgerColorHover="#eb4034"
      logo={logo}
      logoWidth="20vmax"
      navColor1="white"
      logoHoverSize="10px"
      logoHoverColor="#eb4034"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.3vmax"
      link1Color="rgba(35, 35, 35,0.8)"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="#eb4034"
      link1Margin="1vmax"
      profileIconUrl="/login"
      profileIconSize="2.3vmax"
      profileIcon={true}
      profileIconColor="rgba(35, 35, 35,0.8)"
      profileIconColorHover="#eb4034"
      ProfileIconElement={MdAccountCircle}
      profileIconMargin=".5vmax"
      searchIcon={true}
      searchIconColor="rgba(35, 35, 35,0.8)"
      searchIconColorHover="#eb4034"
      SearchIconElement={MdSearch}
      searchIconMargin=".5vmax"
      cartIcon={true}
      cartIconColor="rgba(35, 35, 35,0.8)"
      cartIconColorHover="#eb4034"
      CartIconElement={MdAddShoppingCart}
      cartIconMargin=".5vmax" />
  );
}

export default Header
