import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');

  const fetchText = async () => {
    try {
      const response = await axios.get('/getText');
      setText(response.data.text);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/changeText', { newText: 'Look at me now boa' });
      fetchText(); // Fetch the updated text after successfully changing it
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchText(); // Fetch the initial text on component mount
  }, []);

  return (
    <div>
      <h1>{text}</h1>
      <form onSubmit={handleFormSubmit}>
        <button type="submit">Change Text</button>
      </form>
    </div>
  );
}

export default App;