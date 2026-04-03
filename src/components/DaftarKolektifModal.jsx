import { useState } from 'react';
import { createPortal } from 'react-dom';

const WEBHOOK_URL = 'https://n8n.clev.io/webhook/daftar-kolektif'; // ganti sesuai webhook lo

export default function DaftarKolektifModal() {
  const [open, setOpen]       = useState(false);
  const [step, setStep]       = useState(1); // 1=form utama, 2=input nama tim
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState('');

  // ─── Form state ───────────────────────────────────────
  const [form, setForm] = useState({
    kategori: '',
    asalSekolah: '',
    guruPendamping: '',
    noHpGuru: '',
    email: '',
    jumlahTim: '',
  });

  // Array of teams: each team = [{ nama: '' }, { nama: '' }]
  const [teams, setTeams] = useState([]);

  const openModal = () => {
    setOpen(true);
    setStep(1);
    setSuccess(false);
    setError('');
    setForm({ kategori: '', asalSekolah: '', guruPendamping: '', noHpGuru: '', email: '', jumlahTim: '' });
    setTeams([]);
  };

  const closeModal = () => {
    setOpen(false);
    setSuccess(false);
    setError('');
  };

  // ─── Step 1: form utama ────────────────────────────────
  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleStep1Submit = (e) => {
    e.preventDefault();
    const jml = parseInt(form.jumlahTim);
    if (!form.kategori || !form.asalSekolah || !form.guruPendamping || !form.noHpGuru || !form.email) {
      setError('Semua field wajib diisi.'); return;
    }
    if (!jml || jml < 1 || jml > 50) {
      setError('Jumlah tim harus antara 1–50.'); return;
    }
    setError('');
    // Build teams array sesuai jumlah tim, 1 tim = 2 orang
    const built = Array.from({ length: jml }, (_, ti) => ({
      nama: Array.from({ length: 2 }, (__, pi) => ({ nama: '' }))
    }));
    setTeams(built);
    setStep(2);
  };

  // ─── Step 2: isi nama tiap anggota ─────────────────────
  const handleMemberChange = (teamIdx, personIdx, val) => {
    setTeams(prev => {
      const updated = prev.map((t, ti) =>
        ti === teamIdx
          ? { ...t, nama: t.nama.map((p, pi) => pi === personIdx ? { nama: val } : p) }
          : t
      );
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate all names filled
    for (let ti = 0; ti < teams.length; ti++) {
      for (let pi = 0; pi < teams[ti].nama.length; pi++) {
        if (!teams[ti].nama[pi].nama.trim()) {
          setError(`Nama anggota ${pi + 1} Tim ${ti + 1} belum diisi.`); return;
        }
      }
    }
    setError('');
    setLoading(true);

    const payload = {
      kategori:        form.kategori,
      asal_sekolah:    form.asalSekolah,
      guru_pendamping: form.guruPendamping,
      no_hp_guru:      form.noHpGuru,
      email:           form.email,
      jumlah_tim:      parseInt(form.jumlahTim),
      tim:             teams.map((t, idx) => ({
        tim: idx + 1,
        anggota: t.nama.map(p => p.nama.trim()),
      })),
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok || res.status === 200 || res.status === 201) {
        setSuccess(true);
        setStep(1);
      } else {
        setError('Gagal mengirim. Coba lagi atau hubungi panitia.');
      }
    } catch {
      setError('Koneksi gagal. Periksa internet dan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── TRIGGER BUTTON ── */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '10px 0' }}>
        <button
          className="btn-main fx-slide btn-premium-glow"
          data-hover="Daftar Kolektif Sekarang"
          onClick={openModal}
          style={{ cursor: 'pointer', border: 'none', background: 'none', width: '100%', maxWidth: '400px' }}
        >
          <span style={{ width: '100%', textAlign: 'center' }}>Daftar Kolektif Sekarang</span>
        </button>
      </div>

      {/* ── MODAL OVERLAY ── */}
      {open && createPortal(
        <div
          onClick={(e) => e.target === e.currentTarget && closeModal()}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
            overflowY: 'auto',
          }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #0a0a1e 0%, #0d1730 100%)',
            border: '1px solid rgba(163,255,0,0.25)',
            borderRadius: '20px',
            padding: '36px',
            width: '100%',
            maxWidth: '680px',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
          }}>
            {/* Close */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute', top: '16px', right: '20px',
                background: 'rgba(255,255,255,0.08)', border: 'none',
                color: '#fff', width: '36px', height: '36px',
                borderRadius: '50%', cursor: 'pointer', fontSize: '18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >×</button>

            {/* Header */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'rgba(163,255,0,0.08)',
                border: '1px solid rgba(163,255,0,0.2)',
                borderRadius: '30px', padding: '6px 16px', marginBottom: '12px',
              }}>
                <i className="fa fa-tags" style={{ color: '#a3ff00', fontSize: '13px' }}></i>
                <span style={{ color: '#a3ff00', fontSize: '12px', fontWeight: '700', letterSpacing: '1px' }}>
                  PENDAFTARAN KOLEKTIF SEKOLAH
                </span>
              </div>
              <h3 style={{ color: '#fff', fontWeight: '800', marginBottom: '6px', fontSize: '22px' }}>
                {step === 1 ? 'Data Sekolah & Guru' : `Nama Anggota Tim (${form.jumlahTim} Tim)`}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', margin: 0 }}>
                {step === 1
                  ? 'Isi data sekolah dan guru pendamping terlebih dahulu.'
                  : 'Isi nama 2 anggota untuk setiap tim.'}
              </p>
            </div>

            {/* Step indicator */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
              {[1, 2].map(s => (
                <div key={s} style={{
                  height: '4px', flex: 1, borderRadius: '4px',
                  background: step >= s ? '#a3ff00' : 'rgba(255,255,255,0.1)',
                  transition: 'background 0.3s',
                }} />
              ))}
            </div>

            {/* ── SUCCESS ── */}
            {success && (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '60px', marginBottom: '16px' }}>✅</div>
                <h4 style={{ color: '#a3ff00', marginBottom: '8px' }}>Pendaftaran Terkirim!</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '24px' }}>
                  Tim Clevio akan segera menghubungi Anda melalui nomor yang didaftarkan.
                </p>
                <button
                  onClick={closeModal}
                  style={{
                    background: '#a3ff00', color: '#000', border: 'none',
                    borderRadius: '30px', padding: '12px 32px',
                    fontWeight: '700', cursor: 'pointer', fontSize: '14px',
                  }}
                >Tutup</button>
              </div>
            )}

            {/* ── STEP 1: Form Utama ── */}
            {!success && step === 1 && (
              <form onSubmit={handleStep1Submit}>
                <FieldGroup label="Kategori *" hint="Pilih Kategori Sesuai Jenjang">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                    {['SMP', 'SMA', 'SMK'].map(opt => (
                      <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                        <input
                          type="radio" name="kategori" value={opt}
                          checked={form.kategori === opt}
                          onChange={handleChange}
                          style={{ accentColor: '#a3ff00', width: '18px', height: '18px' }}
                        />
                        <span style={{ color: '#fff', fontSize: '15px' }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </FieldGroup>

                <FieldGroup label="Asal Sekolah *">
                  <ModalInput name="asalSekolah" value={form.asalSekolah} onChange={handleChange} placeholder="Nama lengkap sekolah" />
                </FieldGroup>

                <FieldGroup label="Guru Pendamping *" hint="Masing-masing sekolah hanya menunjuk 1 Guru pendamping (berlaku untuk seluruh peserta per-sekolah)">
                  <ModalInput name="guruPendamping" value={form.guruPendamping} onChange={handleChange} placeholder="Nama guru pendamping" />
                </FieldGroup>

                <FieldGroup label="Nomor Handphone Guru Pendamping *" hint="Silahkan masukan kontak yang digunakan untuk berkomunikasi dengan Tim Clevio.">
                  <ModalInput name="noHpGuru" value={form.noHpGuru} onChange={handleChange} placeholder="08xxxxxxxxxx" type="tel" />
                </FieldGroup>

                <FieldGroup label="Alamat Email *" hint="Silahkan masukan alamat email sekolah.">
                  <ModalInput name="email" value={form.email} onChange={handleChange} placeholder="email@sekolah.sch.id" type="email" />
                </FieldGroup>

                <FieldGroup label="Jumlah Tim *" hint="1 tim terdiri dari 2 orang. Masukkan jumlah tim yang ingin didaftarkan.">
                  <ModalInput name="jumlahTim" value={form.jumlahTim} onChange={handleChange} placeholder="Contoh: 5" type="number" min="1" max="50" />
                </FieldGroup>

                {error && <ErrorBox>{error}</ErrorBox>}

                <button type="submit" style={submitBtnStyle}>
                  Lanjut Isi Nama Tim →
                </button>
              </form>
            )}

            {/* ── STEP 2: Nama Anggota ── */}
            {!success && step === 2 && (
              <form onSubmit={handleSubmit}>
                <div style={{ maxHeight: '420px', overflowY: 'auto', paddingRight: '4px' }}>
                  {teams.map((team, ti) => (
                    <div key={ti} style={{
                      marginBottom: '20px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      padding: '16px',
                    }}>
                      <div style={{
                        color: '#a3ff00', fontWeight: '700', fontSize: '13px',
                        marginBottom: '12px', letterSpacing: '1px',
                      }}>
                        TIM {ti + 1}
                      </div>
                      {team.nama.map((person, pi) => (
                        <div key={pi} style={{ marginBottom: pi === 0 ? '10px' : 0 }}>
                          <label style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', display: 'block', marginBottom: '5px' }}>
                            Anggota {pi + 1}
                          </label>
                          <input
                            value={person.nama}
                            onChange={(e) => handleMemberChange(ti, pi, e.target.value)}
                            placeholder={`Nama Anggota ${pi + 1}`}
                            style={inputStyle}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {error && <ErrorBox>{error}</ErrorBox>}

                <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                  <button
                    type="button"
                    onClick={() => { setStep(1); setError(''); }}
                    style={{ ...submitBtnStyle, background: 'rgba(255,255,255,0.08)', color: '#fff', flex: '0 0 auto', width: 'auto', padding: '14px 24px' }}
                  >← Kembali</button>
                  <button type="submit" disabled={loading} style={{ ...submitBtnStyle, flex: 1 }}>
                    {loading ? 'Mengirim...' : '✅ Kirim Pendaftaran'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

// ─── Helpers ───────────────────────────────────────────────────────────────
function FieldGroup({ label, hint, children }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ color: '#fff', fontWeight: '600', fontSize: '14px', display: 'block', marginBottom: '4px' }}>
        {label}
      </label>
      {hint && <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '12px', margin: '0 0 8px' }}>{hint}</p>}
      {children}
    </div>
  );
}

function ModalInput({ name, value, onChange, placeholder, type = 'text', min, max }) {
  return (
    <input
      type={type} name={name} value={value} onChange={onChange}
      placeholder={placeholder} min={min} max={max}
      style={inputStyle}
    />
  );
}

function ErrorBox({ children }) {
  return (
    <div style={{
      background: 'rgba(255,80,80,0.1)', border: '1px solid rgba(255,80,80,0.3)',
      borderRadius: '10px', padding: '12px 16px', marginBottom: '16px',
      color: '#ff6b6b', fontSize: '13px',
    }}>{children}</div>
  );
}

const inputStyle = {
  width: '100%', background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px',
  padding: '12px 16px', color: '#fff', fontSize: '14px',
  outline: 'none', boxSizing: 'border-box',
  transition: 'border-color 0.2s',
};

const submitBtnStyle = {
  width: '100%', background: '#a3ff00', color: '#000',
  border: 'none', borderRadius: '30px', padding: '14px 28px',
  fontWeight: '800', fontSize: '14px', cursor: 'pointer',
  letterSpacing: '0.5px', transition: 'opacity 0.2s',
};
