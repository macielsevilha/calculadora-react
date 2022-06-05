import React, { Component } from "react";
import Button from "../components/Button";
import Display from "../components/Display";
import './Calculator.css'

const initialState = {
  displayValue: '100',
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
   alert("Jilvania � atentada na escola!")
}

setOperation(operation) {
  console.log(operation)
}
addDigit(n) {
  console.log(n)
}
  render() {
      return(
         <div className="main">
            <div className="calculator">
            <Display value={this.state.displayValue}/>
              <Button label="AC" click={this.clearMemory} double clear />
              <Button label="%" click={this.setOperation} operation color />
              <Button label="/" click={this.setOperation} operation color />
              <Button label="7" click={this.addDigit} />
              <Button label="8" click={this.addDigit}/>
              <Button label="9" click={this.addDigit}/>
              <Button label="x" click={this.setOperation} operation color />
              <Button label="4" click={this.addDigit}/>
              <Button label="5" click={this.addDigit}/>
              <Button label="6" click={this.addDigit}/>
              <Button label="-" click={this.setOperation} operation color />
              <Button label="1" click={this.addDigit}/>
              <Button label="2" click={this.addDigit}/>
              <Button label="3" click={this.addDigit}/>
              <Button label="+" click={this.setOperation} operation  color />
              <Button label="0" click={this.addDigit} />
              <Button label="." click={this.addDigit}/>   
              <Button label="=" click={this.setOperation} triple />   
            </div>
         </div>
      )
  }
}