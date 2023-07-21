import React from 'react';

const Home = () => (
  <>
    <div className="page-hero">
      <img src="https://source.unsplash.com/800x400/?teamwork" alt="team work" />
    </div>
    <div className="checkin">
      <button className="time-btn" type="button"> Check In</button>
      <button className="time-btn" type="button"> Lunch </button>
      <button className="time-btn" type="button"> Checkout </button>
    </div>
  </>
);

export default Home;
