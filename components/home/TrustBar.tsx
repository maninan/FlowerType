import { TrustStat } from '@/types';

const stats: TrustStat[] = [
  { value: '9+', label: 'Capsule Models' },
  { value: '100%', label: 'Factory Finished' },
  { value: 'Smart', label: 'Home Built-In' },
  { value: 'Full', label: 'Interior Fit-Out' },
  { value: 'Global', label: 'Shipping' },
];

export default function TrustBar() {
  return (
    <div className="bg-[#0d1b2a] border-y border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal">
              <div className="font-heading text-3xl font-extrabold text-emerald-400 tracking-tight">
                {stat.value}
              </div>
              <div className="text-slate-400 text-xs font-medium mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
