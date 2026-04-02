const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');

const newHTML = `                                    { [
                                        {
                                            title: "Tingkat SMP",
                                            subtitle: "Siswa/i",
                                            desc: "Kelas 1-3 SMP Sederajat",
                                            styleClass: "",
                                            features: ["Edukasi AI Game.", "Tim dari 2 orang.", "E-Sertifikat Nasional.", "Grup Diskusi Khusus."],
                                            link: "https://clev.io/LCGNAI26SMP",
                                            btnText: "Daftar Tingkat SMP"
                                        },
                                        {
                                            title: "Tingkat SMA",
                                            subtitle: "Siswa/i",
                                            desc: "Kelas 1-3 SMA Sederajat",
                                            styleClass: "s2",
                                            features: ["Berpeluang Pameran.", "Sertifikat Tingkat Nasional.", "Tim terdiri dari 2 orang.", "Akses Network Nasional."],
                                            link: "https://clev.io/LCGNAI26SMA",
                                            btnText: "Daftar Tingkat SMA"
                                        },
                                        {
                                            title: "Tingkat SMK",
                                            subtitle: "Siswa/i",
                                            desc: "Kelas 1-3 SMK Sederajat",
                                            styleClass: "s2",
                                            features: ["Asah Portofolio Vokasi.", "Sertifikat Tingkat Nasional.", "Tim terdiri dari 2 orang.", "Grup Diskusi Khusus."],
                                            link: "https://clev.io/LCGNAI26SMK",
                                            btnText: "Daftar Tingkat SMK"
                                        },
                                        {
                                            title: "Guru Pendidik",
                                            subtitle: "Pembimbing",
                                            desc: "Untuk Pendidik & Umum",
                                            styleClass: "s3",
                                            features: ["Panduan Edukasi Kekinian.", "Bahan Ajar Inovatif.", "Akses Seminar Eksklusif.", "Kesempatan Kolaborasi."],
                                            link: "https://clev.io/LCGNAI26GURU",
                                            btnText: "Daftar Kategori Guru"
                                        }
                                    ].map((ticket, idx) => (
                                        <div className="item" key={idx}>
                                            <div className={\`d-ticket \${ticket.styleClass}\`}>
                                                <img src="images/logo.webp" className="w-80px mb-4" alt="" />
                                                <img src="images/misc/barcode.webp" className="w-20 p-2 abs abs-middle end-0 me-2" alt="" />
                                                
                                                <h2>{ticket.title}</h2>
                                                <h4 className="mb-4">{ticket.subtitle}</h4>
                                                <div className="fs-14">{ticket.desc}</div>
                                            </div>

                                            <div className="relative overflow-hidden">
                                                <div className="py-4 z-2">
                                                    <ul className="ul-check mb-4">
                                                        {ticket.features.map((feat, fidx) => (
                                                            <li key={fidx}>{feat}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <a className="btn-main fx-slide w-100" href={ticket.link} target="_blank" rel="noreferrer">
                                                    <span>{ticket.btnText}</span>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
`;

lines.splice(678, 165, newHTML);

fs.writeFileSync(filePath, lines.join('\n'));
console.log('Successfully replaced tickets with map array!');
