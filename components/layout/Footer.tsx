import Link from 'next/link';

const productLinks = [
  { label: 'E3 Orbit Cabin', href: '/products/e3-orbit-cabin' },
  { label: 'E5 Nova Pod', href: '/products/e5-nova-pod' },
  { label: 'E7 Stellar Lodge', href: '/products/e7-stellar-lodge' },
  { label: 'F5 Dune Pod', href: '/products/f5-dune-pod' },
  { label: 'F7 Ridge Cabin', href: '/products/f7-ridge-cabin' },
  { label: 'Zenith Twin', href: '/products/zenith-twin-double-layer' },
];

const moreProducts = [
  { label: 'N7 Forest Cabin', href: '/products/n7-forest-cabin' },
  { label: 'H7 Meadow Pod', href: '/products/h7-meadow-pod' },
  { label: 'H3 Steam Pod', href: '/products/h3-steam-pod' },
  { label: 'Custom Builds', href: '/#customize' },
];

const companyLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Get a Quote', href: '/#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#060e18] text-slate-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-heading text-white font-extrabold text-xl tracking-widest uppercase mb-3">
              FLOWER CAPSULE
            </div>
            <p className="text-sm leading-relaxed mb-3">
              Jiangsu Flower Smart Technology Co., Ltd — modular capsule homes
              manufactured in Changzhou, Jiangsu, China.
            </p>
            <p className="text-xs text-slate-500">
              ridoyrkr@outlook.com &middot; +86 132 2252 5102
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-white font-bold text-base tracking-wider uppercase mb-4">
              Products
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Models */}
          <div>
            <h4 className="font-heading text-white font-bold text-base tracking-wider uppercase mb-4">
              More Models
            </h4>
            <ul className="space-y-2">
              {moreProducts.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-white font-bold text-base tracking-wider uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2025 Jiangsu Flower Smart Technology Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/8613222525102"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:text-emerald-400 transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-slate-600">&middot;</span>
            <span className="text-xs text-slate-500">Changzhou, Jiangsu, China</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
