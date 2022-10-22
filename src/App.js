import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search your monsters..."
          onChange={(event) => {
            const substr = event.target.value;
            this.state.monsters.filter((monster) =>
              monster.name.contains(substr)
            );
            console.log(this.state.monsters);
          }}
        ></input>
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
        <button></button>
      </div>
    );
  }
}

export default App;
