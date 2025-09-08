import React from 'react'
import { Container,  Button, Card, Row, Col } from 'react-bootstrap';
import '../App.css';

const Home = () => {
  return (
    <div className="page-container">
    
      <main className="content">
        <h1>Home Page</h1>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} YourSite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home