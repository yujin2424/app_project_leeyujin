import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Movies from './routes/Movies';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.scss';
import Users from './routes/Users';
import User from './routes/User';
import Events from './routes/Events';
import Event from './routes/Event';
import About1 from './routes/About1';


function App() {
   
   return (
      <div className="App">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/movies" element={<Movies />} />
            <Route path="/about/:id" element={<About />} />
            <Route path="/about" element={<About1 />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event/:id" element={<Event />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<User />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
