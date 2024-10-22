import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const About = () => {
   /* const APIKEY= process.env.REACT_APP_API_KEY; */
   const {id} = useParams();
   const [loading, setLoading]=useState(true);
   const [appM, setAppM]=useState(null);
    
   useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/546c72b99cf64514c2c03c7ef473011b&language=ko-KR`).then(res => {
            console.log(res.data); 
         setAppM(res.data);
         setLoading(false);
        })
    }, [id]);

   return (
      <div className='aboutWrap'>
         <h2 className="aboutTitle"> Detail</h2>
         {
            loading ? (<div className='aboutload'>Loading...</div>) : (
               <div className="aboutUser">
                  <div className="box">
                     <img src={`https://image.tmdb.org/t/p/original/${appM.poster_path}`} alt={appM.title} className='aboutImg' />
                     <div className="overAndaver">
                        <div className="overview"><span className='bold'>줄거리 :</span> {appM.overview}</div>
                        <div className="tagline"><span className="bold">태그 : </span>{appM.tagline}</div>
                        <div className="voteAverage"><span className='bold'>평점 : </span>{appM.vote_average} </div>
                        <div className="date"><span className="bold">날짜 : </span>{appM.release_date}</div>
                     </div>
                  </div>
               </div>
            )
         }
      </div>
   );
};

export default About;