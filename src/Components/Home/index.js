import React from 'react'
import './index.css'

const Home = () => {
  return (
    <div className="home-page">

      {/* Left — Text */}
      <div className="home-text">
        <p className="home-greeting">👋 Hello, I'm</p>
        <h1 className="name">Basha</h1>
        <h2 className="about">MERN Stack Developer</h2>
        <p className="home-desc">
          I build fast, responsive, and modern web applications
          using MongoDB, Express, React & Node.js.
        </p>

        {/* Buttons */}
        <div className="home-btns">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact"  className="btn-outline">Contact Me</a>
        </div>

        {/* Tech Tags */}
        <div className="tech-tags">
          {["MongoDB", "Express", "React", "Node.js"].map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>

      {/* Right — Image */}
      <div className="home-img-wrap">
        <div className="img-glow" />
        <img
          className="img-1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uuA-8GqMP8WGIYrAEhtRAVrdXxWF0xvqlQ&s"
          alt="Basha"
        />
      </div>

    </div>
  )
}

export default Home