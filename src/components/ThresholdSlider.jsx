// export default function ThresholdSlider({ threshold, setThreshold }) {
//   // Decide color based on threshold range
//   const getColor = () => {
//     if (threshold < 0.7) return "text-red-400";     // strict
//     if (threshold < 1.4) return "text-yellow-400";  // balanced
//     return "text-green-400";                        // lenient
//   };

//   return (
//     <div className="mb-6">
//       {/* Label with value */}
//       <div className="flex justify-between items-center mb-2">
//         <label className="text-gray-300 font-semibold">
//           Decision Threshold
//         </label>
//         <span className={`font-bold ${getColor()}`}>
//           {threshold.toFixed(2)}
//         </span>
//       </div>

//       {/* Slider */}
//       <input
//         type="range"
//         min="0"
//         max="2"
//         step="0.01"
//         value={threshold}
//         onChange={(e) => setThreshold(parseFloat(e.target.value))}
//         className="w-full h-2 rounded-lg appearance-none cursor-pointer
//           bg-gradient-to-r from-red-500 via-yellow-400 to-green-400
//           accent-transparent"
//       />

//       {/* Hint */}
//       <p className="text-xs text-gray-400 mt-1">
//         Low = strict matching, High = lenient matching
//       </p>
//     </div>
//   );
// }



import { motion } from "framer-motion";

export default function ThresholdSlider({ threshold, setThreshold }) {
  const percent = Math.round((threshold / 2) * 100);

  // Decide color of the % text
  const getColor = () => {
    if (percent < 40) return "text-red-400";
    if (percent < 75) return "text-yellow-400";
    return "text-green-400";
  };

  return (
    <div className="mb-8 mt-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-gray-200 font-semibold tracking-wide">
          Decision Threshold
        </h3>

        {/* Animated Percentage */}
        <motion.span
          key={percent}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
className={`font-bold text-lg ${getColor()}`}
        >
          {percent}%
        </motion.span>
      </div>

      {/* Slider */}
      <div className="relative">
        <input
          type="range"
          min="0"
          max="2"
          step="0.01"
          value={threshold}
          onChange={(e) => setThreshold(parseFloat(e.target.value))}
          className="w-full h-3 appearance-none rounded-lg cursor-pointer
          bg-gray-800/60 shadow-inner 
          accent-transparent
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-gradient-to-br
          [&::-webkit-slider-thumb]:from-cyan-400
          [&::-webkit-slider-thumb]:to-blue-500
          [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(0,180,255,0.8)]
          [&::-webkit-slider-thumb]:border
          [&::-webkit-slider-thumb]:border-cyan-300
          "
        />

        {/* Gradient track overlay */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 h-[6px] rounded-lg bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 opacity-60 pointer-events-none"></div>
      </div>

      {/* Labels */}
      <div className="flex justify-between text-xs text-gray-400 mt-2 px-1">
        <span>Strict</span>
        <span>Balanced</span>
        <span>Lenient</span>
      </div>
    </div>
  );
}