import { useState } from 'react';
import API from '../services/api';

function UploadCard({ setOriginalImage, setEnhancedImage }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);

    const url = URL.createObjectURL(file);
    setPreview(url);
    setOriginalImage(url);
  };

  const uploadImage = async () => {
    if (!image) return alert('Please select an image');

    const formData = new FormData();
    formData.append('file', image);

    setLoading(true);

    try {
      const response = await API.post('/enhance', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setEnhancedImage(response.data.image_url);
    } catch (err) {
      console.error(err);
      alert('Enhancement failed');
    }

    setLoading(false);
  };

  return (
    <div className="glass-card">
      <h2>✨ AI Enhancement Studio</h2>

      <div className="upload-zone">
        <div className="upload-icon-large">☁️</div>
        <h3>Drag & Drop Your Image</h3>
        <p>PNG • JPG • JPEG • High Resolution Recommended</p>

        <input type="file" accept="image/*" onChange={handleImage} />
      </div>

      {preview && (
        <div className="preview-box">
          <img src={preview} alt="Preview" />
        </div>
      )}

      {image && (
        <div className="file-meta">
          <span>📄 {image.name}</span>
          <span>📦 {(image.size / 1024).toFixed(1)} KB</span>
        </div>
      )}

      <button className="primary-action" onClick={uploadImage} disabled={loading}>
        {loading ? '🤖 AI Processing...' : '🚀 Enhance Image'}
      </button>

      {loading && (
        <div className="loader-section">
          <div className="loader"></div>
          <p>Analyzing → Restoring → Upscaling → Finalizing</p>
        </div>
      )}
    </div>
  );
}

export default UploadCard;