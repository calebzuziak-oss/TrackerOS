export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-bold mb-4">
          TrackerOS
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Personal Operating System
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="rounded-2xl border border-zinc-800 p-6">
            <h2 className="text-xl font-semibold mb-2">
              Wealth Terminal
            </h2>

            <p className="text-zinc-400">
              Investments, net worth, retirement projections.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6">
            <h2 className="text-xl font-semibold mb-2">
              Tip Tracker
            </h2>

            <p className="text-zinc-400">
              Shift analytics and income tracking.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6">
            <h2 className="text-xl font-semibold mb-2">
              Fitness
            </h2>

            <p className="text-zinc-400">
              Weight, workouts and running.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6">
            <h2 className="text-xl font-semibold mb-2">
              Goals
            </h2>

            <p className="text-zinc-400">
              Financial and personal milestones.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}