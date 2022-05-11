import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
    console.log("constructor")
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => this.setState(() => {
        return {monsters: res}
      }, () => {
        console.log(this.state);
      }))
    console.log("componentDidMount")
  }

  onSearchChange = (e) => {
    const searchField = e
    .target
    .value
    .toLocaleLowerCase();
  this.setState({searchField})
  }

  render() {
    const {monsters,searchField} = this.state;
    const {onSearchChange}  = this;
    const filteredMonsters = monsters
      .filter(monster => monster.name.toLocaleLowerCase().includes(searchField))
    return (
      <div className="App">
        {console.log("render")}
        <input
          className='search-box'
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}/> {filteredMonsters.map(monster => {
          return <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        })}
      </div>
    )
  }
}

export default App;
