const items = [
  { k: "120+", v: "Countries Connected" },
  { k: "50K+", v: "Active Traders" },
  { k: "1M+", v: "Shipments Tracked" },
  { k: "99.9%", v: "Trade Accuracy" }
];

export default function GlobalStats() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((i, idx) => (
        <div
          key={idx}
          className="bg-base-100 backdrop-blur border border-base-300 rounded-xl p-8 text-center hover:scale-[1.03] transition"
        >
          <div className="text-3xl md:text-4xl font-bold text-primary">{i.k}</div>
          <div className="mt-2 text-sm tracking-wide uppercase opacity-70">
            {i.v}
          </div>
        </div>
      ))}
    </section>
  );
}
