import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Users = () => {
   const [users, setUsers]=useState([]);
   useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
         //console.log(response.data);
         setUsers(response.data)
      })
   },[])
   return (
      <div className='usersWrap'>
         <h1>Users</h1>
         <div className="userCard">
            {
               users.map((user) => (
                  <div className="card" key={user.id}>
                     <div className="cardBady">
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   );
};

export default Users;