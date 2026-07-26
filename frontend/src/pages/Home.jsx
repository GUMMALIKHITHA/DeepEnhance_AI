import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge">🚀 AI Powered Image Restoration</div>

          <h1>DeepEnhance AI</h1>

          <h2>
            Intelligent Image Super Resolution & Restoration Platform
          </h2>

          <p>
            Transform blurry, low-resolution images into high-quality visuals
            using advanced Deep Learning and AI Super Resolution technology.
          </p>

          <div className="hero-buttons">
            <Link to="/enhance" className="primary-btn">
              🚀 Start Enhancing
            </Link>

            <Link to="/technology" className="secondary-btn">
              ⚙ View Technology
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <h3>🧠 AI Model</h3>
          <p>Real-ESRGAN</p>
        </div>

        <div className="stat-card">
          <h3>⚡ Backend</h3>
          <p>FastAPI</p>
        </div>

        <div className="stat-card">
          <h3>⚛ Frontend</h3>
          <p>React + Vite</p>
        </div>

        <div className="stat-card">
          <h3>🖼 Upscaling</h3>
          <p>4× Resolution</p>
        </div>
      </section>
    </div>
  );
}

export default Home;