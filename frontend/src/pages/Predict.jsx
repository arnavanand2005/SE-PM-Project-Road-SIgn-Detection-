import { useState } from "react";
import { predictImage } from "../services/api";

function Predict() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
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

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🚦 Road Sign Detection Dashboard</h1>

      <input type="file" accept="image/*" onChange={handleUpload} />

      {preview && (
        <div>
          <img
            src={preview}
            alt="preview"
            style={{ width: "200px", marginTop: "20px" }}
          />
        </div>
      )}

      <br />

      <button onClick={handlePredict} disabled={loading}>
        {loading ? "Predicting..." : "Predict"}
      </button>

      {result?.top_predictions && (
  <div style={{ marginTop: "30px" }}>
    <h3>Top-5 Predictions</h3>

    {result.top_predictions.map((item, index) => (
      <div key={index} style={{ marginBottom: "8px" }}>
        <span>{item.label}</span>
        <div
          style={{
            height: "10px",
            width: `${item.confidence}%`,
            backgroundColor: index === 0 ? "#4CAF50" : "#2196F3",
            marginTop: "4px"
          }}
        ></div>
        <small>{item.confidence.toFixed(2)}%</small>
      </div>
    ))}
  </div>
)}

    </div>
  );
}

export default Predict;
