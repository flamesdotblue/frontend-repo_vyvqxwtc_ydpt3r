import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(103,63,215,0.25)_0%,rgba(255,115,179,0.15)_35%,rgba(255,166,0,0.12)_60%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-24 pb-28 sm:pt-28 sm:pb-36 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 dark:bg-white/10 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-100 shadow-sm backdrop-blur">
              <Zap size={14} className="text-amber-500" />
              AI voice agent for modern teams
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Automate conversations with an intelligent voice agent
            </h1>
            <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
              AuraVoice handles inbound calls, schedules meetings, and answers FAQs with a natural, brand‑aligned tone — available 24/7.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#signup" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium hover:opacity-90 transition">
                Start free trial
                <ArrowRight size={16} />
              </a>
              <a href="#pricing" className="px-5 py-3 rounded-md border border-neutral-300/60 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">
                See pricing
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
              <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-500" /> SOC 2 Type II</div>
              <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-700" />
              <div>No credit card required</div>
            </div>
          </div>

          <div className="relative hidden lg:block aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_60px_-15px_rgba(99,102,241,0.45)]" />
        </div>
      </div>
    </section>
  );
}
