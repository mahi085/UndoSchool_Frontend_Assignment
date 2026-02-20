import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Nav Links */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              🎓 EduLearn
            </span>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="relative text-purple-600 font-medium text-sm group"
              >
                Course
                {/* Underline */}
                <span className="absolute -bottom-[18px] left-0 w-full h-[2px] bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" />
              </a>
            </div>
          </div>

          {/* Right: Login + Register (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Login
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
                boxShadow: "0 4px 15px rgba(168, 85, 247, 0.35)",
              }}
            >
              Register for free
            </a>
          </div>

          {/* Mobile: Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 flex flex-col gap-3 border-t border-gray-100 bg-white">
          <a
            href="#"
            className="relative inline-block text-purple-600 font-medium text-sm w-fit"
          >
            Course
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" />
          </a>

          <hr className="border-gray-100" />

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Login
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-white px-5 py-2.5 rounded-full text-center transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
              boxShadow: "0 4px 15px rgba(168, 85, 247, 0.35)",
            }}
          >
            Register for free
          </a>
        </div>
      </div>
    </nav>
  );
}