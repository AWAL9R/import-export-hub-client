import Marquee from "react-fast-marquee";

const partners = [
  { name: "FedEx", logo: "/logos/fedex-logo.jpg" },
  { name: "DHL", logo: "/logos/dhl-logo.png" },
  { name: "UPS", logo: "/logos/ups-logo.png" },
  { name: "Maersk", logo: "/logos/maersk-logo.png" },
  { name: "Amazon", logo: "/logos/amazon-logo.png" },
  { name: "Alibaba", logo: "/logos/alibaba-logo.png" }
];

export default function TrustedBy() {
  return (
    <section className="bg-base-100 border border-base-300 py-12 px-4 rounded-xl mspace-both">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Trusted by Global Traders & Partners
      </h2>
      <p className="text-center text-sm opacity-70 mb-10">
        Join thousands of businesses expanding globally
      </p>

      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {partners.map((p, i) => (
          <div key={i} className="mx-8 flex items-center justify-center w-40 h-20 bg-white rounded-xl shadow">
            <img
              src={p.logo}
              alt={p.name}
              className="max-h-12 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
