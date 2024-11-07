"use client";
import React from 'react';

import { useState } from "react";
///////////Working Code ///////////////
// export default function Demo() {
//   return (
//     <main className="bg-green-50 min-h-screen p-8">
//       <h1 className="text-4xl font-bold text-center text-green-800">Demo </h1>
//       <p className="text-center mt-4 text-lg text-green-700">
//         Welcome to the demo of FitPlant! Here, we’ll showcase how our product can help you take care of your plants.
//       </p>
//       {/* Plant Image in the center */}
//       <div className="flex justify-center items-center mt-8">
//         <img src="images/plant.png" alt="Plant" className="max-w-xs rounded-md shadow-lg" />
//       </div>
//       {/* Additional demo content goes here */}
//       {/* Buttons Section */}
//       <div className="flex justify-center mt-8 space-x-6">
//         {/* Moisture Card */}
//         <div className="w-48 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative">
//           <img src="images/moisture.png" alt="Moisture" className="w-12 h-12 mb-4 mx-auto" />
//           <h3 className="text-xl text-center text-green-700">Moisture</h3>
//           <p className="text-center text-green-600">65% </p>
//           <div className="absolute top-0 right-0 mt-2 mr-2">
//             <div className="tooltip tooltip-right" data-tip="Ideal moisture level for a healthy plant.">
//               <span className="text-green-500">ℹ️</span>
//             </div>
//           </div>
//         </div>

//         {/* pH Card */}
//         <div className="w-48 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative">
//           <img src="images/ph.png" alt="pH" className="w-12 h-12 mb-4 mx-auto" />
//           <h3 className="text-xl text-center text-green-700">pH Level</h3>
//           <p className="text-center text-green-600">6.5 </p>
//           <div className="absolute top-0 right-0 mt-2 mr-2">
//             <div className="tooltip tooltip-right" data-tip="Ideal pH range for most plants is 6-7.">
//               <span className="text-green-500">ℹ️</span>
//             </div>
//           </div>
//         </div>

//         {/* Light Card */}
//         <div className="w-48 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative">
//           <img src="images/light.png" alt="Light" className="w-12 h-12 mb-4 mx-auto" />
//           <h3 className="text-xl text-center text-green-700">Light</h3>
//           <p className="text-center text-green-600">200-500 Lux</p>
//           <div className="absolute top-0 right-0 mt-2 mr-2">
//             <div className="tooltip tooltip-right" data-tip="Ensure your plant gets sufficient indirect sunlight.">
//               <span className="text-green-500">ℹ️</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
///////////////////

//////Trial Code for Form//////////
export default function Demo() {
  // States to handle user input and sensor data
  const [plantName, setPlantName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Hardcoded values for the sensors (change them to test)
  const moisture = 60; // Below ideal
  const ph = 5.5; // Below ideal
  const light = 1500; // Below ideal

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Show cards after submission
  };

  return (
    <main className="bg-green-50 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-green-800">Demo</h1>
      <p className="text-center mt-4 text-lg text-green-700">
        Welcome to the demo of FitPlant! Here, we’ll showcase how our product can help you take care of your plants.
      </p>
      {/* Plant Image in the center */}
      <div className="flex justify-center items-center mt-8">
        <img src="images/plant.png" alt="Plant" className="max-w-xs rounded-md shadow-lg" />
      </div>

      {/* Plant Name Input Form */}
      {!isSubmitted ? (
        <div className="flex justify-center mt-8">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <label htmlFor="plantName" className="block text-lg text-green-700">
              Enter the name of your plant:
            </label>
            <input
              type="text"
              id="plantName"
              value={plantName}
              onChange={(e) => setPlantName(e.target.value)}
              placeholder="e.g., Fiddle Leaf Fig"
              className="w-full mt-2 p-3 border rounded-md text-gray-700"
            />
            <button
              type="submit"
              className="mt-4 w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <>
          {/* Display the plant name */}
          <h2 className="text-center text-2xl mt-8 text-green-800">
            {plantName ? `${plantName}'s Plant Health` : 'Plant Health'}
          </h2>

          {/* Cards Section */}
          <div className="flex justify-center mt-8 space-x-6">
            {/* Moisture Card */}
            <div className="w-48 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative">
              <img src="images/moisture.png" alt="Moisture" className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl text-center text-green-700">Moisture</h3>
              <p className="text-center text-green-600">{moisture}% - Ideal Moisture</p>
              {moisture < 65 && (
                <div className="mt-4 text-red-500 text-center">
                  <span className="font-bold">Alert:</span> Moisture is low! Increase watering.
                </div>
              )}
            </div>

            {/* pH Card */}
            <div className="w-48 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative">
              <img src="images/ph.png" alt="pH" className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl text-center text-green-700">pH Level</h3>
              <p className="text-center text-green-600">{ph} - Neutral pH</p>
              {ph < 6.5 && (
                <div className="mt-4 text-red-500 text-center">
                  <span className="font-bold">Alert:</span> pH is low! Consider adjusting the pH level.
                </div>
              )}
            </div>

            {/* Light Card */}
            <div className="w-48 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative">
              <img src="images/light.png" alt="Light" className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl text-center text-green-700">Light</h3>
              <p className="text-center text-green-600">{light} Lux - Ideal Light</p>
              {(light < 1000 || light > 5000) && (
                <div className="mt-4 text-red-500 text-center">
                  <span className="font-bold">Alert:</span> Light levels are outside the ideal range! Adjust lighting.
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </main>
  );
}



