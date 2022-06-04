import React, { Component } from "react";
import Button from "../components/Button";
import './Calculator.css'

export default class Calculator extends Component {
 
  render() {
      return(
         <div className="main">
            <div className="calculator">
              <Buttonpers label="AC" />
              <Buttonpers label="%" />
              <Buttonpers label="/" />
              <Buttonpers label="7" />
              <Buttonpers label="8" />
              <Buttonpers label="9" />
              <Buttonpers label="x" />
              <Buttonpers label="4" />
              <Buttonpers label="5" />
              <Buttonpers label="6" />
              <Buttonpers label="-" />
              <Buttonpers label="1" />
              <Buttonpers label="2" />
              <Buttonpers label="3" />
              <Buttonpers label="+" />
              <Buttonpers label="0" />
              <Buttonpers label="." />
              
            </div>
         </div>
      )
  }
}