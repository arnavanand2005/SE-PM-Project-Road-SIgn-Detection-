import "./Dataset.css";
import { FaLinkedin } from "react-icons/fa";

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
    <div className="dataset-page">

      {/* ================= DEVELOPERS ================= */}
      <section className="developers-section">
        <h1 className="dataset-title">👨‍💻 Meet The Developers</h1>

        <div className="developers-grid">

          {/* DEV 1 */}
          <div className="developer-card">
            <img src="/arnav.png" alt="Arnav Anand" className="developer-image" />
            <h3 className="developer-name">Arnav Anand</h3>
            <a
              href="https://www.linkedin.com/in/arnav-anand-056710315/"
              target="_blank"
              rel="noreferrer"
              className="linkedin-link"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* DEV 2 */}
          <div className="developer-card">
            <img src="/ansh.png" alt="Ansh Mathur" className="developer-image" />
            <h3 className="developer-name">Ansh Mathur</h3>
            <a
              href="https://www.linkedin.com/in/ansh-mathur-b09ba5337/"
              target="_blank"
              rel="noreferrer"
              className="linkedin-link"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* DEV 3 */}
          <div className="developer-card">
            <img src="/himesh.png" alt="Himesh Sahoo" className="developer-image" />
            <h3 className="developer-name">Himesh Sahoo</h3>
            <a
              href="https://www.linkedin.com/in/himesh-sahoo-1234abcd/"
              target="_blank"
              rel="noreferrer"
              className="linkedin-link"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>
      </section>

      {/* ================= DATASET INFO ================= */}
      <h1 className="dataset-title">📊 Dataset & Model Information</h1>

      <section className="dataset-section dataset-info-card">
        <h2 className="section-heading">Dataset Overview</h2>

        <p className="dataset-text">
          This project uses the <b>German Traffic Sign Recognition Benchmark (GTSRB)</b>,
          a real-world dataset widely adopted in autonomous driving research.
        </p>

        <a
          href="https://www.kaggle.com/datasets/meowmeowmeowmeowmeow/gtsrb-german-traffic-sign"
          target="_blank"
          rel="noreferrer"
          className="dataset-link"
        >
          👉 Kaggle Dataset Link
        </a>

        {/* FEATURES */}
        <div className="dataset-subcard">
          <h3 className="sub-heading">Dataset Features</h3>
          <ul className="feature-list">
            <li>43 traffic sign classes</li>
            <li>50,000+ labeled images</li>
            <li>RGB images resized to 64 × 64</li>
            <li>Real-world road conditions</li>
            <li>Lighting & viewpoint variations</li>
          </ul>
        </div>

        {/* REPORT */}
        <div className="dataset-subcard">
          <h3 className="sub-heading">Classification Report</h3>
          <p className="dataset-text subtle">
            Precision, Recall and F1-score for all 43 classes,
            showing strong and consistent model performance.
          </p>

          <img
            src="/report.png"
            alt="Classification Report"
            className="report-image"
          />
        </div>
      </section>

      {/* ================= CLASS LIST ================= */}
      <section className="dataset-section">
        <h2 className="section-heading">Traffic Sign Classes</h2>

        <div className="class-grid">
          {classNames.map((name, index) => (
            <div key={index} className="class-card">
              <span className="class-index">{index}</span>
              <span className="class-name">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRAINING CURVES ================= */}
      <section className="dataset-section curves-section">
        <h2 className="curves-heading">Training Curves</h2>

        <div className="curve-grid-wrapper">
          <div className="curve-grid">
            <div className="curve-card">
              <h4 className="curve-title">Training Accuracy</h4>
              <img src="/model_accuracy.png" className="curve-image" />
            </div>

            <div className="curve-card">
              <h4 className="curve-title">Training Loss</h4>
              <img src="/ model_loss.png" className="curve-image" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONFUSION MATRIX ================= */}
      <section className="dataset-section confusion-section">
        <h2 className="curves-heading">Confusion Matrix</h2>

        <div className="confusion-wrapper">
          <img
            src="/confusion_matrix.png"
            alt="Confusion Matrix"
            className="confusion-image"
          />
        </div>
      </section>
    </div>
  );
}

export default Dataset;
