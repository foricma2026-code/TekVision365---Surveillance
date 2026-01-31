import { useState } from "react";

// Clean stable website (no pricing, no login, no dashboard)

export type Page = "home" | "services" | "about" | "contact";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="pt-24 bg-gray-50 min-h-screen px-6 text-gray-900">
      <Navbar setPage={setPage} />

      {page === "home" && <Hero goContact={() => setPage("contact")} />}
      {page === "services" && <Services />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}

      <footer className="text-center py-6 text-sm text-gray-500">
        TekVision365 Surveillance • © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

function Navbar({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <nav className="fixed top-0 w-full bg-white shadow flex justify-center gap-6 py-4 z-50">
      {"home services about contact".split(" ").map((p) => (
        <button
          key={p}
          onClick={() => setPage(p as Page)}
          className="font-semibold hover:text-emerald-600 transition"
        >
          {p.toUpperCase()}
        </button>
      ))}
    </nav>
  );
}

function Hero({ goContact }: { goContact: () => void }) {
  return (
    <section className="max-w-5xl mx-auto text-center py-28">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Smart CCTV Monitoring & Compliance
      </h1>
      <p className="mb-10 text-lg text-gray-600">
        Real-time surveillance intelligence for modern businesses
      </p>
      <button
        onClick={goContact}
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl"
      >
        Get a Quote
      </button>
    </section>
  );
}

function Services() {
  const items = [
    "24/7 Camera & DVR Health Monitoring",
    "Opening & Closing Compliance Verification",
    "Policy & Safety Oversight",
    "Incident Detection & Escalation",
    "Audit-Ready Executive Reporting",
    "Centralized Remote Monitoring",
  ];

  return (
    <section className="max-w-6xl mx-auto py-24 grid md:grid-cols-3 gap-6">
      {items.map((i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
        >
          <h3 className="font-bold text-emerald-700 mb-2">{i}</h3>
          <p className="text-gray-600">Professional enterprise surveillance solution</p>
        </div>
      ))}
    </section>
  );
}

function About() {
  return (
    <section className="max-w-4xl mx-auto py-24 text-center">
      <h2 className="text-4xl font-bold mb-6">About TekVision365</h2>
      <p className="text-gray-600 text-lg">
        TekVision365 Surveillance provides centralized monitoring, compliance
        enforcement, and executive reporting across multi-location operations.
        We act as your single point of accountability for surveillance
        performance and operational discipline.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="max-w-4xl mx-auto py-24">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
      <p className="text-center mb-6 text-emerald-700 font-medium">
        📧 tekvysion365surveillance@gmail.com
      </p>
      <form className="grid gap-4 max-w-md mx-auto">
        <input className="p-3 rounded-xl border" placeholder="Your Name" required />
        <input className="p-3 rounded-xl border" placeholder="Your Email" required />
        <textarea className="p-3 rounded-xl border" placeholder="Message" rows={4} />
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl">
          Send Message
        </button>
      </form>
    </section>
  );
}
