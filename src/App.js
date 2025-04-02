import React from "react";
import "./Resume.css"; // Import the CSS file

function App() {
  return (
    <div className="resume">
      <div className="resume-header">
        <h1>Lakshmi Prasanna Dara</h1>
        <p>📞 +91 8555947924 | 📍 Hyderabad, India | ✉️ prasannadara17@gmail.com</p>
        <p>
          🔗 
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
          <a href="https://www.hackerrank.com/your-profile" target="_blank" rel="noopener noreferrer"> HackerRank</a> | 
          <a href="https://www.codechef.com/users/your-profile" target="_blank" rel="noopener noreferrer"> CodeChef</a> | 
          <a href="https://leetcode.com/your-profile" target="_blank" rel="noopener noreferrer"> LeetCode</a> | 
          <a href="https://github.com/Prasannadara17" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </p>
      </div>

      <div className="resume-section">
        <h2>Education</h2>
        <p><strong>Bachelor of Computer Science and Engineering</strong></p>
        <p>Vasavi College of Engineering | CGPA: 8.63 | 2022 - 2026</p>
      </div>

      <div className="resume-section">
        <h2>Skills</h2>
        <p><strong>Programming Languages:</strong> C, C++, Java, JavaScript, HTML5, CSS, Python, AI (Beginner)</p>
        <p><strong>Databases:</strong> MongoDB, SQL (Intermediate)</p>
        <p><strong>Frameworks:</strong> React.js, Express.js, Node.js, Bootstrap</p>
        <p><strong>Tools:</strong> Git, GitHub, VS Code, Linux</p>
        <p><strong>Soft Skills:</strong> Collaboration, Communication, Teamwork, Leadership</p>
      </div>

      <div className="resume-section">
        <h2>Projects</h2>

        <div className="project">
          <h3>
            Portfolio (<a href="https://github.com/Prasannadara17/portfolio.git" target="_blank" rel="noopener noreferrer">GitHub</a>)
          </h3>
          <ul>
            <li>Developed a professional portfolio using HTML & CSS</li>
            <li>Showcases key projects and social links</li>
          </ul>
        </div>

        <div className="project">
          <h3>
            Weather App (<a href="https://github.com/Prasannadara17/Weather-app.git" target="_blank" rel="noopener noreferrer">GitHub</a>)
          </h3>
          <ul>
            <li>Built a real-time weather application using JavaScript, HTML5, CSS</li>
            <li>Fetched live weather data via API and updated UI dynamically</li>
          </ul>
        </div>

        <div className="project">
          <h3>
            Events Aggregator (<a href="https://github.com/ajayarukonda524/Events-Aggregator.git" target="_blank" rel="noopener noreferrer">GitHub</a>)
          </h3>
          <ul>
            <li>Developed a platform to manage college events</li>
            <li>Features search, filtering, authentication, and notifications</li>
            <li>Tech stack: React.js, Node.js, Express.js, MongoDB</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2>Certifications</h2>
        <ul>
          <li>
            NPTEL - The Joy of Computing Using Python (<a href="https://drive.google.com/file/d/18T_CFRJcsE9t_xC6nj_aeeZGpz8xo6hO/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Certificate</a>)
          </li>
          <li>
            CISCO - Programming Essentials in C++ (<a href="https://drive.google.com/file/d/1XfttN_1PG-gm-qvPDmEaD45PQivyzulR/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Certificate</a>)
          </li>
          <li>
            Infosys Springboard - Java Foundation Certificate (<a href="https://drive.google.com/file/d/1VvFs3mdSs4PoPiHZdh4ZrxIoOy0xdAmC/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Certificate</a>)
          </li>
          <li>
            Infosys Springboard - AI Primer Certification (<a href="https://drive.google.com/file/d/1uc8wv31r3hruwYv0uPS6mq0pEImvTdad/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Certificate</a>)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
