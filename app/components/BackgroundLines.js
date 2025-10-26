export default function BackgroundLines() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            style={{
              top: `${i * 5}%`,
              left: 0,
              right: 0,
              transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)`
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"
            style={{
              left: `${i * 5}%`,
              top: 0,
              bottom: 0,
              transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)`
            }}
          />
        ))}
      </div>
    </div>
  );
}