import React from "react";
import {addfavourite, ADD_TO_FAVOURITE, removefromfavourite} from '../action';

class Moviecard extends React.Component {


    handlefavourtieClick = () => {
        const{movie} = this.props;
        this.props.dispatch(addfavourite(movie))
    }

    handleUnfavourtieClick = () => {
        const{movie} = this.props;
        this.props.dispatch(removefromfavourite(movie))
    }

    render () {
        const {movie, isfavourite} =this.props;
        return (
            <div className="movie-card">
                <div className="left"> 
                <img alt = "movie-poster" src ={movie.Poster}/>
            </div>
            <div className="right">
                <div className="title">{movie.Title}</div>
                <div className="Plot">{movie.Plot}</div>
                <div className="footer"> 
                <div className="rating">{movie.imbdRating}</div>  
                {
                    isfavourite
                    ? <button className="unfavourite-btn" onClick ={this.handleUnfavourtieClick}>UnFavourite</button>
                    : <button className="favourite-btn" onClick ={this.handlefavourtieClick}>Favourite</button>
                }
            </div>
          </div>
        </div>
       );
    }
}

export default Moviecard;


 