import React, { useEffect, useState } from 'react';
import './Movies.scss';
import Movie from './../components/Movie';
import MovieForm from './../components/MovieForm';

const Movies = () => {
   const [movies, setMovies]=useState([]);

   const removeMovie=(id)=>{
      setMovies(movies.filter(movie=>{
         return movie.id !==id
      }))
   }

   useEffect(()=>{
      console.log('render')
   });

   const renderMovies=movies.length ? movies.map((movie)=>{
      return (
         <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />
      )
   }) : (<div className='strongText'>보고싶은 영화가 없습니다</div>)

   const addMovie=(movie) =>{
      setMovies([
         ...movies,
         movie
      ])
   }
   
   return (
      <div className='movies'>
         <h1>Movie List</h1>
         <MovieForm addMovie={addMovie} />
         {renderMovies}
      </div>
   );
};

export default Movies;