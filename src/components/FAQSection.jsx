import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  { q: "How do I list my products?", a: "Sign up, create your profile, and upload product details with HS codes." },
  { q: "Is there a verification process?", a: "Yes, all buyers and suppliers are verified before you can trade with them." },
  { q: "How does AI matching work?", a: "Our AI scans global demand and matches you with the best trade partners." },
  { q: "Can I track shipments?", a: "Absolutely! Our platform provides real-time shipment tracking and logistics updates." },
  { q: "What about trade compliance?", a: "We provide tools for documentation, invoices, and export/import regulations." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mspace-bottom">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="border bg-base-100 border-base-300 rounded-2xl p-4 cursor-pointer hover:shadow transition"
            onClick={() => toggle(i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{f.q}</h3>
              {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openIndex === i && (
              <p className="mt-2 text-sm opacity-70">{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
