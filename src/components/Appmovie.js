import React from 'react';
import {Link} from 'react-router-dom';

const Appmovie = ({id, title, poster_path, release_date}) => {
    return (
        <div key={id}>
        <Link to={`/about/${id}`}>
           <h2>{title}</h2>
           <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
           <div className="date">{release_date}</div>
        </Link>
      </div>
    );
};

export default Appmovie;