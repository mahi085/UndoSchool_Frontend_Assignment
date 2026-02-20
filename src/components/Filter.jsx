import React from "react";

/* --- Icons --- */

const SunIcon = () => (
  <svg className="w-10 h-10 text-black/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4" />
    <path strokeLinecap="round" d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
  </svg>
);

const MoonIcon = () => (
  <svg className="w-10 h-10 text-black/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"/>
  </svg>
);

const CartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" d="M6 6h15l-1.5 9h-12z"/>
    <circle cx="9" cy="20" r="1"/>
    <circle cx="18" cy="20" r="1"/>
  </svg>
);

const UserIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="4"/>
    <path strokeLinecap="round" d="M4 20c2-4 14-4 16 0"/>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9"/>
    <path strokeLinecap="round" d="M12 7v5l3 2"/>
  </svg>
);

/* --- Time Filter Card --- */

function TimeCard({ title, time, icon }) {
  return (
    <div className="flex justify-between items-center bg-white border border-gray-200 rounded-2xl px-6 py-4 min-w-[260px] shadow-sm hover:shadow-md transition-all duration-200 hover:border-purple-300">
      <div>
        <div className="font-semibold text-lg text-gray-900">{title}</div>
        <div className="text-gray-500 text-sm">{time}</div>
      </div>
      {icon}
    </div>
  );
}

/* --- Course Card --- */

function CourseCard({ selling }) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:border-purple-200 flex flex-col group">

      {/* Selling Fast Badge */}
      {selling && (
        <div
          className="absolute -top-1 left-3 z-10 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md"
          style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)" }}
        >
          🔥 Selling Fast
        </div>
      )}

      {/* Rating row above card */}
      <div className="flex items-center gap-1 px-4 pt-4 pb-1 text-xs text-gray-600">
        <span>⭐</span>
        <span className="font-semibold text-gray-800">4.9</span>
        <span className="text-gray-400">|</span>
        <span>200+ learners</span>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden bg-gray-200 mx-4 mt-3" style={{ height: "160px", borderRadius: "16px" }}>
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop&auto=format&q=60"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          alt="Course"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.style.backgroundColor = "#e5e7eb";
          }}
        />
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="px-3 py-1 text-xs font-medium bg-blue-100 border border-blue-300 rounded-full text-blue-700">English</span>
          <span className="px-3 py-1 text-xs font-medium bg-red-100 border border-red-300 rounded-full text-red-700">Intermediate</span>
          <span className="px-3 py-1 text-xs font-medium bg-yellow-100 border border-yellow-400 rounded-full text-yellow-700">Morning</span>
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

            {/* Cart */}
            <button className="text-gray-400 hover:text-purple-600 transition-colors">
              🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Main Page --- */

export default function FilterTimePage() {
  return (
    <div style={{ background: "linear-gradient(135deg, #f5f3ff 0%, #e0f2fe 50%, #dbeafe 100%)" }} className="min-h-screen py-14 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Filter with Time
          </h1>

          <p className="text-gray-600 text-base">
            Choose the perfect time that fits your child's schedule
          </p>

        </div>

        {/* Time Filters */}
        <div className="flex flex-wrap gap-5 justify-center mb-14">

          <TimeCard title="Morning classes" time="8am – 12pm" icon={<SunIcon />} />
          <TimeCard title="Afternoon classes" time="12pm – 4pm" icon={<SunIcon />} />
          <TimeCard title="Evening classes" time="4pm – 8pm" icon={<MoonIcon />} />
          <TimeCard title="Late evening classes" time="8pm – 11pm" icon={<MoonIcon />} />

        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <CourseCard selling />
          <CourseCard />
          <CourseCard />
          <CourseCard />

        </div>

      </div>

    </div>
  );
}