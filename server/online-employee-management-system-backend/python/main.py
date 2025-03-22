from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
import os
import pandas as pd
import joblib
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Connect to MongoDB
mongo_uri = os.getenv("MONGO_DB_URI")
client = MongoClient(mongo_uri)
db = client["employeeverse"]
collection = db["employee"]

# Load the pre-trained ML model
model = joblib.load("best_employee_model.pkl")

# Define the features used in training
ml_features = [
    "performanceScore", "attendanceScore", "peerFeedbackScore", "managerRating", "overtimeScore",
    "innovationScore", "leadershipScore", "customerFeedbackScore", "taskCompletionEfficiency", "problemSolvingScore"
]

@app.get("/")
def read_root():
    return {"message": "hi"}

@app.get("/top-employees")
def get_top_employees():
    # Fetch employeeId, username, firstName, lastName, and ML features from MongoDB
    projection = {"employeeId": 1, "username": 1, "firstName": 1, "lastName": 1, 
                 **{feature: 1 for feature in ml_features}, "_id": 0}

    cursor = collection.find({}, projection)
    employees = pd.DataFrame(list(cursor))

    if employees.empty:
        return {"message": "No employees found"}

    # Extract ML features for prediction
    X = employees[ml_features]

    # Ensure all ML features exist in DataFrame
    X = X.reindex(columns=ml_features, fill_value=0)

    # Predict final scores using the loaded model
    employees["finalScore"] = model.predict(X)

    # Get top 10 employees
    top_employees = employees.nlargest(10, "finalScore")[["employeeId", "username", "firstName", "lastName"]]

    # Convert to JSON format and return
    return top_employees.to_dict(orient="records")