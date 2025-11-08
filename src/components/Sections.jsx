import { Calendar, Image as ImageIcon, Users, Info, Mail } from 'lucide-react';

export default function Sections() {
  return (
    <>
      {/* Tentang Kami */}
      <section id="tentang" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight flex items-center gap-2"><Info size={22} /> Tentang Kami</h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Himpunan IKTE merupakan organisasi mahasiswa yang menjadi wadah komunikasi, dokumentasi, dan promosi kegiatan akademik maupun non-akademik di lingkungan Teknik Elektronika.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div className="rounded-xl border border-black/10 dark:border-white/10 p-5">
                  <h3 className="font-semibold">Visi</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Menjadi organisasi yang kolaboratif, inovatif, dan berdampak nyata bagi civitas akademika.</p>
                </div>
                <div className="rounded-xl border border-black/10 dark:border-white/10 p-5">
                  <h3 className="font-semibold">Misi</h3>
                  <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                    <li>Mengembangkan minat dan bakat mahasiswa.</li>
                    <li>Membangun budaya riset dan karya.</li>
                    <li>Memperluas jejaring dan kolaborasi.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Struktur Organisasi</h3>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {['Ketua', 'Wakil', 'Sekretaris', 'Bendahara', 'Humas', 'Acara', 'Ristek', 'Media'].map((role) => (
                  <div key={role} className="rounded-lg border border-black/10 dark:border-white/10 p-3 text-center">
                    <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500" />
                    <p className="mt-2 text-sm font-medium">{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acara/Event */}
      <section id="acara" className="py-20 bg-gray-50 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Calendar size={22} />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Acara & Arsip</h2>
          </div>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Jadwal kegiatan mendatang dan rangkuman kegiatan sebelumnya.</p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
              <h3 className="font-medium">Kegiatan Mendatang</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex justify-between"><span>Seminar IoT 2025</span><span className="text-gray-500">12 Des</span></li>
                <li className="flex justify-between"><span>Pelatihan PCB</span><span className="text-gray-500">20 Jan</span></li>
                <li className="flex justify-between"><span>Open Recruitment</span><span className="text-gray-500">Feb</span></li>
              </ul>
            </div>
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
              <h3 className="font-medium">Google Calendar</h3>
              <div className="mt-3 aspect-video w-full overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
                <iframe
                  title="Google Calendar IKTE"
                  src="https://calendar.google.com/calendar/embed?src=address%40example.com&ctz=Asia%2FJakarta"
                  className="h-full w-full"
                  frameBorder="0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section id="galeri" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <ImageIcon size={22} />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Galeri Kegiatan</h2>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {['Semua', '2023', '2024', 'Akademik', 'Pengabdian'].map((f) => (
              <button key={f} className="px-3 py-1.5 text-sm rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
                {f}
              </button>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <img
                key={i}
                src={`https://picsum.photos/seed/ikte${i}/600/400`}
                alt={`Galeri ${i + 1}`}
                className="h-40 w-full object-cover rounded-lg"
              />
            ))}
          </div>
          <div className="mt-8">
            <input
              type="text"
              placeholder="Cari kegiatan..."
              className="w-full sm:w-80 rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </section>

      {/* Komunitas/Divisi */}
      <section id="komunitas" className="py-20 bg-gray-50 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Users size={22} />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Komunitas / Divisi</h2>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Riset & Teknologi', desc: 'Eksplorasi IoT, AI, dan robotika.' },
              { name: 'Media & Informasi', desc: 'Konten, desain, dan dokumentasi.' },
              { name: 'Kaderisasi', desc: 'Pengembangan anggota dan kepanitiaan.' },
              { name: 'Kewirausahaan', desc: 'Unit usaha dan kemitraan.' },
              { name: 'Humas', desc: 'Jaringan alumni dan eksternal.' },
              { name: 'Kerohanian', desc: 'Kegiatan sosial dan keagamaan.' },
            ].map((d) => (
              <div key={d.name} className="rounded-xl border border-black/10 dark:border-white/10 p-5">
                <div className="h-32 w-full rounded-lg bg-gradient-to-br from-indigo-500/70 to-blue-500/70" />
                <h3 className="mt-3 font-semibold">{d.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Mail size={22} />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Kontak</h2>
          </div>
          <div className="mt-6 grid lg:grid-cols-2 gap-8">
            <form className="rounded-xl border border-black/10 dark:border-white/10 p-6 space-y-4">
              <div>
                <label className="text-sm">Nama</label>
                <input type="text" className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm">Pesan</label>
                <textarea rows="4" className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <button type="button" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-2.5 text-white shadow hover:bg-indigo-500">Kirim</button>
            </form>

            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">Terhubung dengan kami melalui media sosial atau email resmi.</p>
              <ul className="space-y-2 text-sm">
                <li><a href="https://instagram.com" className="underline hover:text-indigo-600">Instagram</a></li>
                <li><a href="mailto:ikte@example.com" className="underline hover:text-indigo-600">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
