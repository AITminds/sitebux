'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Главная' },
    { href: '/accounting', label: 'Бухгалтерские услуги' },
    { href: '/legal', label: 'Юридические услуги' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="relative bg-[#120907]/80 backdrop-blur-2xl shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)]">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D5A329]/25 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 lg:h-20">
            <div className="flex items-center">
              <Link href="/" className="group flex items-center">
                <span className="gold-text text-xl lg:text-2xl font-bold tracking-tight transition-opacity duration-300 group-hover:opacity-80">
                  Баланс и право
                </span>
              </Link>
            </div>

            <div className="hidden sm:flex sm:items-center sm:gap-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative flex h-full items-center px-4 lg:px-5 text-[17px] font-medium tracking-wide transition-colors duration-300
                      after:absolute after:inset-x-4 after:bottom-0 after:h-[2px] after:origin-left after:rounded-full
                      after:bg-gradient-to-r after:from-[#D5A329] after:to-[#E4BD55]
                      after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${isActive
                        ? 'text-[#F3EEE7] after:scale-x-100'
                        : 'text-[#A99B8C] after:scale-x-0 hover:text-[#F3EEE7] hover:after:scale-x-100'
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-xl border border-[#D5A329]/20 text-[#A99B8C] hover:text-[#F3EEE7] hover:border-[#D5A329]/40 hover:bg-[#D5A329]/5 focus:outline-none focus:ring-2 focus:ring-[#D5A329]/30 transition-all duration-300"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Открыть меню</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="border-t border-[#D5A329]/10 bg-[#120907]/95 backdrop-blur-2xl px-4 pt-3 pb-5 space-y-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#D5A329]/10 text-[#F3EEE7] border border-[#D5A329]/25'
                    : 'border border-transparent text-[#A99B8C] hover:bg-white/[0.03] hover:border-[#D5A329]/15 hover:text-[#F3EEE7]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
