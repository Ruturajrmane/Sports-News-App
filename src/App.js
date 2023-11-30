// App.js

import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import Footer from './Components/Footer';

const App = () => {
  const [category, setCategory] = useState('cricket');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    console.log("Change button pressed");
    console.log(typeof(category));
    console.log(category);
  };

  return (
    <>
      <NavBar />
      <div className="d-flex justify-content-center mt-5">
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input
            onChange={() => handleCategoryChange('cricket')}
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            checked={category === 'cricket'}
          />
          <label className="btn btn-outline-danger" htmlFor="btnradio1" style={{ width: '150px', color: 'black' }}>
            Cricket
          </label>

          <input
            onChange={() => handleCategoryChange('football')}
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
            checked={category === 'football'}
          />
          <label className="btn btn-outline-danger" htmlFor="btnradio2" style={{ width: '150px', color: 'black' }}>
            Football
          </label>

          <input
            onChange={() => handleCategoryChange('tennis')}
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            autoComplete="off"
            checked={category === 'tennis'}
          />
          <label className="btn btn-outline-danger" htmlFor="btnradio3" style={{ width: '150px', color: 'black' }}>
            Tennis
          </label>
        </div>
      </div>
      <News category={category} />
      <Footer />
    </>
  );
};

export default App;

