// import Image from 'next/image';
// import Link from 'next/link';

"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// export default function Home() {
//   return (
//     <main className="bg-green-50 min-h-screen p-8">
//       {/* Hero Section */}
//       <section className="text-center py-16 text-green-800 flex items-center justify-center space-x-8">
//         {/* Hero Image */}
//         <div className="w-48 h-48 relative">
//           <Image
//             src="/images/meter.png" // Path to the image in the public/images folder
//             alt="FitPlant Logo"
//             layout="fill" // This will make the image fill the container (you can adjust size)
//             objectFit="contain" // Ensures the image maintains aspect ratio
//           />
//         </div>
//         {/* Hero Text */}
//         <div>
//           <h1 className="text-4xl font-bold text-green-900">FitPlant</h1>
//           <p className="mt-4 text-xl">
//             Join us in making plant care effortless—keeping your plants happy has never been easier.
//           </p>
//           <p className="mt-2 text-lg italic">
//             Your Plant’s Personal Health Tracker
//           </p>
//         </div>
//       </section>

//       {/* About Section */}
//       <div className="bg-white shadow-md rounded-lg p-8 mt-8">
//         <h2 className="text-3xl font-semibold text-green-700">About FitPlant</h2>
//         <p className="mt-4 text-lg text-green-700">
//           FitPlant simplifies plant care by providing plant and soil health analytics along with essential tips, so your plants can thrive with minimal effort.
//         </p>
//       </div>

//       {/* Problem and Solution Sections Side by Side */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
//         {/* Problem Section */}
//         <div className="bg-white shadow-md rounded-lg p-8">
//           <h2 className="text-2xl font-semibold text-green-700">The Problem</h2>
//           <ul className="list-disc ml-6 mt-4 space-y-2 text-green-700">
//             <li>Overwatering & Underwatering: Many struggle to gauge proper watering.</li>
//             <li>Lack of Plant Care Knowledge: Beginners often lack essential soil and light knowledge.</li>
//             <li>Busy Lifestyles: Consistent plant care is challenging for many.</li>
//             <li>High Cost of Care Products: Frequent purchases can be expensive.</li>
//           </ul>
//         </div>

//         {/* Solution Section */}
//         <div className="bg-white shadow-md rounded-lg p-8">
//           <h2 className="text-2xl font-semibold text-green-800">Our Solution</h2>
//           <ul className="list-disc ml-6 mt-4 space-y-2 text-green-800">
//             <li>Real-Time Analytics: Provides personalized data for optimal plant care.</li>
//             <li>User-Friendly Interface: Engaging and accessible plant care features.</li>
//             <li>Comprehensive Insights: All necessary tips and insights in one platform.</li>
//             <li>Notifications: Watering, light adjustments, and more to keep plants thriving.</li>
//           </ul>
//         </div>
//       </div>

//       {/* Comparison Table */}
//       <div className="bg-white shadow-md rounded-lg p-8 mt-8">
//         <h2 className="text-2xl font-semibold text-green-700 mb-4">Why FitPlant is Better</h2>
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-green-100">
//               <th className="p-4 text-green-800 font-semibold">Existing Solutions</th>
//               <th className="p-4 text-green-800 font-semibold">FitPlant Solution</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-t">
//               <td className="p-4 text-green-700">
//                 <strong>Basic Plant Care Apps:</strong> Provide generic tips without personalized data, often leading to trial and error.
//               </td>
//               <td className="p-4 text-green-700">
//                 <strong>Real-Time Analytics:</strong> Delivers personalized soil and plant health data to ensure optimal care with minimal effort.
//               </td>
//             </tr>
//             <tr className="border-t">
//               <td className="p-4 text-green-700">
//                 <strong>Soil Test Kits:</strong> Require manual testing, which can be cumbersome and inconvenient for busy users.
//               </td>
//               <td className="p-4 text-green-700">
//                 <strong>User-Friendly App:</strong> Combines intuitive design with interactive features that make plant care engaging and accessible.
//               </td>
//             </tr>
//             <tr className="border-t">
//               <td className="p-4 text-green-700">
//                 <strong>Gardening Guides:</strong> Offer theoretical knowledge but lack real-time feedback and actionable insights.
//               </td>
//               <td className="p-4 text-green-700">
//                 <strong>Comprehensive Plant Health Resource:</strong> Integrates all necessary insights and tips in one platform, simplifying the plant care process.
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       {/* Demo and Future Plans Buttons */}
//       <div className="text-center mt-8 space-x-4">
//         <Link href="/demo">
//             <button className="bg-white text-green-800 py-2 px-6 border-2 border-green-800 rounded-lg hover:bg-green-800 hover:text-white transition duration-300">
//               Demo the Product
//             </button>
//         </Link>
//         <button className="bg-white text-green-800 py-2 px-6 border-2 border-green-800 rounded-lg hover:bg-green-800 hover:text-white transition duration-300">
//           Future Plans
//         </button>
//       </div>

//       {/* Footer */}
//       <footer className="text-center text-green-600 text-sm mt-16">
//         <p>Thank you for joining us on this journey!</p>
//         <p>Team FitPlant</p>
//         <p>Vishesh Anand & Alba Samsami</p>
//       </footer>
//     </main>
//   );
// }

export default function Home() {
  const router = useRouter();

  const handleDemoClick = () => {
    router.push('/demo');
  };

  return (
    <main className="bg-green-50 min-h-screen p-8">
      {/* Hero Section */}
      <section className="text-center py-16 text-green-800 flex items-center justify-center space-x-8">
        {/* Hero Image */}
        <div className="w-48 h-48 relative">
          <Image
            src="/images/meter.png" // Path to the image in the public/images folder
            alt="FitPlant Logo"
            layout="fill" // Makes the image fill the container
            objectFit="contain" // Ensures the image maintains aspect ratio
          />
        </div>
        {/* Hero Text */}
        <div>
          <h1 className="text-4xl font-bold text-green-900">FitPlant</h1>
          <p className="mt-4 text-xl">
            Join us in making plant care effortless—keeping your plants happy has never been easier.
          </p>
          <p className="mt-2 text-lg italic">
            Your Plant’s Personal Health Tracker
          </p>
        </div>
      </section>

      {/* About Section */}
      <div className="bg-white shadow-md rounded-lg p-8 mt-8">
        <h2 className="text-3xl font-semibold text-green-700">About FitPlant</h2>
        <p className="mt-4 text-lg text-green-700">
          FitPlant simplifies plant care by providing plant and soil health analytics along with essential tips, so your plants can thrive with minimal effort.
        </p>
      </div>

      {/* Problem and Solution Sections Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Problem Section */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-green-700">The Problem</h2>
          <ul className="list-disc ml-6 mt-4 space-y-2 text-green-700">
            <li>Overwatering & Underwatering: Many struggle to gauge proper watering.</li>
            <li>Lack of Plant Care Knowledge: Beginners often lack essential soil and light knowledge.</li>
            <li>Busy Lifestyles: Consistent plant care is challenging for many.</li>
            <li>High Cost of Care Products: Frequent purchases can be expensive.</li>
          </ul>
        </div>

        {/* Solution Section */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-green-800">Our Solution</h2>
          <ul className="list-disc ml-6 mt-4 space-y-2 text-green-800">
            <li>Real-Time Analytics: Provides personalized data for optimal plant care.</li>
            <li>User-Friendly Interface: Engaging and accessible plant care features.</li>
            <li>Comprehensive Insights: All necessary tips and insights in one platform.</li>
            <li>Notifications: Watering, light adjustments, and more to keep plants thriving.</li>
          </ul>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white shadow-md rounded-lg p-8 mt-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Why FitPlant is Better</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-green-100">
              <th className="p-4 text-green-800 font-semibold">Existing Solutions</th>
              <th className="p-4 text-green-800 font-semibold">FitPlant Solution</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-4 text-green-700">
                <strong>Basic Plant Care Apps:</strong> Provide generic tips without personalized data, often leading to trial and error.
              </td>
              <td className="p-4 text-green-700">
                <strong>Real-Time Analytics:</strong> Delivers personalized soil and plant health data to ensure optimal care with minimal effort.
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-4 text-green-700">
                <strong>Soil Test Kits:</strong> Require manual testing, which can be cumbersome and inconvenient for busy users.
              </td>
              <td className="p-4 text-green-700">
                <strong>User-Friendly App:</strong> Combines intuitive design with interactive features that make plant care engaging and accessible.
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-4 text-green-700">
                <strong>Gardening Guides:</strong> Offer theoretical knowledge but lack real-time feedback and actionable insights.
              </td>
              <td className="p-4 text-green-700">
                <strong>Comprehensive Plant Health Resource:</strong> Integrates all necessary insights and tips in one platform, simplifying the plant care process.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Demo and Future Plans Buttons */}
      <div className="text-center mt-8 space-x-4">
        <button 
          onClick={handleDemoClick} 
          className="bg-white text-green-800 py-2 px-6 border-2 border-green-800 rounded-lg hover:bg-green-800 hover:text-white transition duration-300">
          Demo the Product
        </button>
        <button className="bg-white text-green-800 py-2 px-6 border-2 border-green-800 rounded-lg hover:bg-green-800 hover:text-white transition duration-300">
          Buy the Meter
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center text-green-600 text-sm mt-16">
        <p>Thank you for joining us on this journey!</p>
        <p>Team FitPlant</p>
        <p>Vishesh Anand & Alba Samsami</p>
      </footer>
    </main>
  );
}

