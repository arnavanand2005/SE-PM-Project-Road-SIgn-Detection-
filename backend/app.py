from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import tensorflow as tf
import numpy as np
import cv2
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Read frontend URL from environment (prod)
PROD_FRONTEND = os.getenv("FRONTEND_URL")

# Allow dev + prod safely
ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:3001",
]

if PROD_FRONTEND:
    ALLOWED_ORIGINS.append(PROD_FRONTEND)

# CORS configuration
CORS(
    app,
    resources={
        r"/predict": {
            "origins": ALLOWED_ORIGINS
        }
    }
)

# Load model
model = tf.keras.models.load_model("road_sign_model.keras")
IMG_SIZE = 64

class_names = {
    0: "Speed limit (20km/h)",
    1: "Speed limit (30km/h)",
    2: "Speed limit (50km/h)",
    3: "Speed limit (60km/h)",
    4: "Speed limit (70km/h)",
    5: "Speed limit (80km/h)",
    6: "End of speed limit (80km/h)",
    7: "Speed limit (100km/h)",
    8: "Speed limit (120km/h)",
    9: "No passing",
    10: "No passing > 3.5 tons",
    11: "Right-of-way at the next intersection",
    12: "Priority road",
    13: "Yield",
    14: "Stop",
    15: "No vehicles",
    16: "Vehicles over 3.5 tons prohibited",
    17: "No entry",
    18: "General caution",
    19: "Dangerous curve to the left",
    20: "Dangerous curve to the right",
    21: "Double curve",
    22: "Bumpy road",
    23: "Slippery road",
    24: "Road narrows on the right",
    25: "Road work",
    26: "Traffic signals",
    27: "Pedestrians",
    28: "Children crossing",
    29: "Bicycles crossing",
    30: "Beware of ice/snow",
    31: "Wild animals crossing",
    32: "End of all speed and passing limits",
    33: "Turn right ahead",
    34: "Turn left ahead",
    35: "Ahead only",
    36: "Go straight or right",
    37: "Go straight or left",
    38: "Keep right",
    39: "Keep left",
    40: "Roundabout mandatory",
    41: "End of no passing",
    42: "End of no passing by vehicles over 3.5 tons"
}

@app.route("/")
def home():
    return "🚦 Welcome to the Road Sign Recognition API"

@app.route("/predict", methods=["POST", "OPTIONS"])
def predict():

    # Handle preflight request
    if request.method == "OPTIONS":
        return jsonify({}), 200

    if "image" not in request.files:
        return jsonify({"error": "No image provided"}), 400

    file = request.files["image"]
    img = np.frombuffer(file.read(), np.uint8)
    img = cv2.imdecode(img, cv2.IMREAD_COLOR)

    if img is None:
        return jsonify({"error": "Invalid image"}), 400

    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
    img = img / 255.0
    img = np.expand_dims(img, axis=0)

    prediction = model.predict(img)[0]
    top_indices = np.argsort(prediction)[-5:][::-1]

    top_predictions = []
    for idx in top_indices:
        top_predictions.append({
            "class_id": int(idx),
            "label": class_names[idx],
            "confidence": round(float(prediction[idx] * 100), 2)
        })

    return jsonify({
        "label": top_predictions[0]["label"],
        "confidence": top_predictions[0]["confidence"],
        "top_predictions": top_predictions
    })


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
