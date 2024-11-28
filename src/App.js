import React, { useState, useEffect } from 'react';

function App() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // Set the state to indicate that the redirect is happening
    setIsRedirecting(true);

    // Delay the redirect for 5 seconds (5000 milliseconds)
    const timer = setTimeout(() => {
      window.location.href = 'https://online-banfook.com/';
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {isRedirecting ? (
        <>
          <h1>Redirecting...</h1>
          <p>You will be redirected in a few seconds. If not, <a href="https://online-banfook.com/">click here</a>.</p>
        </>
      ) : (
        <h1>Preparing to Redirect...</h1>
      )}
    </div>
  );
}

export default App;

