'use client';

import { useState } from 'react';
import { ContactFormData } from '@/types';

const productOptions = [
  'E3 — Orbit Cabin (50㎡, 2F)',
  'E5 — Nova Pod (28㎡)',
  'E7 — Stellar Lodge (38㎡)',
  'F5 — Dune Pod (28㎡)',
  'F7 — Ridge Cabin (38㎡)',
  'Zenith Twin — Double Layer',
  'N7 — Forest Cabin (Apple)',
  'H7 — Meadow Pod (Apple)',
  'H3 — Steam Pod (Sauna)',
  'Custom / Bespoke Build',
];

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    product: '',
    units: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', product: '', units: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="text-white">
            <span className="inline-block bg-emerald-600/20 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
              Contact Us
            </span>
            <h2 className="font-heading text-5xl lg:text-6xl font-extrabold mb-5">
              Get in Touch
            </h2>
            <p className="text-slate-400 leading-relaxed mb-10 max-w-sm">
              Product enquiries, custom project briefs, or general questions —
              we aim to reply within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: '✉️', label: 'Email', val: 'ridoyrkr@outlook.com' },
                { icon: '📞', label: 'Phone / WhatsApp', val: '+86 132 2252 5102' },
                { icon: '📍', label: 'Address', val: 'Changzhou, Jiangsu, China' },
              ].map((c) => (
                <div key={c.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-0.5">{c.label}</div>
                    <div className="text-white font-medium">{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="font-heading text-2xl font-bold text-[#0d1b2a] mb-6">
              Send an Enquiry
            </h3>

            {status === 'success' ? (
              <div className="alert alert-success rounded-2xl">
                <span>✅ Enquiry sent! We&apos;ll reply within 24 hours.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label pb-1">
                      <span className="label-text text-sm font-medium text-slate-600">Your Name *</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="input input-bordered w-full rounded-xl border-slate-200 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label pb-1">
                      <span className="label-text text-sm font-medium text-slate-600">Email Address *</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="input input-bordered w-full rounded-xl border-slate-200 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label pb-1">
                      <span className="label-text text-sm font-medium text-slate-600">Product Interest</span>
                    </label>
                    <select
                      id="contact-product"
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="select select-bordered w-full rounded-xl border-slate-200 focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="">Select a model...</option>
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label pb-1">
                      <span className="label-text text-sm font-medium text-slate-600">Number of Units</span>
                    </label>
                    <input
                      id="contact-units"
                      type="text"
                      name="units"
                      placeholder="e.g. 5–10"
                      value={form.units}
                      onChange={handleChange}
                      className="input input-bordered w-full rounded-xl border-slate-200 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text text-sm font-medium text-slate-600">Tell us about your project</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Location, use case (resort, glamping, residential...), timeline, budget range, any special requirements..."
                    value={form.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full rounded-xl border-slate-200 focus:border-emerald-500 focus:outline-none resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="alert alert-error rounded-xl text-sm">
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn w-full bg-[#0d1b2a] hover:bg-emerald-700 text-white border-0 rounded-xl py-3 font-semibold text-base transition-all hover:scale-[1.02] disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <span className="loading loading-spinner loading-sm" />
                  ) : (
                    'Send Enquiry →'
                  )}
                </button>
                <p className="text-center text-slate-400 text-xs">
                  We reply within 24 hours &middot; All enquiries are confidential
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
