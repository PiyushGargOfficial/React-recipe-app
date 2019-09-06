import React, {
  Component
} from 'react';
import './App.css';
import {
  recipes
} from './tempList.js'
import RecipeList from './components/RecipeList.js'
import RecipeDetails from './components/RecipeDetails.js'

class App extends React.Component {

  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=076fa36575a2cef404986d907225030e&q=chicken%20breast&page=2",
    details_id: 35383,
    pageIndex: 1,
    search: '',
    query: '&q=',
    base_url: "https://www.food2fork.com/api/search?key=076fa36575a2cef404986d907225030e",
    error: ''
  }

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();

      if (jsonData.recipes.length === 0) {
        this.setState(() => {
          return {
            error: 'Sorry, But your search did not return any results..'
          }
        })
      }
      else {
        this.setState(() => {
          return {
            recipes: jsonData.recipes
          }
        })
      }
    } catch (error) {
      console.log(error)
    }

  }

  componentDidMount() {
    this.getRecipes();
  }

  handleIndex = index => {
    this.setState({
      pageIndex: index
    })
  }

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    })
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;

    this.setState(() => {
      return {
        url: `${base_url}${query}${search}`,
        search: ''
      }
    }, () => {
      this.getRecipes();
    })
  }

  displayPage = (index) => {
    switch (index) {
      default:
      case 1:
        return (<RecipeList
          recipes={this.state.recipes}
          handleDetails={this.handleDetails}
          value={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          error={this.state.error}
        />)
      case 0:
        return (<RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex} />)
    }
  }

  render() {
    // console.log(this.state.recipes); 
    return (
      <React.Fragment >
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment >
    )
  }
}

export default App