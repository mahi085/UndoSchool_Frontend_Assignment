import { useState, useRef } from "react";

const courses = [
  {
    id: 1,
    sellingFast: true,
    rating: "4.9",
    learners: "200+",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop&auto=format&q=60",
    tags: ["English", "Intermediate", "4 classes"],
    title: "Summer robotics camp: fun projects with auto arduino, Tink...",
    description: "Build circuits & smart projects like alarms, weather stations, etc",
    age: "7-10 yrs",
    duration: "45",
    price: "299",
  },
  {
    id: 2,
    sellingFast: false,
    rating: "4.9",
    learners: "200+",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop&auto=format&q=60",
    tags: ["English", "Intermediate", "4 classes"],
    title: "Summer robotics camp: fun projects with auto arduino, Tink...",
    description: "Build circuits & smart projects like alarms, weather stations, etc",
    age: "7-10 yrs",
    duration: "45",
    price: "299",
  },
  {
    id: 3,
    sellingFast: false,
    rating: "4.9",
    learners: "200+",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop&auto=format&q=60",
    tags: ["English", "Intermediate", "4 classes"],
    title: "Summer robotics camp: fun projects with auto arduino, Tink...",
    description: "Build circuits & smart projects like alarms, weather stations, etc",
    age: "7-10 yrs",
    duration: "45",
    price: "299",
  },
  {
    id: 4,
    sellingFast: false,
    rating: "4.9",
    learners: "200+",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop&auto=format&q=60",
    tags: ["English", "Intermediate", "4 classes"],
    title: "Summer robotics camp: fun projects with auto arduino, Tink...",
    description: "Build circuits & smart projects like alarms, weather stations, etc",
    age: "7-10 yrs",
    duration: "45",
    price: "299",
  },
  {
    id: 5,
    sellingFast: false,
    rating: "4.9",
    learners: "200+",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop&auto=format&q=60",
    tags: ["English", "Intermediate", "4 classes"],
    title: "Summer robotics camp: fun projects with auto arduino, Tink...",
    description: "Build circuits & smart projects like alarms, weather stations, etc",
    age: "7-10 yrs",
    duration: "45",
    price: "299",
  },
  {
    id: 6,
    sellingFast: false,
    rating: "4.9",
    learners: "200+",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop&auto=format&q=60",
    tags: ["English", "Intermediate", "4 classes"],
    title: "Summer robotics camp: fun projects with auto arduino, Tink...",
    description: "Build circuits & smart projects like alarms, weather stations, etc",
    age: "7-10 yrs",
    duration: "45",
    price: "299",
  },
];

// tag color map
const tagStyle = (tag) => {
  if (tag === "English")      return { border: "1px solid #93c5fd", color: "#3b82f6",  background: "white" };
  if (tag === "Intermediate") return { border: "1px solid #f9a8d4", color: "#ec4899",  background: "white" };
  return                             { border: "1px solid #fbbf24", color: "#d97706",  background: "white" }; // classes
};

function CourseCard({ course, faded }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col group"
      style={{
        width: "clamp(240px, 22vw, 280px)",
        opacity: faded ? 0.45 : 1,
        position: "relative",
      }}
    >
      {/* Rating row above card */}
      <div className="flex items-center gap-1 pb-3 text-xs text-gray-600">
        <span>⭐</span>
        <span className="font-semibold text-gray-800">{course.rating}</span>
        <span className="text-gray-400">|</span>
        <span>{course.learners} learners</span>
      </div>

      {/* Card */}
      <div
        className="bg-white rounded-3xl overflow-hidden flex flex-col flex-1 relative shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-blue-200"
      >
        {/* Selling Fast badge */}
        {course.sellingFast && (
          <div
            className="absolute left-3 z-10 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md top-3"
            style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)" }}
          >
            🔥 Selling Fast
          </div>
        )}

        {/* Image */}
        <div className="relative overflow-hidden bg-gray-200" style={{ height: "180px" }}>
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop&auto=format&q=60";
            }}
          />
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col flex-1">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {course.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={tagStyle(tag)}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-bold text-gray-900 text-sm leading-tight mb-2 line-clamp-2">
            {course.title}
          </h3>

          {/* Footer */}
          <div className="border-t border-gray-100 pt-3 mt-auto">
            <div className="flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center gap-2.5">
                {/* Age */}
                <span className="flex items-center gap-1">
                  👤 {course.age}
                </span>
                {/* Duration */}
                <span className="flex items-center gap-1">
                  🕒 {course.duration}
                </span>
                {/* Price */}
                <span className="flex items-center gap-0.5 font-medium text-gray-700">
                  ₹ {course.price}
                </span>
              </div>

              {/* Cart icon */}
              <button className="text-gray-400 hover:text-blue-600 transition-colors">
                🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewLaunches() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-14 px-4" style={{ background: "linear-gradient(135deg, #fff 0%, #f0fdf4 50%, #e0f2fe 100%)" }}>
      {/* Heading */}
      <div className="text-center mb-2">
        <h2 className="font-bold text-gray-900" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
          New Launches 🚀
        </h2>
      </div>
      <p className="text-center text-gray-600 mb-12" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}>
        Fresh courses just launched and ready to explore!
      </p>

      {/* Cards scroll area */}
      <div className="relative">
        {/* Left arrow — hidden when at start */}
        <button
          onClick={() => scroll(-1)}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-11 h-11 rounded-full bg-white border border-gray-300 shadow-lg items-center justify-center hover:bg-blue-50 transition-all duration-200 hover:border-blue-300"
        >
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {courses.map((course, i) => (
            <div key={course.id} className="relative flex flex-col pt-6">
              <CourseCard course={course} faded={i === courses.length - 1} />
              {/* Right arrow overlaid on last faded card */}
              {i === courses.length - 1 && (
                <button
                  onClick={() => scroll(1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-300 shadow-lg flex items-center justify-center hover:bg-blue-50 transition-all duration-200 hover:border-blue-300"
                >
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Fade right edge */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to left, rgba(240,253,250,0.8) 20%, transparent)" }}
        />
      </div>

      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}