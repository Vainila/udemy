import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
   constructor() {
      super();
      this.state = {
         monsters: [
            {
               name: "Frankenstein",
            },
            {
               name: "Dracula",
            },
            {
               name: "Zombie",
            },
         ],
      };
   }

   render() {
      return (
         <div className="App">
            {this.state.monsters.map((monster) => {
               return <h1 key={monster.name}>{monster.name}</h1>;
            })}
         </div>
      );
   }
}

export default App;
