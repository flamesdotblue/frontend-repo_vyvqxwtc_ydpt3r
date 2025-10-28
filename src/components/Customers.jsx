export default function Customers() {
  const logos = [
    { name: 'Notion', text: 'NOTION' },
    { name: 'Linear', text: 'LINEAR' },
    { name: 'Vercel', text: 'VERCEL' },
    { name: 'Figma', text: 'FIGMA' },
    { name: 'Intercom', text: 'INTERCOM' },
    { name: 'Shopify', text: 'SHOPIFY' },
  ];

  return (
    <section id="customers" className="py-16 sm:py-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-neutral-500 dark:text-neutral-400">Trusted by product‑led teams</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="h-12 rounded-md border border-neutral-200/60 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 backdrop-blur grid place-items-center text-neutral-800 dark:text-neutral-200 font-semibold tracking-widest text-xs"
            >
              {logo.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
