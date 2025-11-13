// import { useState } from "react";
// import { motion } from "framer-motion";
// import FingerprintBackground from "../components/FingerprintBackground";
// import FileUploader from "../components/FileUploader";
// import TaskToggle from "../components/TaskToggle";
// import ThresholdSlider from "../components/ThresholdSlider";
// import ResultCard from "../components/ResultCard";
// import { verifyPair } from "../services/api";

// export default function Home() {
//   const [task, setTask] = useState("signature");
//   const [refImg, setRefImg] = useState(null);
//   const [testImg, setTestImg] = useState(null);
//   const [threshold, setThreshold] = useState(0.5);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleVerify = async () => {
//     if (!refImg || !testImg) {
//       alert("Upload both images first!");
//       return;
//     }
//     setLoading(true);
//     try {
//       const res = await verifyPair(task, threshold, refImg, testImg);
//       setResult(res);
//     } catch (err) {
//       console.error(err);
//       alert("Verification failed. Try again.");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <FingerprintBackground />

//       {/* 🔥 Card with glowing border */}
//       <div className="relative z-10 bg-gray-800/90 p-8 rounded-lg shadow-lg w-[600px] glow-border">
//         <h1 className="text-2xl font-bold mb-6 text-center text-cyan-400 glitch">
//           ✍️ Hastakhar
//         </h1>

//         <TaskToggle task={task} setTask={setTask} />

//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <FileUploader label="Reference Image" onFileSelect={setRefImg} />
//           <FileUploader label="Image to Verify" onFileSelect={setTestImg} />
//         </div>

//         <ThresholdSlider threshold={threshold} setThreshold={setThreshold} />

//         {/* 🔥 Animated Verify Button with glow */}
//         <motion.button
//           onClick={handleVerify}
//           disabled={loading}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className={`w-full px-6 py-2 rounded font-semibold transition-colors glow-border 
//             ${loading ? "bg-gray-600 cursor-not-allowed" : "bg-cyan-500 hover:bg-cyan-600"} 
//             text-white`}
//         >
//           {loading ? (
//             <motion.span
//               className="flex items-center justify-center gap-2"
//               initial={{ opacity: 0.6 }}
//               animate={{ opacity: [0.6, 1, 0.6] }}
//               transition={{ repeat: Infinity, duration: 1.2 }}
//             >
//               <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//               Verifying...
//             </motion.span>
//           ) : (
//             "Verify"
//           )}
//         </motion.button>

//         {result && (
//           <motion.div
//             key={JSON.stringify(result)} // 👈 force remount when result changes
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <ResultCard result={result} />
//           </motion.div>
//         )}
//       </div>

//       {/* Extra CSS */}
//       <style jsx>{`
//         /* 🔥 Glow effect */
//         @keyframes pulse-glow {
//           0%, 100% {
//             box-shadow: 0 0 10px rgba(6, 182, 212, 0.7),
//               0 0 20px rgba(6, 182, 212, 0.5);
//           }
//           50% {
//             box-shadow: 0 0 20px rgba(6, 182, 212, 1),
//               0 0 40px rgba(6, 182, 212, 0.8);
//           }
//         }
//         .glow-border {
//           animation: pulse-glow 2s infinite;
//           border: 2px solid rgba(6, 182, 212, 0.9);
//         }

//         /* Glitch effect */
//         .glitch {
//           animation: glitch 1s infinite;
//         }
//         @keyframes glitch {
//           0% {
//             text-shadow: 2px 0 red, -2px 0 blue;
//           }
//           20% {
//             text-shadow: -2px 0 red, 2px 0 blue;
//           }
//           40% {
//             text-shadow: 2px 0 lime, -2px 0 yellow;
//           }
//           100% {
//             text-shadow: 0 0 transparent;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import FingerprintBackground from "../components/FingerprintBackground";
// import FileUploader from "../components/FileUploader";
// import TaskToggle from "../components/TaskToggle";
// import ThresholdSlider from "../components/ThresholdSlider";
// import ResultCard from "../components/ResultCard";
// import { verifyPair } from "../services/api";

// export default function Home() {
//   const [task, setTask] = useState("signature");
//   const [refImg, setRefImg] = useState(null);
//   const [testImg, setTestImg] = useState(null);
//   const [threshold, setThreshold] = useState(0.5);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleVerify = async () => {
//     if (!refImg || !testImg) {
//       alert("Upload both images first!");
//       return;
//     }
//     setLoading(true);
//     try {
//       const res = await verifyPair(task, threshold, refImg, testImg);
//       setResult(res);
//     } catch (err) {
//       console.error(err);
//       alert("Verification failed. Try again.");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <FingerprintBackground />

//       {/* 🔥 Card with glowing border */}
//       <div className="relative z-10 bg-gray-800/90 p-8 rounded-lg shadow-lg w-[600px] glow-border">
//         <h1 className="text-2xl font-bold mb-6 text-center text-cyan-400 glitch">
//           ✍️ Hastakhar
//         </h1>

//         <TaskToggle task={task} setTask={setTask} />

//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <FileUploader label="Reference Image" onFileSelect={setRefImg} />
//           <FileUploader label="Image to Verify" onFileSelect={setTestImg} />
//         </div>

//         <ThresholdSlider threshold={threshold} setThreshold={setThreshold} />

//         {/* 🔥 Animated Verify Button with glow */}
//         <motion.button
//           onClick={handleVerify}
//           disabled={loading}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className={`w-full px-6 py-2 rounded font-semibold transition-colors glow-border 
//             ${loading ? "bg-gray-600 cursor-not-allowed" : "bg-cyan-500 hover:bg-cyan-600"} 
//             text-white`}
//         >
//           {loading ? (
//             <motion.span
//               className="flex items-center justify-center gap-2"
//               initial={{ opacity: 0.6 }}
//               animate={{ opacity: [0.6, 1, 0.6] }}
//               transition={{ repeat: Infinity, duration: 1.2 }}
//             >
//               <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//               Verifying...
//             </motion.span>
//           ) : (
//             "Verify"
//           )}
//         </motion.button>

//         {/* ✅ AnimatePresence for smooth exit + remount */}
//         <AnimatePresence mode="wait">
//           {result && (
//             <motion.div
//               key={JSON.stringify(result)} // 👈 force remount when result changes
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//             >
//               <ResultCard result={result} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Extra CSS */}
//       <style jsx>{`
//         /* 🔥 Glow effect */
//         @keyframes pulse-glow {
//           0%, 100% {
//             box-shadow: 0 0 10px rgba(6, 182, 212, 0.7),
//               0 0 20px rgba(6, 182, 212, 0.5);
//           }
//           50% {
//             box-shadow: 0 0 20px rgba(6, 182, 212, 1),
//               0 0 40px rgba(6, 182, 212, 0.8);
//           }
//         }
//         .glow-border {
//           animation: pulse-glow 2s infinite;
//           border: 2px solid rgba(6, 182, 212, 0.9);
//         }

//         /* Glitch effect */
//         .glitch {
//           animation: glitch 1s infinite;
//         }
//         @keyframes glitch {
//           0% {
//             text-shadow: 2px 0 red, -2px 0 blue;
//           }
//           20% {
//             text-shadow: -2px 0 red, 2px 0 blue;
//           }
//           40% {
//             text-shadow: 2px 0 lime, -2px 0 yellow;
//           }
//           100% {
//             text-shadow: 0 0 transparent;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FileUploader from "../components/FileUploader";
import TaskToggle from "../components/TaskToggle";
import ThresholdSlider from "../components/ThresholdSlider";
import ResultCard from "../components/ResultCard";

import { verifyPair } from "../services/api";

export default function Home() {
  const [task, setTask] = useState("signature");
  const [refImg, setRefImg] = useState(null);
  const [testImg, setTestImg] = useState(null);
  const [threshold, setThreshold] = useState(1.0);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!refImg || !testImg) {
      alert("Please upload both images.");
      return;
    }

    setLoading(true);
    try {
      const response = await verifyPair(task, threshold, refImg, testImg);
      setResult(response);
    } catch (err) {
      console.error(err);
      alert("Verification failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 flex items-start justify-center bg-[#050b16]">
      
      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          w-full max-w-4xl rounded-2xl p-10
          bg-[#0e1624]/80 border border-white/10
          shadow-xl shadow-black/40 backdrop-blur-xl
        "
      >
        {/* TITLE */}
        <h1 className="text-center text-3xl font-bold tracking-wide mb-8 
          bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          AI-Powered Signature & Handwriting Verification
        </h1>

        {/* TOGGLE */}
        <TaskToggle task={task} setTask={setTask} />

        {/* UPLOAD BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <FileUploader label="Reference Image" onFileSelect={setRefImg} />
          <FileUploader label="Image to Verify" onFileSelect={setTestImg} />
        </div>

        {/* SLIDER */}
        <div className="mt-6">
          <ThresholdSlider threshold={threshold} setThreshold={setThreshold} />
        </div>

        {/* VERIFY BUTTON */}
        <motion.button
          onClick={handleVerify}
          disabled={loading}
          whileHover={{ scale: loading ? 1 : 1.03 }}
          whileTap={{ scale: loading ? 1 : 0.97 }}
          className={`
            w-full py-3 mt-4 rounded-xl font-semibold text-white text-lg
            shadow-lg transition-all
            ${loading 
              ? "bg-gray-600 cursor-not-allowed" 
              : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/40"}
          `}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-3">
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Verifying…
            </div>
          ) : (
            "Verify Signature"
          )}
        </motion.button>

        {/* RESULT */}
        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              key={JSON.stringify(result)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <ResultCard result={result} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}