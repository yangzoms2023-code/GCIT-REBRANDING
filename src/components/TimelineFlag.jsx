export default function TimelineFlag({ x, y, year, visible }) {
  return (
    <div
      className={`absolute transition-all duration-700 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      }`}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm shadow-md">
        {year}
      </div>
    </div>
  );
}