import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ResultCard({ result }) {
  const distance = result?.distance?.toFixed(4) ?? "N/A";
  const finalText = result?.label ?? "Unknown";

  // Decide final verdict
  const positiveLabels = ["genuine", "same"];
  const isPositive = positiveLabels.some((word) =>
    finalText.toLowerCase().includes(word)
  );
  const resultClass = isPositive ? "text-green-400" : "text-red-400";

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
