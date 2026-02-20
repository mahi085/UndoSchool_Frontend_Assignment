import { useState } from "react";

const ageGroups = [
  { label: "1-2\nYears",  color: "#eab308" },  // yellow
  { label: "2-3\nYears",  color: "#eab308" },
  { label: "3-4\nYears",  color: "#eab308" },
  { label: "4-5\nYears",  color: "#f97316" },  // orange
  { label: "5-6\nYears",  color: "#f97316" },
  { label: "6-7\nYears",  color: "#f97316" },
  { label: "7-8\nYears",  color: "#ec4899" },  // pink
  { label: "8-9\nYears",  color: "#ec4899" },
  { label: "9-10\nYears", color: "#ec4899" },
  { label: "10-11\nYears",color: "#ec4899" },
  { label: "11-12\nYears",color: "#ec4899" },
  { label: "12-13\nYears",color: "#22c55e" },  // green
  { label: "13-14\nYears",color: "#22c55e" },
  { label: "14-15\nYears",color: "#22c55e" },
  { label: "15-16\nYears",color: "#22c55e" },
  { label: "16-17\nYears",color: "#06b6d4" },  // cyan
  { label: "17-18\nYears",color: "#06b6d4" },
  { label: "18-19\nYears",color: "#06b6d4" },
  { label: "19-20\nYears",color: "#06b6d4" },
];

export default function AgeSelector() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="w-full py-14 px-4" style={{ background: "linear-gradient(135deg, #faf5ff 0%, #fff 40%, #f0fdf4 100%)" }}>
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="font-bold text-gray-900" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
          How Old Are You? 🎯
        </h2>
      </div>
      {/* Subheading */}
      <p className="text-center text-gray-600 mb-10" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
        Pick your age and find the perfect courses just for you! ✨
      </p>

      {/* Age Cards — scrollable on mobile, centered grid on desktop */}
      <div className="flex justify-center">
        <div className="overflow-x-auto w-full pb-3 md:overflow-visible" style={{ scrollBehavior: 'smooth' }}>
          <div className="flex gap-2 sm:gap-3 w-max mx-auto px-2 md:flex-wrap md:justify-center md:w-full">
            {ageGroups.map((age, i) => {
              const isSelected = selected === i;
              const [range, unit] = age.label.split("\n");
              return (
                <button
                  key={i}
                  onClick={() => setSelected(i === selected ? null : i)}
                  className="flex flex-col items-center justify-center rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 flex-shrink-0 touch-manipulation"
                  style={{
                    width: "68px",
                    height: "60px",
                    border: `2px solid ${age.color}`,
                    background: isSelected ? age.color : "white",
                    color: isSelected ? "white" : age.color,
                    boxShadow: isSelected ? `0 6px 16px ${age.color}66` : "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <span className="font-bold leading-tight" style={{ fontSize: "0.8rem" }}>{range}</span>
                  <span className="leading-tight" style={{ fontSize: "0.75rem" }}>{unit}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}