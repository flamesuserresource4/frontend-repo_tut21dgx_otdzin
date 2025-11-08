import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, LogIn } from 'lucide-react';

const navItems = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang Kami' },
  { id: 'acara', label: 'Acara / Event' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'komunitas', label: 'Komunitas / Divisi' },
  { id: 'kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Persist theme
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = stored ? stored === 'dark' : prefersDark;
    setDark(initialDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#beranda" className="font-semibold tracking-tight text-lg">
            IKTE
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 px-3 py-2 text-white text-sm shadow hover:opacity-90">
              <LogIn size={16} />
              Masuk
            </button>
            <button
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/10"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/90 dark:bg-neutral-900/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 px-3 py-2 text-white text-sm shadow">
              <LogIn size={16} />
              Masuk
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
