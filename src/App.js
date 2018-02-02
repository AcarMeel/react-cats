import React, { Component } from 'react';
// import {cats} from './cats';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super()
        this.state = {
            cats: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState({ cats: users }));
    }
    // Make arrow function for the scope
    onSearchChange = (event) => {
        // updating the state
        this.setState({ searchfield: event.target.value });
    }
    render() {
        const filteredCats = this.state.cats.filter( cat => {
            return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className="tc">
                <h1 className="f1">Cat Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList cats = { filteredCats } />
            </div>
        );
    }
}

export default App;