import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    highlight: false,
    features: [
      '100 monthly minutes',
      '1 phone number',
      'Basic voice model',
      'Email support',
    ],
    cta: 'Get started',
  },
  {
    name: 'Pro',
    price: '$49',
    period: 'per month',
    highlight: true,
    features: [
      '3,000 monthly minutes',
      '3 phone numbers',
      'Customizable prompts',
      'CRM integrations',
      'Priority support',
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Scale',
    price: 'Contact us',
    period: '',
    highlight: false,
    features: [
      'Unlimited minutes',
      'Global numbers',
      'Fine-tuned voices',
      'SLA + onboarding',
    ],
    cta: 'Talk to sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Start free and upgrade as you grow. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6 sm:p-8 ${
                tier.highlight
                  ? 'border-indigo-400/60 shadow-[0_10px_60px_-15px_rgba(99,102,241,0.45)]'
                  : 'border-neutral-200/60 dark:border-neutral-800'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{tier.name}</h3>
                {tier.highlight && (
                  <span className="text-xs px-2 py-1 rounded-full bg-indigo-600 text-white">Popular</span>
                )}
              </div>
              <div className="mt-4">
                <div className="text-3xl font-semibold text-neutral-900 dark:text-white">{tier.price}</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">{tier.period}</div>
              </div>

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-200">
                    <Check size={18} className="text-green-500 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.name === 'Scale' ? '#contact' : '#signup'}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition ${
                  tier.highlight
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90'
                    : 'border border-neutral-300/60 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-neutral-500 dark:text-neutral-400">Need a custom plan? <a href="#contact" className="underline decoration-dotted underline-offset-4 hover:text-neutral-700 dark:hover:text-neutral-300">Get in touch</a>.</p>
      </div>
    </section>
  );
}
