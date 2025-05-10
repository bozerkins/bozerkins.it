import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="header-section">
        <div className="header-content">
          <h1>About me</h1>
          <div className="about-text">
            <p>Hello! I'm Bogdans, and I'm a software enthusiast. </p>
            <p>I started my journey in software development back in the 6th grade and took my first steps into professional development in grade 11. It's been a fun and rewarding ride so far!</p>
            <p>With over a decade of industry experience, I have a pasion for crafting quality software and designing efficient architectures. I believe in the importance of readable codebases and the power of data, analytics, logs, and metrics to drive decisions.</p>
            <p><strong>My moto is:</strong> doing less with more.</p>
            <div className="social-links">
              <a href="https://github.com/bozerkins" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/bozerkins/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <img src="./profile_pic_pixel.png" alt="Profile" className="profile-picture" />
      </section>
      <section className="projects">
        <h2>Recent OSS</h2>
        <div className="project">
          <h3>Explore Tables</h3>
          <p>React library to render pivot tables for in-house data analysis and ad-hoc reports.</p>
          <p><strong>What's Cool:</strong> Allows overriding table components for interactive feature implementation, like sorting or dynamic rendering. </p>
          <a href="https://bozerkins.github.io/explore-tables/#/interactive" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project">
          <h3>Argo Watcher</h3>
          <p>Deployment management system for ArgoCD image updater. </p>
          <p><strong>What's Cool:</strong> Written in Go, this creates a unique bridge between ArgoCD GitOps approach and CI/CD deployment automation.</p>
          <a href="https://argo-watcher.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project">
          <h3>Terraform dkron provider</h3>
          <p>Provider to provision dkron jobs with Terraform. Especially useful for CI/CD automation of the setup.</p>
          <p><strong>What's Cool:</strong> This is the recommended dkron terraform plugin for management jobs through automation.</p>
          <a href="https://github.com/bozerkins/terraform-provider-dkron" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project">
          <h3>Clickhouse Client</h3>
          <p>A client to call ClickHouse database written in PHP.</p>
          <p><strong>What's Cool:</strong> One of the first PHP clients for ClickHouse.</p>
          <a href="https://github.com/bozerkins/clickhouse-client" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;