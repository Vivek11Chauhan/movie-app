import React from "react";
import { data } from '../data';
import Navbar from './Navbar'
import Moviecard from './Moviecard'
import movies from "../reducers";
import {addMovies} from '../action';

class App extends React.Component {
  componentDidMount (){
    const{ store } = this.props;
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    });
    //make an api call to get the movies 
    //dispatch an action 
      store.dispatch (addMovies(data));

      console.log('STATE', this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const{ favourite } = this.props.store.getState();

    const index = favourite.indexOf(movie);

    if(index !== -1)
    {
      return true;
    }
    return false;
  }


  render (){
  const {list} = this.props.store.getState();
  console.log('RENDER', this.props.store.getState());
      return (
        <div className="App">
          <Navbar />
          <div className="main">
            <div className="tabs">
              <div className="tab">Movies</div>
              <div className="tab">favourites</div>
            </div>

            <div className="list">
              {list.map((movie, index) => (
                <Moviecard movie = {movie} key ={'movies-${index}'} dispatch={this.props.store.dispatch} />
              ))}


            </div>
          </div>
        </div>
      );
    }            
  }

export default App;
