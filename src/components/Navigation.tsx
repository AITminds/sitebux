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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a100c]/90 backdrop-blur-xl border-b border-[#3d322b]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold gold-text">
                BuxLegal
              </Link>
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium transition-all duration-300 ${
                    isActive
                      ? 'border-amber-400/80 text-white'
                      : 'border-transparent text-[#c4b8a8] hover:text-[#d9ccb8] hover:border-[#3d322b]'
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
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#c4b8a8] hover:text-[#d9ccb8] hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400/40"
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

      <div className="sm:hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1 bg-[#1a100c]/95 backdrop-blur-xl">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block pl-3 pr-4 py-3 border-l-4 text-base font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-amber-400/5 border-amber-400/80 text-white'
                    : 'border-transparent text-[#c4b8a8] hover:bg-white/5 hover:border-[#3d322b] hover:text-[#d9ccb8]'
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
