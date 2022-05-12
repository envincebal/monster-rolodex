import {Component} from 'react';
import CardList from './components/card-list/cart-list';
import SearchBox from './components/search-box/search-box';
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
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField))
    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search monsters"
          className="search-box"/>

        <CardList monsters={filteredMonsters}/>

      </div>
    )
  }
}

export default App;
