function About() {
  return (
    <div className="page">
      <div className="about-card">
        <h1>About DeepEnhance AI</h1>

        <p>
          DeepEnhance AI is an intelligent image restoration platform developed
          to enhance low-quality, blurry, and low-resolution images using
          Artificial Intelligence and Deep Learning techniques.
        </p>

        <h2>Project Objectives</h2>
        <ul>
          <li>Improve image clarity and sharpness</li>
          <li>Provide a simple drag-and-drop enhancement experience</li>
          <li>Demonstrate end-to-end AI + Full Stack integration</li>
          <li>Create a deployable SaaS-style web application</li>
        </ul>

        <h2>Future Enhancements</h2>
        <ul>
          <li>Real-ESRGAN runtime integration</li>
          <li>GFPGAN face restoration</li>
          <li>Batch image processing</li>
          <li>Cloud deployment and user accounts</li>
        </ul>

        <div className="developer-box">
          <h3>Developer</h3>
          <p>Likhitha Gumma</p>
          <p>B.Tech CSE (Information Technology) | Malla Reddy Engineering College</p>
        </div>
      </div>
    </div>
  );
}

export default About;