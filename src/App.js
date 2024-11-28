import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Delay the redirect for 5 seconds
    const timer = setTimeout(() => {
      window.location.href = 'https://www.online-banleong.com/';
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redirecting...</h1>
      <p>You will be redirected in a few seconds. If not, <a href="https://www.online-banleong.com/">click here</a>.</p>
    </div>
  );
}

export default App;
