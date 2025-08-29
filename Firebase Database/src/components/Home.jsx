import React, { useEffect } from 'react';
import '../App.css'

const Home = () => {

  useEffect(() => {
    // Disable scroll when Home is mounted
    document.body.style.overflow = 'hidden';

    // Re-enable scroll when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="page-container">
      <main className="content">
        <h1>Welcome to the Home Page</h1>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} YourSite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
