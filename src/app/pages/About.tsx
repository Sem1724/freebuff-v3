import { ArrowUpRight } from 'lucide-react'

import { experience, site } from '../../data/site'
import { Lines, Parallax, Reveal } from '../components/motion'
import { asset } from '../lib/asset'

export function About() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Lines as="h1" className="font-display text-balance text-[clamp(44px,7.5vw,112px)]" lines={['Desainer grafis,', 'kadang perancang huruf']} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <Reveal>
          <Parallax src={asset('images/portrait.jpg')} alt={site.name} className="aspect-[3/4] rounded-image" strength={6} />
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="link-draw inline-flex items-center gap-1 text-muted hover:text-fg">
                  {s.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <div>
          <Reveal className="text-pretty text-[19px] leading-relaxed sm:text-[22px]">
            <p>
              Saya mulai dari menggambar huruf, sempat belajar kode, dan di antaranya menemukan bahwa keduanya pekerjaan yang sama: memilih apa yang penting, lalu membuatnya jelas.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-muted">
            <p>
              Saya pernah bekerja in-house, memimpin tim, dan lima tahun terakhir bekerja mandiri bersama pendiri merek, studio interior, dan beberapa label musik. Benang merahnya proyek di mana desain dan produksi bukan dua fase terpisah, dan ada satu orang yang peduli pada keduanya.
            </p>
            <p>
              Saya suka umpan balik yang cepat, isi yang nyata, dan merilis sesuatu sebelum sempurna. Saya tidak suka presentasi tentang presentasi. Di luar kerja, saya biasanya sedang bersepeda di jalan menanjak atau mencetak sesuatu dengan tangan.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <h2 className="text-[14px] text-muted">Pengalaman</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {experience.map((e) => (
                <li key={e.title} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="text-[14px] tabular-nums text-faint">{e.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{e.title}</span>
                    <span className="block text-[14.5px] text-muted">{e.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.2} className="mt-16 grid grid-cols-3 gap-6">
            {[
              ['10', 'tahun'],
              ['64', 'proyek selesai'],
              ['3', 'penghargaan'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-[52px] leading-none sm:text-[72px]">{value}</p>
                <p className="mt-2 text-[14px] text-muted">{label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </article>
  )
}
