import React, { useState, useEffect } from 'react';
import './App.scss';
import thx from './thx.mp3'
import Numbers from './Numbers'

function App() {
  const [loading, setLoading] = useState(false);
  const [loadNumbers, setLoadNumbers] = useState(false);

  const audio = new Audio(thx)

  useEffect(() => {
    if (loading === true) {
      setLoadNumbers(true)
    }

    const intervalId = setInterval(() => setLoading(false), 14500)
    
    return () => {
      clearInterval(intervalId)
    }
  }, [loading])


  function generateNumbers() {
    audio.play()
    setLoadNumbers(false)
    setLoading(true)
  }

  return (
    <div className='container'>
      <div><h1 className='header'>THE ALGORITHM</h1></div>
      <p className='disclaimer'>*guaranteed odds of 1 in 302,575,350</p>
      <div className="App">
        {
          !loading && (
            <h3 className='generate-button' onClick={() => generateNumbers()}>{"Generate Numbers"}</h3>
          )
        }
        {
          loading && (
            <div>
              <div className="atom-loader">
                <div className="atom-inner atom-one"></div>
                <div className="atom-inner atom-two"></div>
                <div className="atom-inner atom-three"></div>
                <div className="atom-inner atom-four"></div>
              </div>  
            </div>          
          )
        }
      </div>
      <div className='numbers-container'>
          { loadNumbers && (
            <Numbers />
          )}
      </div>
    </div>
  );
}

export default App;
