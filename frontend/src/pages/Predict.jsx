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

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Prediction Result</h3>
          <p><b>Class:</b> {result.label}</p>
          <p><b>Confidence:</b> {result.confidence}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
