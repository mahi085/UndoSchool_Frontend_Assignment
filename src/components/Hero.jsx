import { useState } from "react";
import Navbar from "./Navbar";

const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" strokeLinecap="round" />
  </svg>
);

const CoursesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" strokeLinecap="round" />
  </svg>
);

const HappyKidsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
  </svg>
);

const StarHandIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.5a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557L2.04 10.399a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20c0-1.5 1-3 3-3" />
  </svg>
);

/* ── Left Kid SVG (boy with grad cap + magnifying glass + books) ── */
function LeftKid() {
  return (
    <svg viewBox="0 0 220 370" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
      {/* Grad cap */}
      <rect x="62" y="62" width="96" height="14" rx="3" fill="#1d3a8a" />
      <rect x="97" y="38" width="26" height="28" rx="3" fill="#1d3a8a" />
      <path d="M123 38 L138 90" stroke="#f5e642" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="139" cy="94" r="5" fill="#f5e642"/>
      {/* Head */}
      <ellipse cx="110" cy="145" rx="52" ry="56" fill="#f5c39a"/>
      {/* Hair */}
      <ellipse cx="110" cy="108" rx="52" ry="26" fill="#5a3300"/>
      <rect x="58" y="108" width="14" height="50" rx="7" fill="#5a3300"/>
      {/* Ears */}
      <ellipse cx="58" cy="148" rx="9" ry="12" fill="#f5c39a"/>
      <ellipse cx="162" cy="148" rx="9" ry="12" fill="#f5c39a"/>
      {/* Eyes */}
      <circle cx="94" cy="148" r="8" fill="white"/>
      <circle cx="126" cy="148" r="8" fill="white"/>
      <circle cx="96" cy="150" r="4.5" fill="#2d1a00"/>
      <circle cx="128" cy="150" r="4.5" fill="#2d1a00"/>
      <circle cx="97" cy="148" r="1.5" fill="white"/>
      <circle cx="129" cy="148" r="1.5" fill="white"/>
      {/* Eyebrows */}
      <path d="M85 138 Q94 133 103 138" stroke="#5a3300" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M117 138 Q126 133 137 138" stroke="#5a3300" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Nose */}
      <ellipse cx="110" cy="162" rx="5" ry="4" fill="#e8a870"/>
      {/* Smile */}
      <path d="M94 174 Q110 188 126 174" stroke="#c0725a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Shirt - orange/yellow stripes */}
      <path d="M55 370 Q58 240 80 215 Q110 200 140 215 Q162 240 165 370 Z" fill="#f97316"/>
      <path d="M70 220 Q70 370 65 370" stroke="#fb923c" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M95 212 Q95 370 90 370" stroke="#fb923c" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M125 212 Q125 370 120 370" stroke="#fb923c" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M150 220 Q150 370 145 370" stroke="#fb923c" strokeWidth="8" strokeLinecap="round" fill="none"/>
      {/* Left arm raised holding magnifier */}
      <path d="M80 230 Q50 210 36 175" stroke="#f5c39a" strokeWidth="22" strokeLinecap="round" fill="none"/>
      {/* Magnifying glass */}
      <circle cx="30" cy="162" r="22" stroke="white" strokeWidth="3.5" fill="rgba(255,255,255,0.12)"/>
      <line x1="46" y1="178" x2="60" y2="192" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
      {/* Right arm books */}
      <path d="M140 230 Q165 255 168 300" stroke="#f5c39a" strokeWidth="22" strokeLinecap="round" fill="none"/>
      {/* Books */}
      <rect x="148" y="285" width="22" height="50" rx="3" fill="#34d399" transform="rotate(-8,159,310)"/>
      <rect x="164" y="283" width="22" height="52" rx="3" fill="#60a5fa" transform="rotate(5,175,309)"/>
    </svg>
  );
}

/* ── Right Kid SVG (girl with glasses reading book) ── */
function RightKid() {
  return (
    <svg viewBox="0 0 220 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
      {/* Long dark hair back */}
      <ellipse cx="110" cy="110" rx="56" ry="28" fill="#1e1a14"/>
      <rect x="54" y="118" width="16" height="110" rx="8" fill="#1e1a14"/>
      <rect x="150" y="118" width="16" height="110" rx="8" fill="#1e1a14"/>
      {/* Pigtail ribbons/bands */}
      <rect x="47" y="165" width="22" height="12" rx="6" fill="#f5e642"/>
      <rect x="151" y="165" width="22" height="12" rx="6" fill="#f5e642"/>
      {/* Head */}
      <ellipse cx="110" cy="130" rx="54" ry="58" fill="#f5c39a"/>
      {/* Ears */}
      <ellipse cx="56" cy="134" rx="9" ry="12" fill="#f5c39a"/>
      <ellipse cx="164" cy="134" rx="9" ry="12" fill="#f5c39a"/>
      {/* Hair front */}
      <path d="M56 110 Q110 78 164 110 L164 102 Q110 68 56 102 Z" fill="#1e1a14"/>
      {/* Glasses frames */}
      <circle cx="93" cy="133" r="16" stroke="#2d2416" strokeWidth="2.8" fill="rgba(210,235,255,0.25)"/>
      <circle cx="127" cy="133" r="16" stroke="#2d2416" strokeWidth="2.8" fill="rgba(210,235,255,0.25)"/>
      <line x1="109" y1="133" x2="111" y2="133" stroke="#2d2416" strokeWidth="2.5"/>
      <line x1="77" y1="130" x2="70" y2="126" stroke="#2d2416" strokeWidth="2.5"/>
      <line x1="143" y1="130" x2="150" y2="126" stroke="#2d2416" strokeWidth="2.5"/>
      {/* Eyes */}
      <circle cx="93" cy="133" r="6" fill="#2d1a00"/>
      <circle cx="127" cy="133" r="6" fill="#2d1a00"/>
      <circle cx="94.5" cy="131.5" r="2" fill="white"/>
      <circle cx="128.5" cy="131.5" r="2" fill="white"/>
      {/* Nose */}
      <ellipse cx="110" cy="150" rx="5" ry="4" fill="#e8a870"/>
      {/* Smile */}
      <path d="M96 163 Q110 174 124 163" stroke="#c0725a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Shirt - yellow */}
      <path d="M50 340 Q54 225 78 205 Q110 190 142 205 Q166 225 170 340 Z" fill="#fbbf24"/>
      {/* Collar */}
      <path d="M90 205 Q110 218 130 205" stroke="#f59e0b" strokeWidth="2" fill="none"/>
      {/* Book being held/read */}
      <rect x="42" y="265" width="136" height="90" rx="4" fill="#60a5fa"/>
      <rect x="42" y="265" width="68" height="90" rx="4" fill="#3b82f6"/>
      <line x1="110" y1="265" x2="110" y2="355" stroke="#1d4ed8" strokeWidth="2.5"/>
      {/* Book pages lines */}
      <line x1="52" y1="285" x2="98" y2="285" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="52" y1="297" x2="98" y2="297" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="52" y1="309" x2="85" y2="309" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="120" y1="285" x2="166" y2="285" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="120" y1="297" x2="166" y2="297" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="120" y1="309" x2="155" y2="309" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Arms holding book */}
      <path d="M78 250 Q55 270 42 310" stroke="#f5c39a" strokeWidth="20" strokeLinecap="round" fill="none"/>
      <path d="M142 250 Q165 270 178 310" stroke="#f5c39a" strokeWidth="20" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

export default function Hero() {
  const [query, setQuery] = useState("");

  return (  
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 30%, #d946ef 60%, #ec4899 100%)",
        minHeight: "450px",
      }}
    >
      {/* Glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 18% 55%, rgba(109,40,217,0.3) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 82% 40%, rgba(76,29,149,0.4) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative z-10 flex items-end md:items-center justify-between w-full"
        style={{ minHeight: "inherit" }}
      >
        {/* ── Left Kid ── */}
        <div
          className="relative flex-shrink-0 self-end hidden sm:block"
          style={{ width: "clamp(150px, 17vw, 270px)" }}
        >
          <div style={{ height: "clamp(220px, 25vw, 370px)" }}>
            <LeftKid />
          </div>

          {/* 500+ Courses Badge */}
          <div
            className="absolute flex items-center gap-2 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-2.5 shadow-xl"
            style={{
              top: "8%",
              right: "-22px",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            <div className="text-white/85">
              <CoursesIcon />
            </div>
            <div>
              <div className="text-white font-extrabold text-base leading-tight">500+</div>
              <div className="text-white/65 text-xs leading-tight">Courses</div>
            </div>
          </div>

          {/* 4.9 Rating Badge */}
          <div
            className="absolute flex items-center gap-2 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-2.5 shadow-xl"
            style={{
              bottom: "12%",
              right: "-22px",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            <div className="text-white/85">
              <StarHandIcon />
            </div>
            <div>
              <div className="text-white font-extrabold text-base leading-tight">4.9</div>
              <div className="text-white/65 text-xs leading-tight">Rating</div>
            </div>
          </div>
        </div>

        {/* ── Center Content ── */}
        <div className="flex-1 flex flex-col items-center text-center px-4 sm:px-10 py-12 md:py-16">
          {/* Mobile-only badges */}
          <div className="flex sm:hidden justify-center gap-3 mb-6 flex-wrap">
            <div
              className="flex items-center gap-2 border border-white/20 rounded-2xl px-3 py-2 backdrop-blur-md"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div className="text-white/85"><CoursesIcon /></div>
              <div>
                <div className="text-white font-extrabold text-sm">500+</div>
                <div className="text-white/65 text-xs">Courses</div>
              </div>
            </div>
            <div
              className="flex items-center gap-2 border border-white/20 rounded-2xl px-3 py-2 backdrop-blur-md"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div className="text-white/85"><HappyKidsIcon /></div>
              <div>
                <div className="text-white font-extrabold text-sm">10k+</div>
                <div className="text-white/65 text-xs">Happy kids</div>
              </div>
            </div>
          </div>

          <h1
            className="text-white font-bold leading-snug mb-1"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)", fontFamily: "Georgia, serif" }}
          >
            Learn a New Skill
          </h1>
          <h2
            className="font-bold leading-snug mb-10"
            style={{
              fontSize: "clamp(1.6rem, 3.8vw, 3rem)",
              color: "#f5e642",
              fontFamily: "Georgia, serif",
            }}
          >
            Everyday, Anytime, and Anywhere.
          </h2>

          {/* Search Bar */}
          <div className="w-full max-w-2xl">
            <div className="flex items-center bg-white rounded-full px-5 py-1.5 shadow-2xl gap-3">
              <SearchIcon />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What do you want to learn today?"
                className="flex-1 py-2.5 text-gray-500 placeholder-gray-400 text-sm bg-transparent outline-none min-w-0"
              />
              <button
                className="flex-shrink-0 text-white font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #a855f7 0%, #db2777 100%)",
                  boxShadow: "0 4px 18px rgba(168,85,247,0.45)",
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* ── Right Kid ── */}
        <div
          className="relative flex-shrink-0 self-end hidden sm:block"
          style={{ width: "clamp(150px, 17vw, 270px)" }}
        >
          <div style={{ height: "clamp(220px, 25vw, 340px)" }}>
            <RightKid />
          </div>

          {/* 10k+ Happy kids Badge */}
          <div
            className="absolute flex items-center gap-2 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-2.5 shadow-xl"
            style={{
              top: "8%",
              left: "-22px",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            <div className="text-white/85">
              <HappyKidsIcon />
            </div>
            <div>
              <div className="text-white font-extrabold text-base leading-tight">10k+</div>
              <div className="text-white/65 text-xs leading-tight">Happy kids</div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  );
}