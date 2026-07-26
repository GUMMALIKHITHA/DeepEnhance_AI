function Features() {
  const features = [
    ['🧠 AI Super Resolution', 'Restore image clarity using deep learning.'],
    ['✨ Noise Reduction', 'Remove compression artifacts and grain.'],
    ['🖼 4× Upscaling', 'Increase image resolution while preserving detail.'],
    ['⚡ Fast Processing', 'Optimized backend for quick enhancement.'],
    ['📥 One-Click Download', 'Download enhanced images instantly.'],
    ['📱 Responsive Design', 'Works beautifully on desktop and mobile.'],
  ];

  return (
    <div className="page">
      <div className="section-header">
        <h1>Platform Features</h1>
        <p>Everything included in DeepEnhance AI.</p>
      </div>

      <div className="features-grid">
        {features.map(([title, desc]) => (
          <div className="feature-card" key={title}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;