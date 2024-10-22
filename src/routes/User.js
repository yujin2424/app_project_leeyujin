import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { FaUserTag, FaAddressCard } from "react-icons/fa";
import { MdOutlineSmartphone, MdEmail } from "react-icons/md";

const User = () => {
   const {id}=useParams();
   const [user, setUser]=useState(null);
   const [loading, setLoading]=useState(true);
   useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users/'+id).then(res=>{
         //console.log(res)
         setUser(res.data);
         setLoading(false);
      })
   }, [id]);


   return (
      <div className='userWrap'>
         <h1>User</h1>
         <div className="detail">
            {
               loading ? (<div className='loading'>로딩중...</div>) : (<div className='userDetail'>
                  <p><span><FaUserTag /></span>{user.name}</p>
                  <p><span><MdOutlineSmartphone /></span>{user.phone}</p>
                  <p><span><MdEmail /></span>{user.email}</p>
                  <p><span><FaAddressCard /></span>{user.address.street}</p>
               </div>)
            }
         </div>
      </div>
   );
};

export default User;