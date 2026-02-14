const classNames = [
  "Speed limit (20km/h)",
  "Speed limit (30km/h)",
  "Speed limit (50km/h)",
  "Speed limit (60km/h)",
  "Speed limit (70km/h)",
  "Speed limit (80km/h)",
  "End of speed limit (80km/h)",
  "Speed limit (100km/h)",
  "Speed limit (120km/h)",
  "No passing",
  "No passing for vehicles over 3.5 tons",
  "Right-of-way at the next intersection",
  "Priority road",
  "Yield",
  "Stop",
  "No vehicles",
  "Vehicles over 3.5 tons prohibited",
  "No entry",
  "General caution",
  "Dangerous curve to the left",
  "Dangerous curve to the right",
  "Double curve",
  "Bumpy road",
  "Slippery road",
  "Road narrows on the right",
  "Road work",
  "Traffic signals",
  "Pedestrians",
  "Children crossing",
  "Bicycles crossing",
  "Beware of ice/snow",
  "Wild animals crossing",
  "End of all speed and passing limits",
  "Turn right ahead",
  "Turn left ahead",
  "Ahead only",
  "Go straight or right",
  "Go straight or left",
  "Keep right",
  "Keep left",
  "Roundabout mandatory",
  "End of no passing",
  "End of no passing by vehicles over 3.5 tons"
];

function Dataset() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>📊 Dataset & Model Information</h1>

      {/* Dataset Info */}
      <h2>Dataset Used</h2>
      <p>
        This project uses the <b>German Traffic Sign Recognition Benchmark (GTSRB)</b>,
        a widely used dataset for traffic sign classification.
      </p>

      <a
        href="https://www.kaggle.com/datasets/meowmeowmeowmeowmeow/gtsrb-german-traffic-sign"
        target="_blank"
        rel="noreferrer"
        style={{ color: "blue" }}
      >
        👉 Kaggle Dataset Link
      </a>

      {/* Dataset Features */}
      <h2 style={{ marginTop: "30px" }}>Dataset Features</h2>
      <ul>
        <li>43 different traffic sign classes</li>
        <li>50,000+ labeled images</li>
        <li>RGB images resized to 64 × 64</li>
        <li>Captured in real-world driving conditions</li>
        <li>Includes varying lighting, angles, and weather</li>
      </ul>

      {/* Class Names */}
      <h2 style={{ marginTop: "30px" }}>Traffic Sign Classes</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        {classNames.map((name, index) => (
          <div
            key={index}
            style={{
              padding: "8px",
              background: "#f3f3f3",
              borderRadius: "6px",
            }}
          >
            <b>{index}:</b> {name}
          </div>
        ))}
      </div>

      {/* Model Performance */}
      <h2 style={{ marginTop: "30px" }}>Model Performance</h2>
      <ul>
        <li><b>Accuracy:</b> 99.5%</li>
        <li><b>Loss:</b> 0.01</li>
        <li><b>Precision:</b> ~99%</li>
        <li><b>Recall:</b> ~99%</li>
        <li><b>F1 Score:</b> ~99%</li>
      </ul>

      {/* Training Curves */}
      <h2 style={{ marginTop: "30px" }}>Training Curves</h2>

      <div style={{ marginTop: "20px" }}>
        <h4>Accuracy Curve</h4>
        <img
          src="/model_accuracy.png"
          alt="Model Accuracy Curve"
          style={{ width: "500px", marginBottom: "30px" }}
        />

        <h4>Loss Curve</h4>
        <img
          src="/model_loss.png"
          alt="Model Loss Curve"
          style={{ width: "500px" }}
        />
      </div>
    </div>
  );
}

export default Dataset;
