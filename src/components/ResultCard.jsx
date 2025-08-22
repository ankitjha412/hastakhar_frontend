// export default function ResultCard({ result }) {
//   return (
//     <div className="mt-6 p-4 rounded bg-gray-700">
//       <p>Distance: {result.distance.toFixed(4)}</p>
//       <p
//         className={`font-bold ${
//           result.label.includes("Genuine") ||
//           result.label.includes("Same")
//             ? "text-green-400"
//             : "text-red-400"
//         }`}
//       >
//         Result: {result.label}
//       </p>
//     </div>
//   );
// }


// export default function ResultCard({ result }) {
//   if (!result) return null;

//   const { distance, label } = result;

//   // Decide text color based on result
//   const isPositive =
//     label.toLowerCase().includes("genuine") ||
//     label.toLowerCase().includes("same");

//   const resultClass = isPositive ? "text-green-400" : "text-red-400";

//   return (
//     <div className="mt-6 p-4 rounded bg-gray-700">
//       <p>Distance: {distance?.toFixed(4) ?? "N/A"}</p>
//       <p className={`font-bold ${resultClass}`}>
//         Result: {label}
//       </p>
//     </div>
//   );
// }



import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ResultCard({ result }) {
  const distance = result?.distance?.toFixed(4) ?? "N/A";

  // Decide final verdict
  const positiveLabels = ["genuine", "same"];
  const isPositive = positiveLabels.some((word) =>
    result?.label?.toLowerCase().includes(word)
  );

  const resultClass = isPositive ? "text-green-400" : "text-red-400";
  const finalText = result?.label ?? "Unknown";

  // Step-based reveal
  const [step, setStep] = useState(0);
  const steps = [
    "🔍 Scanning signatures...",
    "📊 Extracting features...",
    "🔗 Comparing patterns...",
    `Result: ${finalText} (Distance: ${distance})`,
  ];

  useEffect(() => {
    if (step < steps.length - 1) {
      const timer = setTimeout(() => setStep(step + 1), 1300);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="mt-6 p-6 rounded-xl bg-gray-900/80 backdrop-blur-md shadow-lg border border-cyan-500/30 text-center">
      {steps.slice(0, step + 1).map((text, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-lg font-mono mb-2 ${
            index === steps.length - 1
              ? `${resultClass} text-xl font-extrabold drop-shadow-lg animate-pulse`
              : "text-cyan-300"
          }`}
        >
          {text}
        </motion.p>
      ))}
    </div>
  );
}

