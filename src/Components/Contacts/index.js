import React, { useState } from 'react'
import './index.css'

function Contacts() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="contact-page">

      {/* Header */}
      <div className="contact-header">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-sub">Feel free to reach out anytime 👋</p>
      </div>

      <div className="contact-wrapper">

        {/* Left — Info */}
        <div className="contact-info">

          <div className="info-card">
            <span className="info-icon">📧</span>
            <div>
              <p className="info-label">Email</p>
              <a className="email" href="mailto:bashashaik8066@gmail.com">
                bashashaik8066@gmail.com
              </a>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">📞</span>
            <div>
              <p className="info-label">Phone</p>
              <a className="num" href="tel:+918106008066">
                +91 8106008066
              </a>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">📍</span>
            <div>
              <p className="info-label">Location</p>
              <p className="info-value">Hyderabad, India</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="#" className="social-btn">🐙 GitHub</a>
            <a href="#" className="social-btn">💼 LinkedIn</a>
            <a href="#" className="social-btn">🐦 Twitter</a>
          </div>

        </div>

        {/* Right — Form */}
        <form className="contact-form" onSubmit={handleSubmit}>

          {sent && (
            <div className="success-msg">
              ✅ Message sent successfully!
            </div>
          )}

          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="e.g. john@gmail.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-send">
            🚀 Send Message
          </button>

        </form>
      </div>
    </div>
  )
}

export default Contacts