import React from 'react';

class App extends React.Component {
  state = {
    screenData: ""
  }


  //This function adds entered numbers onto the screen
  buttonClickHandler = (e) => {
    let latestScreenData = this.state.screenData + e.target.id
    
    this.setState({
      screenData: latestScreenData
    })
  }




//This method keeps track of the change happening inside the screen text field , if user is entering data through the physical keyboard that data is also being upated to the screendata state value
  changeHandler = (e) => {
    this.setState({
      screenData: e.target.value
    })
  }



//This funciton to hanndle the backspace key, each time the backspace is clicked the last character from the screenData string is removed
  backSpace = () => {
    try {
      let newText = this.state.screenData.slice(0, -1)
      this.setState({
        screenData: newText
      })
    }
    catch (err) {
      this.setState({
        screenData: ""
      })
    }
  }



//When the user click the = button this method is called
  displayResult = () => {
    let result = null
    try {
      result = eval(this.state.screenData)
    }
    catch (err) {
      result = "Invalid Expression"
    }

    this.setState({
      screenData: result
    })
  }


  //When the user clicks the 'CLEAR' button this method is called
  displayCleared = () => {
    this.setState({
      screenData: ""
    })
  }


  //This method returns the text color for the screen, the if the screenData is set to "Inavalid Expression" it returns "red" else "white"
  colorDetector = () => {
    if (this.state.screenData === "Invalid Expression") {
      return "red"
    }
    else {
      return "White"
    }
  }

  render() {
    return (

      <div className="calculator">

         {/* This is the main Screen of the app*/}
        <input type="text" id="screen" placeholder="CLICK HERE" style={{ color: `${this.colorDetector()}` }} onChange={this.changeHandler} value={this.state.screenData} />


        {/* This div contains all the number buttons*/}    
        <div className="button_container">
          <button className="numberButton" onClick={this.buttonClickHandler} id="0">0</button>
          <button className="numberButton" onClick={this.buttonClickHandler} id="1">1</button>
          <button className="numberButton" onClick={this.buttonClickHandler} id="2">2</button>
          <button className="numberButton" onClick={this.buttonClickHandler} id="3">3</button>
          <button className="numberButton" onClick={this.buttonClickHandler} id="4">4</button>
          <button className="numberButton" onClick={this.buttonClickHandler} id="5">5</button>
          <button className="numberButton" onClick={this.buttonClickHandler} id="6">6</button>
          <button className="numberButton" onClick={this.buttonClickHandler} id="7">7</button>
          <button className="numberButton" onClick={this.buttonClickHandler} id="8">8</button>
          <button className="numberButton" onClick={this.buttonClickHandler} id="9">9</button>
          <button className="numberButton" onClick={this.buttonClickHandler} id="+">+</button>
          <button className="numberButton" onClick={this.buttonClickHandler} id="-">-</button>
          <button className="numberButton" onClick={this.buttonClickHandler} id="*">*</button>
          <button className="numberButton" onClick={this.buttonClickHandler} id="/">/</button>
          <button className="numberButton" onClick={this.displayResult} id="result">=</button>
        </div>


       {/* This div contains buttons other than number buttons*/}
        <div className="otherButtons">
          <button className="numberButton" id="." onClick={this.buttonClickHandler}>.</button>
          <button onClick={this.displayCleared} id="clear">CLEAR</button>
          <button onClick={this.backSpace} id="backspace">BACKSPACE</button>
        </div>
      </div>
    )
  }
}

export default App;
