import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-neutral-900 dark:text-white">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 grid place-items-center text-white">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight">AuraVoice AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600 dark:text-neutral-300">
            <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition">Features</a>
            <a href="#customers" className="hover:text-neutral-900 dark:hover:text-white transition">Customers</a>
            <a href="#pricing" className="hover:text-neutral-900 dark:hover:text-white transition">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#login" className="px-4 py-2 rounded-md text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Log in</a>
            <a href="#signup" className="px-4 py-2 rounded-md text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition">Start free</a>
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-neutral-700 dark:text-neutral-200">
              <a href="#features" className="px-3 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800">Features</a>
              <a href="#customers" className="px-3 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800">Customers</a>
              <a href="#pricing" className="px-3 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800">Pricing</a>
              <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-2" />
              <a href="#login" className="px-3 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800">Log in</a>
              <a href="#signup" className="px-3 py-2 rounded bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">Start free</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
