// pages/Home.js
import React from 'react';
import SignList from '../components/SignList';

const Home = () => {
  const signs = ['Metal Signs', 'Wooden Signs', 'Neon Signs', 'Custom Signs'];

  return (
    <div>
      <h1>Welcome to Gleamax Tech</h1>
      <SignList signs={signs} />
    </div>
  );
};

export default Home;
