# app.py
from flask import Flask, jsonify
from flask_cors import CORS
import serial

app = Flask(__name__)
CORS(app)

def read_serial():
    # Change COM port and baudrate as needed
    try:
        ser = serial.Serial('COM18', 9600, timeout=1)
        data = ser.readline().decode('utf-8', errors='ignore').strip()
        print(f"Read data: {data}")  # Log the data read from the serial port
        return data
    except serial.SerialException as e:
        print(f"Error reading from serial port: {e}")
        return "Error"

@app.route('/get_sensor_data')
def get_sensor_data():
    try:
        # Simulate fetching sensor data (e.g., moisture, ph, light)
        moisture = read_serial()  # Modify as per your sensor setup
        ph = read_serial()  # Modify as per your sensor setup
        light = read_serial()  # Modify as per your sensor setup
        
        # Create a response object with the data
        sensor_data = {
            'moisture': moisture,
            'ph': 5.5,
            'light': 1500
        }
        print(sensor_data)
        
        return jsonify(sensor_data)

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
