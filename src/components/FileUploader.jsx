import { useDropzone } from "react-dropzone";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FileUploader({ label, onFileSelect }) {
  const [preview, setPreview] = useState(null);
  const [ripple, setRipple] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setUploading(true);
        setProgress(0);

        // Fake scanning progress
        const interval = setInterval(() => {
          setProgress((p) => {
            if (p >= 100) {
              clearInterval(interval);
              onFileSelect(file);
              setPreview(URL.createObjectURL(file));
              setUploading(false);

              // ripple effect
              setRipple(true);
              setTimeout(() => setRipple(false), 600);
              return 100;
            }
            return p + 5;
          });
        }, 100);
      }
    },
  });

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleRemove = () => {
    setPreview(null);
    onFileSelect(null);
  };

  return (
    <div
      {...getRootProps()}
      className="relative border-2 border-dashed border-cyan-400 
                 rounded p-4 text-center cursor-pointer 
                 transition flex flex-col items-center justify-center
                 shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.8)]"
    >
      <input {...getInputProps()} />

      {/* Ripple Effect */}
      <AnimatePresence>
        {ripple && (
          <motion.div
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 rounded bg-green-400/40 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Cyber Progress Loader */}
      <AnimatePresence>
        {uploading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-6 w-full"
          >
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "linear" }}
                className="h-full bg-gradient-to-r from-cyan-400 via-green-400 to-lime-400 shadow-[0_0_15px_rgba(0,255,255,0.8)]"
              />
            </div>
            <p className="mt-2 text-cyan-400 text-sm animate-pulse">
              Scanning... {progress}%
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      {!uploading && (
        <AnimatePresence mode="wait">
          {preview ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <img
                src={preview}
                alt="preview"
                className="max-h-40 object-contain rounded mb-2 transition-transform hover:scale-105"
              />

              {/* ❌ Pulsing Remove Button */}
              <motion.button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove();
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute top-2 right-2 bg-red-500 text-white 
                           rounded-full p-1 hover:bg-red-600 
                           shadow-[0_0_10px_rgba(255,0,0,0.7)] animate-pulse"
              >
                <X size={16} />
              </motion.button>
            </motion.div>
          ) : (
            <motion.p
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-cyan-400 glitch"
            >
              {label}
            </motion.p>
          )}
        </AnimatePresence>
      )}

      {!uploading && (
        <p className="text-xs text-gray-500 mt-1">
          {preview ? "Click to replace" : "Click or drag an image"}
        </p>
      )}

      {/* Glitch Animation */}
      <style jsx>{`
        .glitch {
          position: relative;
          animation: glitch 1s infinite;
        }
        @keyframes glitch {
          0% {
            text-shadow: 2px 0 red, -2px 0 blue;
          }
          20% {
            text-shadow: -2px 0 red, 2px 0 blue;
          }
          40% {
            text-shadow: 2px 0 lime, -2px 0 yellow;
          }
          100% {
            text-shadow: 0 0 transparent;
          }
        }
      `}</style>
    </div>
  );
}
