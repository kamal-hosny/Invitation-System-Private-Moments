import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
    <div>
    Home
    </div>
      <div>
        <Link to="system/administrator/login">Login</Link>
      </div>

    </>
  );
}

export default Home;
