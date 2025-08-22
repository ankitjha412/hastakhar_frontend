// import { useState } from "react";
// import FingerprintBackground from "./components/FingerprintBackground";
// import FileUploader from "./components/FileUploader";
// import TaskToggle from "./components/TaskToggle";
// import ThresholdSlider from "./components/ThresholdSlider";
// import ResultCard from "./components/ResultCard";
// import { verifyPair } from "./services/api";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";


// function App() {
//   const [task, setTask] = useState("signature");
//   const [refImg, setRefImg] = useState(null);
//   const [testImg, setTestImg] = useState(null);
//   const [threshold, setThreshold] = useState(0.5);
//   const [result, setResult] = useState(null);

//   const handleVerify = async () => {
//     if (!refImg || !testImg) {
//       alert("Upload both images first!");
//       return;
//     }
//     const res = await verifyPair(task, threshold, refImg, testImg);
//     setResult(res);
//   };

//   return (
    
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <FingerprintBackground />

//       <div className="relative z-10 bg-gray-800/90 p-8 rounded-lg shadow-lg w-[600px]">
//         <h1 className="text-2xl font-bold mb-6 text-center">
//           ✍️Hastakhar
//         </h1>

//         <TaskToggle task={task} setTask={setTask} />

//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <FileUploader label="Reference Image" onFileSelect={setRefImg} />
//           <FileUploader label="Image to Verify" onFileSelect={setTestImg} />
//         </div>

//         <ThresholdSlider threshold={threshold} setThreshold={setThreshold} />

//         <button
//           onClick={handleVerify}
//           className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold"
//         >
//           Verify
//         </button>

//         {result && <ResultCard result={result} />}
//       </div>
       
//     </div>
    
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
