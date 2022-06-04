import React, { Component } from "react";
import Button from "../components/Button";
import './Calculator.css'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0

}

export default class Calculator extends Component {
 
  state = {...initialState}

  constructor(props) {
    super(props)
    this.clearMemory = this.clearMemory.bind(this)
 
}

clearMemory() {
   alert()
}

  render() {
      return(
         <div className="main">
            <div className="calculator">
           
              <Button label="AC" click={this.clearMemory} triple />
              <Button label="%" />
              <Button label="/" />
              <Button label="7" />
              <Button label="8" />
              <Button label="9" />
              <Button label="x" />
              <Button label="4" />
              <Button label="5" />
              <Button label="6" />
              <Button label="-" />
              <Button label="1" />
              <Button label="2" />
              <Button label="3" />
              <Button label="+" />
              <Button label="0" />
              <Button label="." />   
            </div>
         </div>
      )
  }
}