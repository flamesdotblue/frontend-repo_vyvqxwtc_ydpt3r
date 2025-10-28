import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Customers from './components/Customers';
import Pricing from './components/Pricing';

function FeatureCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <Hero />

      <section id="features" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Built for real conversations</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300">Everything you need to launch a delightful, on-brand AI voice agent.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard title="Natural speech" desc="Low-latency, human‑like responses that adapt to caller intent and context." />
            <FeatureCard title="Workflow automation" desc="Book meetings, create tickets, and update your tools automatically." />
            <FeatureCard title="Knowledge grounding" desc="Securely ingest your docs and website so answers match your voice and facts." />
            <FeatureCard title="Omnichannel" desc="Route between phone, SMS, and chat while keeping the same conversation." />
            <FeatureCard title="Analytics" desc="Search transcripts, track intent success, and monitor CSAT in real time." />
            <FeatureCard title="Enterprise‑grade" desc="SOC 2, SSO/SAML, role‑based controls, and PII redaction out of the box." />
          </div>
        </div>
      </section>

      <Customers />
      <Pricing />

      <footer className="border-t border-neutral-200/60 dark:border-neutral-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} AuraVoice AI. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
            <a href="#privacy" className="hover:text-neutral-900 dark:hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-neutral-900 dark:hover:text-white">Terms</a>
            <a href="#login" className="hover:text-neutral-900 dark:hover:text-white">Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
