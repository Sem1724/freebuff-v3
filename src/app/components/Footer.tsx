import { ArrowUpRight } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { site } from '../../data/site'
import { Lines, Magnetic, Reveal } from './motion'
import { useLocalTime } from './Nav'

export function Footer() {
  const time = useLocalTime()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [error, setError] = useState('')

  // GitHub Pages tidak punya server. Jika VITE_FORM_ENDPOINT diisi (mis. URL
  // Formspree), pesan dikirim ke sana. Jika kosong, aplikasi email Anda terbuka
  // dengan pesan yang sudah terisi.
  async function submit(e: FormEvent) {
    e.preventDefault()
    setState('sending')
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined
    if (!endpoint) {
      const subject = encodeURIComponent(`Proyek baru dari ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      setState('done')
      return
    }
    try {
      const response = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json', accept: 'application/json' }, body: JSON.stringify(form) })
      if (response.ok) setState('done')
      else {
        setState('error')
        setError('Ada yang salah, coba lagi.')
      }
    } catch {
      setState('error')
      setError('Ada yang salah, coba lagi.')
    }
  }

  const field = 'h-14 w-full rounded-control border border-line-strong bg-transparent px-5 text-[15px] placeholder:text-faint transition-colors focus:border-fg focus:outline-none'

  return (
    <footer id="contact" className="mt-32 border-t border-line sm:mt-44">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <Lines as="h2" className="font-display text-[clamp(48px,8vw,120px)]" lines={['Mari bikin', <>sesuatu yang <span className="text-accent">bagus</span></>]} />
            <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Magnetic>
                <a href={`mailto:${site.email}`} className="inline-flex h-14 items-center gap-2 rounded-[16px] bg-fg px-7 text-[16px] font-medium text-bg transition-colors hover:bg-[#2b2925]">
                  {site.email}
                  <ArrowUpRight className="size-4" />
                </a>
              </Magnetic>
              <p className="text-[14px] text-muted">
                {site.available ? 'Menerima proyek untuk kuartal berikutnya' : 'Jadwal sedang penuh'}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            {state === 'done' ? (
              <div className="flex h-full min-h-[320px] flex-col justify-center rounded-card bg-surface-2/60 p-8">
                <p className="font-display text-[36px]">Terima kasih</p>
                <p className="mt-2 text-[15px] text-muted">Semua pesan saya baca sendiri dan dibalas dalam dua hari.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input required placeholder="Nama Anda" className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  <input required type="email" placeholder="Email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <textarea
                  required
                  placeholder="Ceritakan sedikit tentang proyek Anda"
                  className={`${field} h-auto min-h-[140px] resize-none py-4`}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <button type="submit" disabled={state === 'sending'} className="h-14 rounded-control border border-fg text-[15px] font-medium transition-colors hover:bg-fg hover:text-bg disabled:opacity-50">
                  Kirim
                </button>
                {state === 'error' && <p className="text-[13px] text-accent">{error}</p>}
              </form>
            )}
          </Reveal>
        </div>

        <div className="mt-24 grid gap-8 border-t border-line pt-8 text-[14px] sm:grid-cols-3">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="link-draw text-muted transition-colors hover:text-fg">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-faint sm:text-center">
            {site.location}, {time}
          </p>
          <p className="text-faint sm:text-right">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  )
}
