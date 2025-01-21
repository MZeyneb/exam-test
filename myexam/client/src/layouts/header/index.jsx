import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../../pages/home'
import styles from "./index.module.scss"
import { CiShoppingBasket } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <>
    <nav>
        <h1><a href="#">Winter</a></h1>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/dresses"}>Dresses</NavLink></li>
            <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
            <li><NavLink to={"/add"}>Add</NavLink></li>

        </ul>
        <div className={styles["icons"]}>
        <CiShoppingBasket className={styles["bsk"]}/>
        <FaUser className={styles["user"]}/>

        </div>
    </nav>
    
    </>
  )
}

export default Header
