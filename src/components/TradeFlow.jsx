const steps = [
  { id: "01", title: "List Your Product", desc: "Upload product, HS code & target price" },
  { id: "02", title: "AI Trade Matching", desc: "We find verified buyers & suppliers worldwide" },
  { id: "03", title: "Ship & Get Paid", desc: "Logistics, documents & payments handled" }
];

export default function TradeFlow() {
  return (
    <>
    <h2 className='text-center font-semibold mspace-bottom'>How it Works</h2>
    <section className="relative grid md:grid-cols-3 gap-10">
      {steps.map((s, i) => (
        <div
          key={i}
          className="relative bg-base-100 backdrop-blur border border-base-300 rounded-2xl p-8 hover:-translate-y-2 transition"
        >
          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-primary text-primary-content flex items-center justify-center font-bold">
            {s.id}
          </div>
          <h3 className="text-xl font-semibold mt-6">{s.title}</h3>
          <p className="mt-3 text-sm opacity-70">{s.desc}</p>
        </div>
      ))}
    </section>
    </>
  );
}
