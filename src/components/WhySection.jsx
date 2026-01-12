const features = [
  { title: "Live Market Data", desc: "Track global demand & pricing in real time" },
  { title: "Verified Partners", desc: "Trade only with trusted buyers & suppliers" },
  { title: "Smart Logistics", desc: "Auto shipping, tracking & route optimization" },
  { title: "Compliance Tools", desc: "Invoices, HS codes, export docs made easy" },
  { title: "AI Trade Matching", desc: "Find the best deals across borders instantly" }
];

export default function WhySection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <div key={i} className="card bg-base-100 border border-base-300 rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-primary">{f.title}</h3>
          <p className="mt-2 text-sm opacity-70">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
