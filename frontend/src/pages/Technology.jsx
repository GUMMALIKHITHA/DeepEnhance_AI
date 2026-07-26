function Technology() {
  const stack = [
    ['Frontend', 'React.js + Vite'],
    ['Backend', 'FastAPI'],
    ['Language', 'Python'],
    ['AI Architecture', 'Real-ESRGAN'],
    ['Image Processing', 'OpenCV + Pillow'],
    ['API Style', 'REST APIs'],
  ];

  return (
    <div className="page">
      <div className="section-header">
        <h1>Technology Stack</h1>
        <p>Built with modern web and AI technologies.</p>
      </div>

      <div className="tech-grid">
        {stack.map(([label, value]) => (
          <div className="tech-card" key={label}>
            <h3>{label}</h3>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technology;