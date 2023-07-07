import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = ({ onSearch }) => {
  return (
    <div className={style.Nav}>
      <SearchBar onSearch={onSearch}></SearchBar>
      <Link className={style.button1}to="/about">ABOUT</Link>
      <Link className={style.button2}to="/home">HOME</Link>
    </div>
  );
};

export default Nav;
