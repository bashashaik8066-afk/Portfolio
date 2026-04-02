import React from 'react'
import './index.css'

const skills = [
  { icon: "🌐", name: "HTML",       level: 95, color: "#e34c26" },
  { icon: "🎨", name: "CSS",        level: 90, color: "#264de4" },
  { icon: "🟨", name: "JavaScript", level: 88, color: "#f7df1e" },
  { icon: "⚛️", name: "React JS",   level: 85, color: "#61dafb" },
  { icon: "🟢", name: "Node JS",    level: 80, color: "#68a063" },
  { icon: "🚂", name: "Express JS", level: 78, color: "#fff" },
  { icon: "🍃", name: "MongoDB",    level: 75, color: "#4db33d" },
]

function Skills() {
  return (
    <div className="skills-page">

      {/* Header */}
      <div className="skills-header">
        <h1 className="stack">MERN Stack Developer</h1>
        <p className="skills-sub">Technologies I work with professionally</p>
      </div>

      {/* Skill Cards */}
      <div className="skills-grid">
        {skills.map(({ icon, name, level, color }) => (
          <div className="skill-card" key={name}>
            <div className="skill-top">
              <span className="skill-icon">{icon}</span>
              <span className="skill-name">{name}</span>
              <span className="skill-percent" style={{ color }}>{level}%</span>
            </div>
            <div className="skill-bar-bg">
              <div
                className="skill-bar-fill"
                style={{ width: `${level}%`, background: color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="skills-tags">
        <h3>Also familiar with</h3>
        <div className="tags-row">
          {["Git", "GitHub", "Postman", "VS Code", "REST API", "Tailwind"].map(tag => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Skills