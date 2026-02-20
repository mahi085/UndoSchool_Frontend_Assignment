import React, { useRef } from "react";

/* ---------------- DATA ---------------- */

const webinars = [
  { time: "Starting at 4am", selling: true },
  { time: "Starting at 7pm" },
  { time: "Starting at 10am" },
  { time: "Starting at 3pm" },
  { time: "Starting at 8pm" },
];

/* ---------------- COURSE CARD ---------------- */

function WebinarCard({ item }) {
  return (
    <div className="flex-shrink-0 flex flex-col group">
      {/* Rating row above card */}
      <div className="flex items-center gap-1 pb-3 text-xs text-gray-600">
        <span>⭐</span>
        <span className="font-semibold text-gray-800">4.9</span>
        <span className="text-gray-400">|</span>
        <span>200+ learners</span>
      </div>

      {/* Card */}
      <div className="relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:border-purple-200 flex flex-col flex-1" style={{ width: "clamp(240px, 22vw, 280px)" }}>

        {/* Selling Fast */}
        {item.selling && (
          <div
            className="absolute z-10 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md top-3 left-3"
            style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)" }}
          >
            🔥 Selling Fast
          </div>
        )}

        {/* Image */}
        <div className="relative overflow-hidden bg-gray-200" style={{ height: "180px" }}>
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop&auto=format&q=60"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            alt="Webinar"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.backgroundColor = "#e5e7eb";
            }}
          />
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col flex-1">
          {/* Tags */}
          <div className="flex gap-1.5 mb-3 flex-wrap">
            <span className="bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1 rounded-full text-xs font-medium">
              English
            </span>
            <span className="bg-yellow-100 text-yellow-700 border border-yellow-400 px-3 py-1 rounded-full text-xs font-medium">
              {item.time}
            </span>
          </div>

          {/* Title */}
          <div className="font-bold text-gray-900 text-sm leading-tight mb-2 line-clamp-2">
            Summer robotics camp: fun projects with auto arduino, Tinker cad coding and 3d printing
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 pt-3 mt-auto">
            <div className="flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center gap-2.5">
                <span>👤 7–10 yrs</span>
                <span>🕒 45</span>
                <span className="font-medium text-gray-700">₹ 299</span>
              </div>

              <button className="text-gray-400 hover:text-purple-600 transition-colors">
                🛒
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ---------------- MAIN SECTION ---------------- */

export default function WebinarSection() {

  const scrollRef = useRef();

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ background: "linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 50%, #fce7f3 100%)" }} className="py-16 relative overflow-hidden">

      {/* Stopwatch Icon */}
      <div className="absolute right-10 top-8 text-gray-300 text-6xl opacity-50">
        ⏱
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-12">

          <div className="flex items-center gap-2 text-purple-500">

            <div className="border-t border-dashed border-purple-400 w-24"></div>
            <div className="w-3 h-3 bg-purple-500 rotate-45"></div>

          </div>

          <h2 className="text-4xl font-semibold text-center">
            Webinar starting within 24 hrs
          </h2>

          <div className="flex items-center gap-2 text-purple-500">

            <div className="w-3 h-3 bg-purple-500 rotate-45"></div>
            <div className="border-t border-dashed border-purple-400 w-24"></div>

          </div>

        </div>

        {/* Slider */}
        <div className="relative">

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          >

            {webinars.map((item, index) => (
              <WebinarCard key={index} item={item} />
            ))}

          </div>

          {/* Arrow */}
          <button
            onClick={scrollRight}
            className="
              absolute right-0 top-1/2 -translate-y-1/2
              bg-white shadow-lg p-4 rounded-full
              hover:scale-110 transition
            "
          >
            →
          </button>

        </div>

      </div>

    </div>
  );
}