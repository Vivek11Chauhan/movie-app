// {
//     type: 'ADD_MOVIES';
//     movies: [m, m1, m2] 
// }
// {
//     type : 'DECREASE_COUNT'
// }

//action type variables
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';


//action creator
export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies       
    }
}

export function addfavourite (movie) {
    return {
        type: ADD_TO_FAVOURITES,
        movie       
    }
} 

export function removefromfavourite (movie) {
    return {
        type: REMOVE_FROM_FAVOURITE,
        movie       
    };
} 

export function setshowfavourites (movie) {
    return {
        type: SET_SHOW_FAVOURITES,
        movie       
    };
} 