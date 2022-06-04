import React, { Component } from "react";
import './Header.css'
import Button from "../components/Button";
import Display from "../components/Display";
import Calculator from "../main/Calculator";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
               <div className="soon">
                   <h3>type<span>soon</span></h3>
               </div>
               <div className="nav">
                   <ul>
                       <li><a href="">Home</a></li>
                       <li><a href="">Contact</a></li>
                       <li><a href="">Sobre</a></li>
                   </ul>
               </div>
               <div className="button">
                   <Button label="Entrar"/>
               </div>
            </div>
        )
    }
}