import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import 'animate.css';
import Button from '../components/Button'
import Footer from '../components/Footer'
import Aside from '../components/Aside'

function HomeScreen(props) {
  const [timesViewed, setTimesviewed] = useState(0)

  useEffect(() => {
    setTimesviewed(timesViewed + 1)
  }, [])

  return (
    <div class="home-screen">
      <Aside />
      <main>
          <h1 class="animate__animated animate__rubberBand">Aidan Pettit's Website!</h1>

          <h2>Welcome to my website!</h2>

          <h3>About Me!</h3>
          <Link to="/about-me">Click here!</Link>

          <h3>My Projects:</h3>
          <Link to="/projects">Click here!</Link>

          <h3>Some cool stuff I made in React!</h3>
          <Link to="/cool-stuff">Click here!</Link>

          <hr/>

          <span>This website has been viewed </span>
          <span class="animate__animated animate__tada">{timesViewed}</span>
          <span> times!</span>

      </main>
    </div>
  );
}


export default HomeScreen;