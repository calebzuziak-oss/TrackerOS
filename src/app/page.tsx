export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px"
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          marginBottom: "10px"
        }}
      >
        TrackerOS
      </h1>

      <p
        style={{
          color: "#888",
          marginBottom: "40px"
        }}
      >
        Personal Operating System
      </p>

      <div
        style={{
          display: "grid",
          gap: "20px"
        }}
      >
        <div>
          💰 Wealth Terminal
        </div>

        <div>
          📈 Tip Tracker
        </div>

        <div>
          🏃 Fitness
        </div>

        <div>
          🎯 Goals
        </div>
      </div>
    </main>
  );
}