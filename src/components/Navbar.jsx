import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">Hastakshar</h1>

        <div className="space-x-6">
          <Link
            to="/"
            className={`hover:text-blue-400 ${
              location.pathname === "/" ? "text-blue-400" : "text-gray-300"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:text-blue-400 ${
              location.pathname === "/about" ? "text-blue-400" : "text-gray-300"
            }`}
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
