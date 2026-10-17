import { useState } from 'react'

const colors = { bg: '#faf6f0', text: '#3b2f2a', accent: '#a0674b', muted: '#7a6a60', card: '#ffffff' }

const events = [
  { title: 'Akad Nikah', date: 'Sabtu, 12 Desember 2026', time: '08.00 – 10.00 WIB', place: 'Masjid Agung, Jakarta' },
  { title: 'Resepsi', date: 'Sabtu, 12 Desember 2026', time: '11.00 – 14.00 WIB', place: 'Gedung Serbaguna, Jakarta' },
]

export default function App() {
  const [name, setName] = useState('')
  const [attend, setAttend] = useState('hadir')
  const [sent, setSent] = useState(false)

  return (
    <main style={{ fontFamily: 'Georgia, serif', background: colors.bg, color: colors.text, minHeight: '100vh' }}>
      <section style={{ textAlign: 'center', padding: '96px 24px 64px', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <p style={{ letterSpacing: 4, textTransform: 'uppercase', color: colors.muted, margin: 0 }}>Undangan Pernikahan</p>
        <h1 style={{ fontSize: 56, margin: 0, fontWeight: 400 }}>Rina &amp; Arief</h1>
        <p style={{ color: colors.accent, fontSize: 20, margin: 0 }}>12 · 12 · 2026</p>
        <p style={{ maxWidth: 520, lineHeight: 1.7, color: colors.muted, margin: 0 }}>
          Dengan memohon rahmat Tuhan Yang Maha Esa, kami bermaksud menyelenggarakan pernikahan kami dan mengundang Anda untuk hadir.
        </p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, maxWidth: 800, margin: '0 auto', padding: '0 24px 64px' }}>
        {events.map((e) => (
          <div key={e.title} style={{ background: colors.card, borderRadius: 12, padding: 32, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
            <h2 style={{ margin: 0, fontWeight: 400, color: colors.accent }}>{e.title}</h2>
            <p style={{ margin: 0 }}>{e.date}</p>
            <p style={{ margin: 0, color: colors.muted }}>{e.time}</p>
            <p style={{ margin: 0, color: colors.muted }}>{e.place}</p>
          </div>
        ))}
      </section>

      <section style={{ maxWidth: 480, margin: '0 auto', padding: '0 24px 96px' }}>
        <div style={{ background: colors.card, borderRadius: 12, padding: 32, display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <h2 style={{ margin: 0, fontWeight: 400, textAlign: 'center' }}>Konfirmasi Kehadiran</h2>
          {sent ? (
            <p style={{ textAlign: 'center', color: colors.accent, margin: 0 }}>Terima kasih, {name || 'Tamu'}! Konfirmasi Anda telah tercatat.</p>
          ) : (
            <form onSubmit={(ev) => { ev.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input required placeholder="Nama Anda" value={name} onChange={(ev) => setName(ev.target.value)}
                style={{ padding: 12, borderRadius: 8, border: '1px solid #d8cfc6', fontSize: 16 }} />
              <select value={attend} onChange={(ev) => setAttend(ev.target.value)}
                style={{ padding: 12, borderRadius: 8, border: '1px solid #d8cfc6', fontSize: 16 }}>
                <option value="hadir">Hadir</option>
                <option value="tidak">Tidak Hadir</option>
              </select>
              <button type="submit" style={{ padding: 12, borderRadius: 8, border: 'none', background: colors.accent, color: '#fff', fontSize: 16, cursor: 'pointer' }}>
                Kirim
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
