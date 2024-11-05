import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css';
import profile_pic from './profile_pic_pixel.png';

const Home: React.FC = () => {
  return (
    <div className="home">
    <section className="header-section">
      <div className="header-content">
        <h1>Welcome to My Portfolio</h1>
        <div className="blog-link">
          <Link to="/blog" className="blog-button">Visit My Blog</Link>
        </div>
      </div>
      <img src={profile_pic} alt="Profile" className="profile-picture" />
    </section>
      <section className="about">
        <div className="about-text">
          <h2>About Me</h2>
          <p>Hello! I’m [Your Name], a software engineer passionate about creating efficient and innovative solutions.</p>
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
    </section>

      <section className="projects">
        <h2>Recent Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>A brief description of Project 1.</p>
          <p><strong>What's Cool:</strong> Highlight what makes this project interesting or unique.</p>
          <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>A brief description of Project 2.</p>
          <p><strong>What's Cool:</strong> Highlight what makes this project interesting or unique.</p>
          <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </section>

      <section className="hobbies">
        <h2>Hobbies & Passions</h2>
        <ul>
          <li>Photography</li>
          <li>Traveling</li>
          <li>Digital Art</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
