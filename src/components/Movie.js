import React from 'react';

const Movie = ({movie, removeMovie}) => {
    return (
    <div className="movie">
        <div className='titleAndyear'>
                <div className="movie-title">{movie.title}</div>
                <div className="movie-year">{movie.year}</div> 
            </div> 
            <div className="deleteBtn"> <button onClick={()=>removeMovie(movie.id)}>삭제</button></div>
    </div>
        
    );
};

export default Movie;