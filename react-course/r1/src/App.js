import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends Component {
   constructor() {
      super();
      this.state = {
         monsters: [],
         searchField: "",
      };
   }
   

   componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((resp) => resp.json())
         .then((users) => {
            this.setState({ monsters: users });
         });
   }

   handleChange =(e)=> {
      this.setState({ searchField: e.target.value });
   }

   render() {
      const { monsters, searchField } = this.state;

      const filteredMonsters = monsters.filter((monster) =>
         monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

      return (
         <div className="App">
            <SearchBox
               placeholder="Search here"
               handleChange={this.handleChange}
            />
            {console.log("this in render = " + this)}
            {console.log(this)}
            <CardList monsters={filteredMonsters} />
         </div>
      );
   }
}

export default App;
