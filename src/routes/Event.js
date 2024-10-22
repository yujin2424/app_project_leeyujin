import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Event = () => {
   /* const APIKEY=process.env.REACT_APP_API_KEY; */
   const {id}=useParams();
   const [eventMovie, setEventMovie]=useState(null);
   const [loading, setLoading]=useState(true);
   useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko-KR`).then(response => {
         setEventMovie(response.data)
         console.log(response.data)
         setLoading(false)
      })
   }, [id]);
   return (
      <div className='eventWrap'>
         {
            loading?(<div>로딩중</div>):(<div className='addEvent'>
               <div className="box">
                  <div className="eventImg">            
                     <img src={`https://image.tmdb.org/t/p/original/${eventMovie.backdrop_path}`} alt={eventMovie.title} />
                  </div>
                  <p>제목 : {eventMovie.title}</p>
                  <p>뷰 : {eventMovie.overview}</p>
                  <p>평점 : {eventMovie.vote_average}</p>
               </div>
            </div>)
         }
      </div>
   );
};

export default Event;