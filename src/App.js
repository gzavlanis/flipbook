import React from 'react';
import MyBook from "./flipbook";
import './App_styles.css';

function App() {
  return (
      <React.Fragment>
          <div className='header'>This is my first flip book!</div>
          <body>
              <MyBook/>
          </body>
      </React.Fragment>
  );
}
export default App;
