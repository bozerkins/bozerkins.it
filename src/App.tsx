// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Blog from './pages/Blog.tsx'; 
import Article_01 from './pages/articles/Article_01.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} /> Blog page
        <Route path="/blog/why-software-engineers-feel-invisible" element={<Article_01 />} /> Article 01
      </Routes>
    </Router>
  );
};

export default App;
