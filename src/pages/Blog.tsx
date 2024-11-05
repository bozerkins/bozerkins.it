// src/pages/Blog.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog: React.FC = () => {
  return (
    <div className="blog">
      <div className="blog-header">
        <h1>Blog</h1>
        <Link to="/" className="blog-button">Back to Homepage</Link>
      </div>

      <p>Welcome to my blog! Check out my articles below.</p>
      
      <div className="blog-list">
        <div className="blog-item">
          <Link to="/blog/why-software-engineers-feel-invisible" className="blog-link">
            Why Software Engineers often feel invisible
          </Link>
          <span className="blog-date">Published on: November 4, 2024</span>
        </div>
        {/* Add more links and dates as you create new articles */}
      </div>

      {/* Message about upcoming articles */}
      <p className="coming-soon">More articles coming!</p>
    </div>
  );
};

export default Blog;
