import { useState } from "react";
import { predictImage } from "../services/api";
import "./Predict.css";

function Predict() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  const handlePredict = async () => {
    if (!image) return alert("Please upload an image first");

    setLoading(true);
    try {
      const res = await predictImage(image);
      setResult(res);
    } catch (err) {
      alert("Prediction failed");
    }
    setLoading(false);
  };

  const mainPrediction = result?.top_predictions?.[0];

  return (
    <div className="predict-page">
      {/* ===== TITLE ===== */}
      <h1 className="predict-title">🚦 Road Sign Recognition</h1>

      {/* ===== UPLOAD CARD ===== */}
      <div className="upload-card">
        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          id="fileUpload"
          onChange={handleUpload}
          className="hidden-file-input"
        />

        {/* ACTION BUTTONS */}
        <div className="action-buttons">
          <label htmlFor="fileUpload" className="upload-button">
            📁 Upload Road Sign Image
          </label>

          <button
            onClick={handlePredict}
            disabled={loading}
            className={`predict-button ${loading ? "loading" : ""}`}
          >
            {loading ? "Analyzing..." : "Analyze Road Sign"}
          </button>
        </div>

        {/* FILE NAME */}
        {image && (
          <p className="file-name">
            Selected File: <span>{image.name}</span>
          </p>
        )}

        {/* IMAGE PREVIEW */}
        {preview && (
          <div className="preview-box">
            <img src={preview} alt="preview" className="preview-image" />
          </div>
        )}
      </div>

      {/* ===== MAIN RESULT ===== */}
      {mainPrediction && (
        <div className="main-result-card">
          <h2 className="main-result-title">🧠 Prediction Result</h2>

          <p className="main-label">
            <span>Detected Sign:</span> {mainPrediction.label}
          </p>

          <p className="main-confidence">
            Confidence: {mainPrediction.confidence.toFixed(2)}%
          </p>
        </div>
      )}

      {/* ===== TOP PREDICTIONS ===== */}
      {result?.top_predictions && (
        <div className="results-card">
          <h3 className="results-title">Top Alternative Predictions</h3>

          {result.top_predictions.map((item, index) => (
            <div key={index} className="prediction-row">
              <div className="prediction-header">
                <span className="prediction-label">{item.label}</span>
                <span className="prediction-percent">
                  {item.confidence.toFixed(2)}%
                </span>
              </div>

              <div className="confidence-bar-bg">
                <div
                  className={`confidence-bar ${
                    index === 0 ? "best" : ""
                  }`}
                  style={{ width: `${item.confidence}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Predict;
