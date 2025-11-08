import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[92vh] pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white dark:from-neutral-950/70 dark:via-neutral-950/30 dark:to-neutral-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div className="py-12">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight"
            >
              IKATAN KELUARGA TEKNIK ELEKTRONIKA
            </motion.h1>
            <TypingEffect text="Wadah komunikasi, dokumentasi, dan promosi kegiatan organisasi." />
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#acara" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-500">
                Lihat Kegiatan Kami
              </a>
              <a href="#tentang" className="inline-flex items-center rounded-md border border-black/10 dark:border-white/10 px-5 py-3 hover:bg-black/5 dark:hover:bg-white/5">
                Tentang IKTE
              </a>
            </div>
          </div>

          {/* Carousel placeholder images */}
          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 backdrop-blur">
            <AutoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

function TypingEffect({ text }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300"
    >
      <span className="[--d:8s] inline-flex overflow-hidden">
        {text.split('').map((ch, i) => (
          <span
            key={i}
            className="animate-[typing_var(--d)_steps(35)_1_both] [animation-delay:calc(25ms*var(--i))]"
            style={{ ['--i']: i }}
          >
            {ch}
          </span>
        ))}
      </span>
    </motion.p>
  );
}

function AutoCarousel() {
  const images = [
    'https://images.unsplash.com/photo-1520975922284-85bd5d1a8ba0?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
  ];
  return (
    <div className="h-full w-full">
      <div className="relative h-full w-full">
        <div className="absolute inset-0">
          <motion.div
            className="flex h-full w-[300%]"
            animate={{ x: ['0%', '-100%', '-200%', '0%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          >
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Slide ${idx + 1}`}
                className="h-full w-1/3 object-cover"
                loading="lazy"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
