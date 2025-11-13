// import FingerprintBackground from "../components/FingerprintBackground";

// export default function About() {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center text-white px-6">
//       <FingerprintBackground />

//       <div className="z-10 mt-16 bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-3xl">
//         <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400 drop-shadow-md">
//           ℹ️ About Hastakhar
//         </h2>

//         <p className="text-gray-300 leading-relaxed text-center mb-4">
//           <span className="text-cyan-300 font-semibold">Hastakhar</span> is an
//           AI-powered <span className="text-cyan-400">Handwriting & Signature Forgery Detector</span> 
//           designed to ensure trust, security, and authenticity in the digital age.  
//           Our system uses advanced{" "}
//           <span className="text-green-400">Siamese Neural Networks</span> to
//           analyze handwriting and signature samples, determining whether they
//           belong to the same individual.
//         </p>

//         <p className="text-gray-400 leading-relaxed text-center mb-4">
//           Whether it’s banking, legal documentation, or academic verification,
//           handwritten signatures are still a critical part of identity. Fraudulent
//           signatures pose a huge risk, and <span className="text-cyan-300">Hastakhar</span>{" "}
//           helps fight against it by providing accurate, AI-driven verification.
//         </p>

//         <ul className="text-gray-300 text-sm space-y-2 mb-6">
//           <li>✅ Upload two handwriting or signature images for instant verification</li>
//           <li>✅ Powered by <span className="text-blue-400">PyTorch</span> for deep learning</li>
//           <li>✅ Backend built with <span className="text-yellow-400">FastAPI</span></li>
//           <li>✅ Modern frontend using <span className="text-pink-400">React + TailwindCSS</span></li>
//           <li>✅ Scalable and ready for real-world applications</li>
//         </ul>

//         <p className="text-gray-400 leading-relaxed text-center italic">
//           Our vision is to make digital & offline identity verification{" "}
//           <span className="text-green-400 font-semibold">faster, safer, and smarter</span>.  
//           Hastakhar brings together AI and security to protect what matters most: authenticity.
//         </p>
//       </div>
//     </div>
//   );
// }


import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 flex items-start justify-center bg-[#050b16] text-white">
      <FingerprintBackground />

      {/* ABOUT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          z-10 max-w-4xl w-full rounded-2xl p-10
          bg-[#0e1624]/80 border border-white/10 backdrop-blur-xl
          shadow-xl shadow-black/40
        "
      >
        {/* Heading */}
        <h2
          className="
            text-4xl font-extrabold mb-8 text-center 
            bg-gradient-to-r from-cyan-400 to-blue-500 
            bg-clip-text text-transparent tracking-wide
          "
        >
          ℹ About Hastakhar
        </h2>

        {/* Paragraph 1 */}
        <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
          <span className="text-cyan-300 font-semibold">Hastakhar</span> is an
          AI-powered{" "}
          <span className="text-cyan-400">Handwriting & Signature Forgery Detector</span>{" "}
          designed to ensure trust, security, and authenticity in the digital world.
          The system uses{" "}
          <span className="text-green-400 font-semibold">Siamese Neural Networks</span>{" "}
          to analyze handwriting and signature samples — determining whether two
          samples belong to the same individual.
        </p>

        {/* Paragraph 2 */}
        <p className="text-gray-400 text-md leading-relaxed text-center mb-8">
          In banking, legal documentation, academic verification, and identity
          checks, handwritten signatures remain crucial. Fraudulent signatures
          pose a serious risk, and{" "}
          <span className="text-cyan-300">Hastakhar</span> helps mitigate this by
          delivering fast, AI-driven, highly accurate signature verification.
        </p>

        {/* Feature List */}
        <div className="mt-4 mb-8 space-y-3 text-[15px]">
          <div className="flex items-start gap-3">
            <span className="text-green-400 text-xl">✔</span>
            <p className="text-gray-300">
              Upload two handwriting or signature images for instant verification
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-400 text-xl">✔</span>
            <p className="text-gray-300">
              Powered by <span className="text-blue-400 font-semibold">PyTorch</span>{" "}
              for deep learning
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-400 text-xl">✔</span>
            <p className="text-gray-300">
              Backend built using{" "}
              <span className="text-yellow-400 font-semibold">FastAPI</span>
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-400 text-xl">✔</span>
            <p className="text-gray-300">
              Modern frontend using{" "}
              <span className="text-pink-400 font-semibold">React + TailwindCSS</span>
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-400 text-xl">✔</span>
            <p className="text-gray-300">
              Scalable and ready for real-world applications
            </p>
          </div>
        </div>

        {/* Vision footer */}
        <p className="text-gray-400 leading-relaxed text-center italic text-md">
          Our vision is to make identity verification{" "}
          <span className="text-green-400 font-semibold">faster, safer, and smarter</span>.
          Hastakhar unites AI and security to protect one thing above all:{" "}
          <span className="text-cyan-300 font-semibold">authenticity</span>.
        </p>
      </motion.div>
    </div>
  );
}