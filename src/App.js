// App.js

import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Create a new promise
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data loaded successfully!');
      }, 2000);
    });

    // Use the promise
    promise.then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
