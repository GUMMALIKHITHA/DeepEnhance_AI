function ResultCard({ originalImage, enhancedImage }) {
  const downloadImage = async () => {
    if (!enhancedImage) return;

    const response = await fetch(enhancedImage);
    const blob = await response.blob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'DeepEnhance_AI_Enhanced_Image.jpg';
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="glass-card">
      <div className="result-header">
        <h2>🖼 Before / After Comparison</h2>
        <span className="status-badge">
          {enhancedImage ? 'Completed' : 'Waiting'}
        </span>
      </div>

      <div className="compare-grid">
        <div className="compare-panel">
          <h3>Original</h3>
          <div className="image-frame">
            {originalImage ? (
              <img src={originalImage} alt="Original" />
            ) : (
              <div className="empty-state">Upload an image</div>
            )}
          </div>
        </div>

        <div className="compare-panel">
          <h3>Enhanced</h3>
          <div className="image-frame">
            {enhancedImage ? (
              <img src={enhancedImage} alt="Enhanced" />
            ) : (
              <div className="empty-state">AI result will appear here</div>
            )}
          </div>
        </div>
      </div>

      {enhancedImage && (
        <button className="download-btn" onClick={downloadImage}>
          ⬇ Download Enhanced Image
        </button>
      )}

      <div className="stats-row">
        <div className="mini-stat">
          <span>🧠</span>
          <div>
            <strong>Model</strong>
            <p>Real-ESRGAN</p>
          </div>
        </div>

        <div className="mini-stat">
          <span>⚡</span>
          <div>
            <strong>Scale</strong>
            <p>4× Upscaling</p>
          </div>
        </div>

        <div className="mini-stat">
          <span>✅</span>
          <div>
            <strong>Status</strong>
            <p>Ready</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;