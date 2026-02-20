import React, { useRef } from "react";

/* ---------------- CATEGORY DATA ---------------- */

const categories = [
  {
    name: "Coding",
    active: true,
    icon: "💻",
  },
  {
    name: "Public speaking",
    icon: "🎤",
  },
  {
    name: "Chess",
    icon: "♞",
  },
  {
    name: "Home work help",
    icon: "📚",
  },
  {
    name: "App building",
    icon: "📱",
  },
];

/* ---------------- COURSE DATA ---------------- */

const courses = [
  {
    tag1: "Coding",
    tag2: "Intermediate",
    tag3: "4 classes",
    selling: true,
  },
  {
    tag1: "Public speaking",
    tag2: "",
    tag3: "4 classes",
  },
  {
    tag1: "Chess",
    tag2: "Intermediate",
    tag3: "",
  },
  {
    tag1: "Home works help",
    tag2: "Intermediate",
    tag3: "",
  },
];

/* ---------------- TAG COLOR ---------------- */

function tagColor(tag) {
  if (tag === "Coding") return "bg-orange-100 text-orange-600 border-orange-300";
  if (tag === "Public speaking") return "bg-green-100 text-green-700 border-green-300";
  if (tag === "Chess") return "bg-yellow-100 text-yellow-700 border-yellow-300";
  if (tag === "Home works help") return "bg-blue-100 text-blue-700 border-blue-300";
  if (tag === "Intermediate") return "bg-red-100 text-red-600 border-red-300";
  if (tag === "4 classes") return "bg-yellow-50 text-yellow-700 border-yellow-400";
  return "bg-gray-100 border";
}

/* ---------------- CATEGORY CARD ---------------- */

function CategoryCard({ item }) {
  return (
    <div
      className={`
        flex items-center gap-4 px-8 py-6 rounded-2xl border min-w-[220px]
        transition-all duration-300 cursor-pointer
        ${
          item.active
            ? "bg-orange-500 text-white shadow-lg border-orange-500"
            : "bg-white border-gray-200 hover:shadow-md"
        }
      `}
    >
      <div className="text-5xl">{item.icon}</div>

      <div className="font-medium text-lg">{item.name}</div>
    </div>
  );
}

/* ---------------- COURSE CARD ---------------- */

function CourseCard({ item }) {
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
      <div className="relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:border-pink-200 flex flex-col flex-1" style={{ width: "clamp(240px, 22vw, 280px)" }}>

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
            alt="Category"
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
            {item.tag1 && (
              <span className={`px-3 py-1 text-xs rounded-full border font-medium ${tagColor(item.tag1)}`}>
                {item.tag1}
              </span>
            )}
            {item.tag2 && (
              <span className={`px-3 py-1 text-xs rounded-full border font-medium ${tagColor(item.tag2)}`}>
                {item.tag2}
              </span>
            )}
            {item.tag3 && (
              <span className={`px-3 py-1 text-xs rounded-full border font-medium ${tagColor(item.tag3)}`}>
                {item.tag3}
              </span>
            )}
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

              <button className="text-gray-400 hover:text-pink-600 transition-colors">
                🛒
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ---------------- MAIN PAGE ---------------- */

export default function PopularCategoriesPage() {
  const scrollRef = useRef();

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ background: "linear-gradient(135deg, #fef3f8 0%, #f5f3ff 50%, #f0fdf4 100%)" }} className="py-16">

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="text-4xl font-bold text-gray-900 mb-4">
            Popular Categories
          </div>

          <div className="text-gray-600 text-base">
            Pick what you love most! These categories have everything you need to learn something awesome ✨
          </div>

        </div>

        {/* Categories */}
        <div className="flex gap-6 mb-14 overflow-x-auto pb-2">

          {categories.map((item, index) => (
            <CategoryCard key={index} item={item} />
          ))}

        </div>

        {/* Course Slider */}
        <div className="relative">

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          >

            {courses.map((item, index) => (
              <CourseCard key={index} item={item} />
            ))}

          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-pink-50 transition-all duration-200 border border-gray-300"
          >
            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>

      </div>

    </div>
  );
}