'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ContactFormData } from '@/types';
import { products } from '@/data/products';

const productOptions = [
  ...products.map((p) => `${p.model} — ${p.name.split(' — ')[0]}`),
  'Custom / Bespoke Build',
];

function ContactForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    product: '',
    units: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const modelParam = searchParams.get('model') || searchParams.get('product');
    if (modelParam) {
      const matched = productOptions.find((opt) =>
        opt.toLowerCase().includes(modelParam.toLowerCase())
      );
      setForm((prev) => ({ ...prev, product: matched ?? modelParam }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
                  <div
                    aria-hidden="true"
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg flex-shrink-0"
                  >
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
              <div className="space-y-4">
                <div className="alert alert-success rounded-2xl">
                  <span>Enquiry sent! We&apos;ll reply within 24 hours.</span>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn w-full btn-outline border-slate-200 text-slate-600 rounded-xl"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label htmlFor="contact-name" className="label pb-1">
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
                    <label htmlFor="contact-email" className="label pb-1">
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
                    <label htmlFor="contact-product" className="label pb-1">
                      <span className="label-text text-sm font-medium text-slate-600">Product Interest *</span>
                    </label>
                    <select
                      id="contact-product"
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      required
                      className="select select-bordered w-full rounded-xl border-slate-200 focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="">Select a model...</option>
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-control">
                    <label htmlFor="contact-units" className="label pb-1">
                      <span className="label-text text-sm font-medium text-slate-600">Number of Units *</span>
                    </label>
                    <input
                      id="contact-units"
                      type="text"
                      name="units"
                      placeholder="e.g. 5–10"
                      value={form.units}
                      onChange={handleChange}
                      required
                      className="input input-bordered w-full rounded-xl border-slate-200 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label htmlFor="contact-message" className="label pb-1">
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
                  disabled={status === 'loading' || !form.name || !form.email || !form.product || !form.units}
                  className="btn w-full bg-[#0d1b2a] hover:bg-emerald-700 text-white border-0 rounded-xl py-3 font-semibold text-base transition-all hover:scale-[1.02] disabled:opacity-50 disabled:grayscale-[0.5] disabled:cursor-not-allowed"
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

export default function ContactSection() {
  return (
    <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-white/50">Loading form...</div>}>
      <ContactForm />
    </Suspense>
  );
}
