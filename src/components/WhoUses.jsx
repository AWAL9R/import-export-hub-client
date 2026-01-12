const users = [
  { role: "Exporters", desc: "Find international buyers instantly" },
  { role: "Importers", desc: "Source verified products globally" },
  { role: "Logistics Partners", desc: "Get shipment & routing requests" },
  { role: "Trade Agents", desc: "Close cross-border deals faster" }
];

export default function WhoUses() {
  return (
    <section className="">
      <h2 className="text-3xl font-semibold text-center mspace-bottom">
        Who Uses Import Export Lab
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {users.map((u, i) => (
          <div
            key={i}
            className="bg-base-100 border border-base-300 rounded-2xl p-6 hover:shadow-lg transition"
          >
            <div className="text-lg font-semibold text-primary">{u.role}</div>
            <p className="mt-2 text-sm opacity-70">{u.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
