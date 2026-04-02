const fs = require('fs');
const path = require('path');
const file = path.join(process.cwd(), 'src/App.jsx');
let content = fs.readFileSync(file, 'utf8');

const pointPenilaianNew = \`
                {/* section-point-penilaian - TECH PANEL STYLE */}
                <section id="section-point-penilaian" className="bg-dark section-dark text-light border-white-top-op-2 pt-80 pb-60">
                    <div className="container">
                        <div className="row justify-content-center text-center mb-5">
                            <div className="col-lg-10">
                                <h2 className="wow fadeInUp" data-wow-delay=".1s">Kategori Penilaian Lomba</h2>
                                <p className="lead wow fadeInUp">Kriteria utama yang akan dinilai oleh Tim Juri dari karya inovatif kalian.</p>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {/* 1. Orisinal */}
                            <div className="col-lg-4 col-md-6">
                                <div className="bg-dark-2 p-4 rounded-3 hover relative overflow-hidden wow fadeIn scale-in-mask h-100" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div className="d-flex align-items-center mb-3">
                                         <div className="p-3 rounded-2 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', backgroundColor: 'rgba(163, 255, 0, 0.1)' }}>
                                              <i className="fa fa-lightbulb" style={{ color: '#a3ff00', fontSize: '24px' }}></i>
                                         </div>
                                         <h4 className="mb-0 ms-3 text-white">Orisinal</h4>
                                    </div>
                                    <p className="mb-0 text-white-op-7" style={{ fontSize: '14px', lineHeight: '1.6' }}>Seberapa orisinal software yang dibuat team peserta sendiri? Apakah mempunyai ciri khas, menghindari copy-paste, dan menghadirkan sesuatu yang baru.</p>
                                    <div className="absolute top-0 start-0 w-100 hover-bg-color" style={{ height: '3px', transition: '0.4s ease' }}></div>
                                </div>
                            </div>
                            {/* 2. Manfaat */}
                            <div className="col-lg-4 col-md-6">
                                <div className="bg-dark-2 p-4 rounded-3 hover relative overflow-hidden wow fadeIn scale-in-mask h-100" style={{ border: '1px solid rgba(255,255,255,0.05)' }} data-wow-delay=".1s">
                                    <div className="d-flex align-items-center mb-3">
                                         <div className="p-3 rounded-2 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', backgroundColor: 'rgba(163, 255, 0, 0.1)' }}>
                                              <i className="fa fa-hand-holding-heart" style={{ color: '#a3ff00', fontSize: '24px' }}></i>
                                         </div>
                                         <h4 className="mb-0 ms-3 text-white">Manfaat</h4>
                                    </div>
                                    <p className="mb-0 text-white-op-7" style={{ fontSize: '14px', lineHeight: '1.6' }}>Menilai seberapa kuat game dalam menyampaikan pesan anti-korupsi serta nilai integritas untuk memberikan dampak positif kepada pemain.</p>
                                    <div className="absolute top-0 start-0 w-100 hover-bg-color" style={{ height: '3px', transition: '0.4s ease' }}></div>
                                </div>
                            </div>
                            {/* 3. Menyenangkan */}
                            <div className="col-lg-4 col-md-6">
                                <div className="bg-dark-2 p-4 rounded-3 hover relative overflow-hidden wow fadeIn scale-in-mask h-100" style={{ border: '1px solid rgba(255,255,255,0.05)' }} data-wow-delay=".2s">
                                    <div className="d-flex align-items-center mb-3">
                                         <div className="p-3 rounded-2 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', backgroundColor: 'rgba(163, 255, 0, 0.1)' }}>
                                              <i className="fa fa-gamepad" style={{ color: '#a3ff00', fontSize: '24px' }}></i>
                                         </div>
                                         <h4 className="mb-0 ms-3 text-white">Menyenangkan</h4>
                                    </div>
                                    <p className="mb-0 text-white-op-7" style={{ fontSize: '14px', lineHeight: '1.6' }}>Berapa menyenangkan software game ini? Meliputi nilai hiburan, plot tantangan, konteks cerita, hingga karakter yang dikembangkan.</p>
                                    <div className="absolute top-0 start-0 w-100 hover-bg-color" style={{ height: '3px', transition: '0.4s ease' }}></div>
                                </div>
                            </div>
                            {/* 4. Kualitas operasi software */}
                            <div className="col-lg-4 col-md-6">
                                <div className="bg-dark-2 p-4 rounded-3 hover relative overflow-hidden wow fadeIn scale-in-mask h-100" style={{ border: '1px solid rgba(255,255,255,0.05)' }} data-wow-delay=".3s">
                                    <div className="d-flex align-items-center mb-3">
                                         <div className="p-3 rounded-2 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', backgroundColor: 'rgba(163, 255, 0, 0.1)' }}>
                                              <i className="fa fa-cogs" style={{ color: '#a3ff00', fontSize: '24px' }}></i>
                                         </div>
                                         <h4 className="mb-0 ms-3 text-white">Kualitas Operasi</h4>
                                    </div>
                                    <p className="mb-0 text-white-op-7" style={{ fontSize: '14px', lineHeight: '1.6' }}>Sebaik apa software game ini berjalan? Seberapa halus animasinya? Apakah 100% selesai dan bebas dari error fatal?</p>
                                    <div className="absolute top-0 start-0 w-100 hover-bg-color" style={{ height: '3px', transition: '0.4s ease' }}></div>
                                </div>
                            </div>
                            {/* 5. Komposisi Design */}
                            <div className="col-lg-4 col-md-6">
                                <div className="bg-dark-2 p-4 rounded-3 hover relative overflow-hidden wow fadeIn scale-in-mask h-100" style={{ border: '1px solid rgba(255,255,255,0.05)' }} data-wow-delay=".4s">
                                    <div className="d-flex align-items-center mb-3">
                                         <div className="p-3 rounded-2 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', backgroundColor: 'rgba(163, 255, 0, 0.1)' }}>
                                              <i className="fa fa-palette" style={{ color: '#a3ff00', fontSize: '24px' }}></i>
                                         </div>
                                         <h4 className="mb-0 ms-3 text-white">Komposisi Design</h4>
                                    </div>
                                    <p className="mb-0 text-white-op-7" style={{ fontSize: '14px', lineHeight: '1.6' }}>Seberapa bagus perpaduan warna, bentuk, tulisan, gambar, hingga kualitas suara dari karya game yang dihasilkan.</p>
                                    <div className="absolute top-0 start-0 w-100 hover-bg-color" style={{ height: '3px', transition: '0.4s ease' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
\`;

function replaceSection(id, newCode) {
    const startIdx = content.indexOf('id="' + id + '"');
    if (startIdx === -1) return;
    const sectionStart = content.lastIndexOf('<section', startIdx);
    const nextClose = content.indexOf('</section>', startIdx);
    if (nextClose === -1) return;
    const sectionEnd = nextClose + 10;
    content = content.substring(0, sectionStart) + newCode + content.substring(sectionEnd);
}

replaceSection('section-point-penilaian', pointPenilaianNew);

// Cleanup
content = content.replace(/\\r\\n\\r\\n\\r\\n/g, '\\r\\n\\r\\n');
content = content.replace(/\\{\\/\\* section-prizepool \\*\\/\\}\\s+\\{\\/\\* section-prizepool \\*\\/\\}/g, '{/* section-prizepool */}');
content = content.replace(/\\{\\/\\* NEW KATEGORI PEMENANG \\*\\/\\}\\s+\\{\\/\\* NEW KATEGORI PEMENANG \\*\\/\\}/g, '{/* NEW KATEGORI PEMENANG */}');


fs.writeFileSync(file, content, 'utf8');
console.log('Final polish and style fix applied!');
