// import { Link, useLocation } from "react-router-dom";

// export default function Navbar() {
//   const location = useLocation();

//   return (
//     <nav className="fixed top-0 left-0 w-full z-20 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
//         <h1 className="text-xl font-bold text-blue-400">Hastakshar</h1>

//         <div className="space-x-6">
//           <Link
//             to="/"
//             className={`hover:text-blue-400 ${
//               location.pathname === "/" ? "text-blue-400" : "text-gray-300"
//             }`}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className={`hover:text-blue-400 ${
//               location.pathname === "/about" ? "text-blue-400" : "text-gray-300"
//             }`}
//           >
//             About Us
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-[#0a0f1a]/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide"
        >
          Hastakshar
        </motion.h1>

        {/* Tabs */}
        <div className="flex gap-4">
          {/* HOME */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.07 }}
              className={`
                px-4 py-2 rounded-xl text-sm font-semibold transition 
                ${isActive("/") ? 
                  "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/40" 
                  : 
                  "text-gray-300 hover:text-white hover:bg-white/10"
                }
              `}
            >
              Home
            </motion.div>
          </Link>

          {/* ABOUT */}
          <Link to="/about">
            <motion.div
              whileHover={{ scale: 1.07 }}
              className={`
                px-4 py-2 rounded-xl text-sm font-semibold transition 
                ${isActive("/about") ? 
                  "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/40" 
                  : 
                  "text-gray-300 hover:text-white hover:bg-white/10"
                }
              `}
            >
              About
            </motion.div>
          </Link>
        </div>
      </div>
    </nav>
  );
}