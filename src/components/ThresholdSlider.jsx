export default function ThresholdSlider({ threshold, setThreshold }) {
  // Decide color based on threshold range
  const getColor = () => {
    if (threshold < 0.7) return "text-red-400";     // strict
    if (threshold < 1.4) return "text-yellow-400";  // balanced
    return "text-green-400";                        // lenient
  };

  return (
    <div className="mb-6">
      {/* Label with value */}
      <div className="flex justify-between items-center mb-2">
        <label className="text-gray-300 font-semibold">
          Decision Threshold
        </label>
        <span className={`font-bold ${getColor()}`}>
          {threshold.toFixed(2)}
        </span>
      </div>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max="2"
        step="0.01"
        value={threshold}
        onChange={(e) => setThreshold(parseFloat(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer
          bg-gradient-to-r from-red-500 via-yellow-400 to-green-400
          accent-transparent"
      />

      {/* Hint */}
      <p className="text-xs text-gray-400 mt-1">
        Low = strict matching, High = lenient matching
      </p>
    </div>
  );
}
