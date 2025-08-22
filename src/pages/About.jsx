import FingerprintBackground from "../components/FingerprintBackground";

export default function About() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white px-6">
      <FingerprintBackground />

      <div className="z-10 mt-16 bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400 drop-shadow-md">
          ℹ️ About Hastakhar
        </h2>

        <p className="text-gray-300 leading-relaxed text-center mb-4">
          <span className="text-cyan-300 font-semibold">Hastakhar</span> is an
          AI-powered <span className="text-cyan-400">Handwriting & Signature Forgery Detector</span> 
          designed to ensure trust, security, and authenticity in the digital age.  
          Our system uses advanced{" "}
          <span className="text-green-400">Siamese Neural Networks</span> to
          analyze handwriting and signature samples, determining whether they
          belong to the same individual.
        </p>

        <p className="text-gray-400 leading-relaxed text-center mb-4">
          Whether it’s banking, legal documentation, or academic verification,
          handwritten signatures are still a critical part of identity. Fraudulent
          signatures pose a huge risk, and <span className="text-cyan-300">Hastakhar</span>{" "}
          helps fight against it by providing accurate, AI-driven verification.
        </p>

        <ul className="text-gray-300 text-sm space-y-2 mb-6">
          <li>✅ Upload two handwriting or signature images for instant verification</li>
          <li>✅ Powered by <span className="text-blue-400">PyTorch</span> for deep learning</li>
          <li>✅ Backend built with <span className="text-yellow-400">FastAPI</span></li>
          <li>✅ Modern frontend using <span className="text-pink-400">React + TailwindCSS</span></li>
          <li>✅ Scalable and ready for real-world applications</li>
        </ul>

        <p className="text-gray-400 leading-relaxed text-center italic">
          Our vision is to make digital & offline identity verification{" "}
          <span className="text-green-400 font-semibold">faster, safer, and smarter</span>.  
          Hastakhar brings together AI and security to protect what matters most: authenticity.
        </p>
      </div>
    </div>
  );
}
