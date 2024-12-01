const int sensor_pin = 4;	/* Soil moisture sensor O/P pin */

void setup() {
  Serial.begin(9600);	/* baud rate for serial communication */
}

void loop() {
  float moisture_percentage;  
  int sensor_analog;
  sensor_analog = analogRead(sensor_pin);

  //Serial.println(sensor_analog);
  moisture_percentage = ( 100 - ( (sensor_analog/4095.00) * 100 ) );
  Serial.print("Moisture Percentage = ");
  Serial.print(moisture_percentage);
  Serial.print("%\n\n");
  delay(1000);
}