import { useState } from 'react';
import UploadCard from '../components/UploadCard';
import ResultCard from '../components/ResultCard';

function Enhance() {
  const [originalImage, setOriginalImage] = useState('');
  const [enhancedImage, setEnhancedImage] = useState('');

  return (
    <div className="page">
      <div className="enhance-layout">
        <UploadCard
          setOriginalImage={setOriginalImage}
          setEnhancedImage={setEnhancedImage}
        />

        <ResultCard
          originalImage={originalImage}
          enhancedImage={enhancedImage}
        />
      </div>
    </div>
  );
}

export default Enhance;