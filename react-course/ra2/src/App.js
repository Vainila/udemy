import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
   state = {
      number: 47,
   };

   handleClick = () => {
      this.setState(
         (prevState, prevProps) => ({
            number: prevState.number + 1,
         }),
         () => console.log("updated state" + this.state.number)
      );
   };
   render() {
      return (
         <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <p>{this.state.number}</p>
               <button onClick={this.handleClick} className="App-link">
                  Update state
               </button>
            </header>
         </div>
      );
   }
}

export default App;
