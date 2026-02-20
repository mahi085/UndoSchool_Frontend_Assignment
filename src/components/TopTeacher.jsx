import React, { useRef } from "react";

/* ---------------- TEACHERS DATA ---------------- */

const teachers = [
  { name: "Andy Brew", subject: "Computer science" },
  { name: "Andy Brew", subject: "English" },
  { name: "Andy Brew", subject: "Early educator" },
  { name: "Andy Brew", subject: "Coding" },
  { name: "Andy Brew", subject: "Computer science" },
  { name: "Andy Brew", subject: "Computer science" },
];

/* ---------------- COURSES DATA ---------------- */

const courses = [1, 2, 3, 4];

/* ---------------- TEACHER CARD ---------------- */

function TeacherCard({ teacher }) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-3xl pt-14 pb-6 px-6 min-w-[220px] text-center shadow-sm">

      {/* Avatar */}
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white shadow-md"
      />

      {/* Name */}
      <div className="font-semibold text-lg">
        {teacher.name}
      </div>

      {/* Info */}
      <div className="text-gray-500 text-sm mt-1">
        M.Sc, B.Ed &nbsp; | &nbsp; 15+ Years
      </div>

      <div className="text-gray-500 text-sm mt-1">
        1000+ Students
      </div>

      {/* Subject */}
      <div className="inline-block mt-3 bg-gray-100 px-4 py-1 rounded-full text-sm">
        {teacher.subject}
      </div>

    </div>
  );
}

/* ---------------- COURSE CARD ---------------- */

function CourseCard({ selling }) {
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
        {selling && (
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
          <div className="flex gap-1.5 mb-3 flex-wrap">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-300">
              English
            </span>
            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium border border-pink-300">
              Intermediate
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium border border-yellow-400">
              4 classes
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

/* ---------------- MAIN PAGE ---------------- */

export default function TeachersSection() {
  const scrollRef = useRef();

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <div>

      {/* ---------------- TEACHERS ---------------- */}

      <div style={{ background: "linear-gradient(135deg, #f3e8ff 0%, #fef3f8 50%, #e0f2fe 100%)" }} className="py-16">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">

            <div className="text-4xl font-bold text-gray-900 mb-4">
              Learn from Top Teachers
            </div>

            <div className="text-gray-600 text-base">
              Expert instructors who make learning fun and engaging for every child
            </div>

          </div>

          <div className="flex gap-6 overflow-x-auto pb-4">

            {teachers.map((teacher, i) => (
              <TeacherCard key={i} teacher={teacher} />
            ))}

          </div>

        </div>

      </div>

      {/* ---------------- COURSES SLIDER ---------------- */}

      <div style={{ background: "linear-gradient(135deg, #fce7f3 0%, #dbeafe 50%, #e0e7ff 100%)" }} className="py-16">

        <div className="max-w-7xl mx-auto px-4 relative">

          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Popular Courses</h2>
            <p className="text-gray-600">Hand-picked courses from our best teachers</p>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4"
          >

            {courses.map((item, i) => (
              <CourseCard key={i} selling={i === 0} />
            ))}

          </div>

          {/* Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-all duration-200 border border-gray-300 z-10"
          >
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

      </div>

    </div>
  );
}