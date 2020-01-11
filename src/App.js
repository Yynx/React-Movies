import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import Random from './components/Random';
import NotFoundPage from './components/NotFoundPage';
const axios = require('axios');


class App extends React.Component {
  
  // Set state here
  state = {
    movies: null,
    searchTerm: '',
  }

  // Sets 'searchTerm' state to the entered input
  handleChange = (e) => {
    this.setState({ searchTerm : e.target.value })
  }

  // Fetch movies related to the search term
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page from refreshing

    axios.get(`http://www.omdbapi.com/?apiKey=2cb2d6d8&s=${this.state.searchTerm}&type=movie`)
      .then(response => {
        this.setState({ movies: response.data['Search']});
        console.log(response.data['Search']);
        // To do: add functionality to make this redirect to home
      });

    e.target.reset();
      
  }

  render () {

    return (
      <Router>
        <div className="App">
          {/* Navbar, Header and Search form show on every page because they're outside Switch */}
          <Navbar />
          <Header />

          {/* Search form */}
          <div className="search">
            <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange} placeholder="Search for a movie..."></input>
              <button type="submit">Search</button>
            </form>
          </div>

          {/* IF movies EXISTS then map over movies and pass down props to MovieCard component, else null */}
          {/* {this.state.movies ? this.state.movies.map(movie => <MovieCard key={movie.imdbID} id={movie.imdbID} name={movie.Title} img={movie.Poster} year={movie.Year} />)
          : null} */}


          {/* Everything outside Switch shows on every page */}
          <Switch>
            <Route exact path='/' component={() => <Home movies={this.state.movies} />}/>
            <Route path='/random' component={Random} />

          {/* How can I go to a route called /movie on submit, and display Movies component (where mapping takes place) on that route?  */}
            <Route exact path='/movie' component={Movies} />
            <Route exact path='/movie/:id' component={MovieDetails} />
            <Route component={NotFoundPage} />
          </Switch>

        </div>
      </Router>
    )
  }
};

export default App;
