import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';


const Events = () => {
   /* const APIKEY= process.env.REACT_APP_API_KEY; */
   const [events, setEvents] = useState([]);
   const [appMovie, setAppMovie] = useState([]);
   useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko-KR`).then(response => {
         setAppMovie(response.data.results)
         console.log(response.data.results)
      })
      
      
   },[]);
   
   
   return (
     <p>
          <div className='eventsWrap'>
             <h2>전체 이벤트</h2>
             <h3>영화</h3>
             <div className='eventlistWrap'>
                {
                   appMovie.slice(0,3).map((item)=>(
                      <div className="appEvent" key={item.id}>
                        <Link to={`/event/${item.id}`}>
                         <div className="eventlist">
                            <div className="eventImg">
                            
                               <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </div>
                            <div className="eventDate">
                               {item.release_date}
                            </div>
                         </div>
                         </Link>
                      </div>
                   ))
                }
             </div>
             <h3>시사회/무대인사</h3>
             <div className='eventlistWrap'>
                {
                   appMovie.slice(3,6).map((item)=>(
                      <div className="appEvent" key={item.id}>
                        <Link to={`/event/${item.id}`}>
                         <div className="eventlist">
                            <div className="eventImg">
                            
                               <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </div>
                            <div className="eventDate">
                               {item.release_date}
                            </div>
                         </div>
                         </Link>
                      </div>
                   ))
                }
             </div>
             <h3>HOT</h3>
             <div className='eventlistWrap'>
                {
                   appMovie.slice(6,9).map((item)=>(
                      <div className="appEvent" key={item.id}>
                        <Link to={`/event/${item.id}`}>
                         <div className="eventlist">
                            <div className="eventImg">
                            
                               <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </div>
                            <div className="eventDate">
                               {item.release_date}
                            </div>
                         </div>
                         </Link>
                      </div>
                   ))
                }
             </div>
             <br />
          </div>
          <div className='bannerWrap'><img src={process.env.PUBLIC_URL + '/lottecinema_event/banner01.png'} alt="" /></div>
     </p>
   );
};

export default Events;