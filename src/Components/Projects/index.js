import React from 'react'
import './index.css'

const projects = [
  {
    id: 1,
    title: "Authroziation Cart",
    desc: "Full stack e-commerce platform built with MERN stack. Features product listing, cart, login/logout, and search functionality.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    icon: "🛒",
    color: "#c4f135",
    live: "#",
    code: "#"
  },
  {
    id: 2,
    title: "Weather App",
    desc: "Real-time weather application using OpenWeatherMap API. Search any city and get live temperature, humidity, and wind data.",
    tags: ["React", "REST API", "CSS"],
    icon: "🌤️",
    color: "#61dafb",
    live: "#",
    code: "#"
  },
  {
    id: 3,
    title: "Emoji Game",
    desc: "Classic Hangman word guessing game built with vanilla JavaScript. Features random words, lives counter, and win/lose states.",
    tags: ["JavaScript", "HTML", "CSS"],
    icon: "🎮",
    color: "#f7df1e",
    live: "#",
    code: "#"
  },
  {
    id: 4,
    title: "App Store",
    desc: "A modern app store UI with app listings, categories, ratings, and search. Fully responsive with smooth animations.",
    tags: ["React", "CSS", "API"],
    icon: "📱",
    color: "#a78bfa",
    live: "#",
    code: "#"
  }
]

function Projects() {
  return (
    <div className="projects-page">

      {/* Header */}
      <div className="projects-header">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-sub">Things I've built so far</p>
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {projects.map(({ id, title, desc, tags, icon, color, live, code }) => (
          <div className="project-card" key={id}>

            {/* Card Top */}
            <div className="card-top" style={{ borderColor: color }}>
              <span className="project-icon">{icon}</span>
              <span className="project-num" style={{ color }}>0{id}</span>
            </div>

            {/* Card Body */}
            <div className="card-body">
              <h3 className="project-title" style={{ color }}>{title}</h3>
              <p className="project-desc">{desc}</p>

              {/* Tags */}
              <div className="project-tags">
                {tags.map(tag => (
                  <span className="p-tag" key={tag} style={{ borderColor: color, color }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer */}
            <div className="card-footer">
              <a href={live} className="btn-live">🚀 Live Demo</a>
              <a href={code} className="btn-code">💻 Source Code</a>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Projects