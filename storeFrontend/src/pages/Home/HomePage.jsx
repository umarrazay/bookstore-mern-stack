// HomePage.js

import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className="container-fluid  header-canvas">
      <div className="row">
        <div className="col">
            <div className="header-content  text-center text-white">
              <h1>Welcome to Our Bookstore</h1>
              <p>
                Explore a vast collection of books on various genres. Find your
                next favorite read!
              </p>
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Browse Books
              </a>
          </div>
        </div>
      </div>
    </div>
     
    </>
  );
};

export default HomePage;
