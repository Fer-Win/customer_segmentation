from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin  
import pandas as pd
import joblib


model = joblib.load('best_model.pkl')
scaler = joblib.load('scaler.pkl')  

app = Flask(__name__)


CORS(app, origins=['http://localhost:3000'])

@app.route('/predict', methods=['POST'])
@cross_origin()  
def predict_cluster():
 
    try:
        data = request.get_json()
    except Exception as e:
        return jsonify({'error': f"Error parsing request data: {str(e)}"}), 400

    if not data:
        return jsonify({'error': 'No data provided in request'}), 400

    new_data = pd.DataFrame([data])

    new_data_scaled = scaler.transform(new_data)
    cluster = model.predict(new_data_scaled)
    return jsonify({'cluster': int(cluster[0])})

if __name__ == '__main__':
    app.run()
