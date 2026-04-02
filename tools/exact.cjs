const fs = require('fs');
const path = require('path');
const file = path.join(process.cwd(), 'src/App.jsx');
let content = fs.readFileSync(file, 'utf8');

function extractTag(idMarker) {
    const startIdx = content.indexOf(idMarker);
    if (startIdx === -1) throw new Error("Marker not found: " + idMarker);
    
    // Find the enclosing <section
    const sectionStart = content.lastIndexOf('<section', startIdx);
    if (sectionStart === -1) throw new Error("Enclosing <section not found for " + idMarker);
    
    // Find the *next* </section>
    const nextClose = content.indexOf('</section>', startIdx);
    if (nextClose === -1) throw new Error("</section> not found after " + idMarker);
    const endIndex = nextClose + 10; // length of </section>
    
    const chunk = content.substring(sectionStart, endIndex);
    // Remove chunk from content, leave the newlines behind or remove them.
    content = content.substring(0, sectionStart) + content.substring(endIndex);
    return chunk;
}

// Extract sections by ID or specific unique string
const whyAttend = extractTag('id="section-why-attend"'); 
// Drop Why Attend completely.

const quoteSection = extractTag('src="images/background/2.webp"'); // Quote section has this bg
const speakersSection = extractTag('id="section-speakers"');
const logosSection = extractTag('src="images/background/1.webp"'); // Logos section has this bg
const juriSection = extractTag('id="section-juri"');
const prizeSection = extractTag('id="section-prizepool"');
const schedSection = extractTag('id="section-schedule"');
const testiSection = extractTag('id="section-testimonials"');
const venueSection = extractTag('id="section-venue"');

const pointPenilaian = `
                {/* NEW POINT PENILAIAN */}
                <section id="section-point-penilaian" className="bg-dark section-dark text-light border-white-top-op-2 pt-80 pb-60">
                    <div className="container">
                        <div className="row justify-content-center text-center mb-5">
                            <div className="col-lg-10">
                                <h2 className="wow fadeInUp" data-wow-delay=".1s">Kategori Penilaian Lomba</h2>
                                <p className="lead wow fadeInUp">Apa saja yang akan dinilai oleh Tim Juri dari karya software inovatif kalian?</p>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {/* 1. Orisinal */}
                            <div className="col-lg-4 col-md-6">
                                <div className="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask bg-dark border-white-op-2 text-start pt-5 pb-4 px-4 h-100">
                                    <div className="absolute w-100 top-0 start-0" style={{ height: '4px', backgroundColor: '#a3ff00' }}></div>
                                    <div className="mb-3">
                                        <i className="fa fa-lightbulb" style={{fontSize: '40px', color: '#a3ff00'}}></i>
                                    </div>
                                    <h4 className="mb-2">Orisinal</h4>
                                    <p className="mb-0 text-white-op-8" style={{ fontSize: '14px', lineHeight: '1.6' }}>Seberapa orisinal software yang dibuat team peserta sendiri? Apakah 100% orisinal? Apakah mengembangkan inspirasi sumber lain? Apakah sekedar meniru sumber lain? (mempunyai ciri khas, menghindari copy-paste karya orang lain, menghadirkan sesuatu yang baru).</p>
                                </div>
                            </div>
                            {/* 2. Manfaat */}
                            <div className="col-lg-4 col-md-6">
                                <div className="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask bg-dark border-white-op-2 text-start pt-5 pb-4 px-4 h-100" data-wow-delay=".2s">
                                    <div className="absolute w-100 top-0 start-0" style={{ height: '4px', backgroundColor: '#a3ff00' }}></div>
                                    <div className="mb-3">
                                        <i className="fa fa-hand-holding-heart" style={{fontSize: '40px', color: '#a3ff00'}}></i>
                                    </div>
                                    <h4 className="mb-2">Manfaat</h4>
                                    <p className="mb-0 text-white-op-8" style={{ fontSize: '14px', lineHeight: '1.6' }}>Menilai seberapa kuat game dalam menyampaikan pesan anti-korupsi serta nilai-nilai #BERJUMPADIKERTAS, termasuk kemampuan game dalam mengedukasi, meningkatkan kesadaran, dan memberikan dampak positif kepada pemain.</p>
                                </div>
                            </div>
                            {/* 3. Menyenangkan */}
                            <div className="col-lg-4 col-md-6">
                                <div className="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask bg-dark border-white-op-2 text-start pt-5 pb-4 px-4 h-100" data-wow-delay=".4s">
                                    <div className="absolute w-100 top-0 start-0" style={{ height: '4px', backgroundColor: '#a3ff00' }}></div>
                                    <div className="mb-3">
                                        <i className="fa fa-gamepad" style={{fontSize: '40px', color: '#a3ff00'}}></i>
                                    </div>
                                    <h4 className="mb-2">Menyenangkan</h4>
                                    <p className="mb-0 text-white-op-8" style={{ fontSize: '14px', lineHeight: '1.6' }}>Berapa menyenangkan software game ini? Berapa penasaran dari pemain untuk menguasainya? (nilai hiburan, plot tantangan, konteks cerita, karakter).</p>
                                </div>
                            </div>
                            {/* 4. Kualitas operasi software */}
                            <div className="col-lg-4 col-md-6">
                                <div className="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask bg-dark border-white-op-2 text-start pt-5 pb-4 px-4 h-100" data-wow-delay=".5s">
                                    <div className="absolute w-100 top-0 start-0" style={{ height: '4px', backgroundColor: '#a3ff00' }}></div>
                                    <div className="mb-3">
                                        <i className="fa fa-cogs" style={{fontSize: '40px', color: '#a3ff00'}}></i>
                                    </div>
                                    <h4 className="mb-2">Kualitas Operasi Software</h4>
                                    <p className="mb-0 text-white-op-8" style={{ fontSize: '14px', lineHeight: '1.6' }}>Sebaik apa software game ini berjalan? Seberapa halus animasinya? Apakah 100% selesai? Apakah masih ada error?</p>
                                </div>
                            </div>
                            {/* 5. Komposisi Design */}
                            <div className="col-lg-4 col-md-6">
                                <div className="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask bg-dark border-white-op-2 text-start pt-5 pb-4 px-4 h-100" data-wow-delay=".6s">
                                    <div className="absolute w-100 top-0 start-0" style={{ height: '4px', backgroundColor: '#a3ff00' }}></div>
                                    <div className="mb-3">
                                        <i className="fa fa-palette" style={{fontSize: '40px', color: '#a3ff00'}}></i>
                                    </div>
                                    <h4 className="mb-2">Komposisi Design</h4>
                                    <p className="mb-0 text-white-op-8" style={{ fontSize: '14px', lineHeight: '1.6' }}>Seberapa bagus perpaduan warna, bentuk, tulisan, gambar, dan suara game karya peserta lomba?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`;

const kategoriPemenang = `
                {/* NEW KATEGORI PEMENANG */}
                <section id="section-kategori-pemenang" className="bg-dark section-dark text-light border-white-top-op-2 pt-80 pb-60">
                    <div className="container">
                        <div className="row justify-content-center text-center mb-5">
                            <div className="col-lg-8">
                                <h2 className="wow fadeInUp" data-wow-delay=".1s">Kategori Juara</h2>
                                <p className="lead wow fadeInUp">Distribusi Pemenang dan Prizepool untuk para pendidik dan kreator muda terbaik negeri.</p>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center">
                            
                            {/* SMP */}
                            <div className="col-lg-3 col-md-6">
                                <div className="relative rounded-1 overflow-hidden wow fadeIn scale-in-mask text-center p-4 h-100" style={{background: 'linear-gradient(135deg, rgba(30,40,60,1) 0%, rgba(10,15,30,1) 100%)', border: '1px solid rgba(163, 255, 0, 0.2)'}}>
                                    <div className="absolute w-100 top-0 start-0" style={{ height: '4px', backgroundColor: '#a3ff00' }}></div>
                                    <div className="d-inline-block px-3 py-1 rounded-pill mb-3" style={{backgroundColor: 'rgba(163, 255, 0, 0.1)', color: '#a3ff00', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px'}}>KATEGORI SMP</div>
                                    <h3 className="mb-2 text-white"><i className="fa fa-medal me-2 text-warning"></i></h3>
                                    <h4 className="mb-0">Juara I</h4>
                                    <h4 className="mb-0">Juara II</h4>
                                    <h4 className="mb-0">Juara III</h4>
                                </div>
                            </div>

                            {/* SMA */}
                            <div className="col-lg-3 col-md-6">
                                <div className="relative rounded-1 overflow-hidden wow fadeIn scale-in-mask text-center p-4 h-100" style={{background: 'linear-gradient(135deg, rgba(30,40,60,1) 0%, rgba(10,15,30,1) 100%)', border: '1px solid rgba(163, 255, 0, 0.2)'}} data-wow-delay=".2s">
                                    <div className="absolute w-100 top-0 start-0" style={{ height: '4px', backgroundColor: '#a3ff00' }}></div>
                                    <div className="d-inline-block px-3 py-1 rounded-pill mb-3" style={{backgroundColor: 'rgba(163, 255, 0, 0.1)', color: '#a3ff00', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px'}}>KATEGORI SMA</div>
                                    <h3 className="mb-2 text-white"><i className="fa fa-medal me-2 text-warning"></i></h3>
                                    <h4 className="mb-0">Juara I</h4>
                                    <h4 className="mb-0">Juara II</h4>
                                    <h4 className="mb-0">Juara III</h4>
                                </div>
                            </div>

                            {/* SMK */}
                            <div className="col-lg-3 col-md-6">
                                <div className="relative rounded-1 overflow-hidden wow fadeIn scale-in-mask text-center p-4 h-100" style={{background: 'linear-gradient(135deg, rgba(30,40,60,1) 0%, rgba(10,15,30,1) 100%)', border: '1px solid rgba(163, 255, 0, 0.2)'}} data-wow-delay=".4s">
                                    <div className="absolute w-100 top-0 start-0" style={{ height: '4px', backgroundColor: '#a3ff00' }}></div>
                                    <div className="d-inline-block px-3 py-1 rounded-pill mb-3" style={{backgroundColor: 'rgba(163, 255, 0, 0.1)', color: '#a3ff00', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px'}}>KATEGORI SMK</div>
                                    <h3 className="mb-2 text-white"><i className="fa fa-medal me-2 text-warning"></i></h3>
                                    <h4 className="mb-0">Juara I</h4>
                                    <h4 className="mb-0">Juara II</h4>
                                    <h4 className="mb-0">Juara III</h4>
                                </div>
                            </div>

                            {/* Guru */}
                            <div className="col-lg-3 col-md-6">
                                <div className="relative rounded-1 overflow-hidden wow fadeIn scale-in-mask text-center p-4 h-100" style={{background: 'linear-gradient(135deg, rgba(30,40,60,1) 0%, rgba(10,15,30,1) 100%)', border: '1px solid rgba(163, 255, 0, 0.2)'}} data-wow-delay=".6s">
                                    <div className="absolute w-100 top-0 start-0" style={{ height: '4px', backgroundColor: '#a3ff00' }}></div>
                                    <div className="d-inline-block px-3 py-1 rounded-pill mb-3" style={{backgroundColor: 'rgba(163, 255, 0, 0.1)', color: '#a3ff00', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px'}}>KATEGORI GURU</div>
                                    <h3 className="mb-2 text-white"><i className="fa fa-trophy me-2" style={{color: '#a3ff00'}}></i></h3>
                                    <h4 className="mb-0">Juara I</h4>
                                    <h4 className="mb-0">Juara II</h4>
                                    <h4 className="mb-0">Juara III</h4>
                                </div>
                            </div>
                            
                            {/* Juara Favorit */}
                            <div className="col-lg-6 col-md-12 mt-2">
                                <div className="relative rounded-1 overflow-hidden wow fadeIn scale-in-mask text-center p-4" style={{background: 'linear-gradient(135deg, rgba(40,30,15,1) 0%, rgba(60,40,10,1) 100%)', border: '1px solid rgba(255, 193, 7, 0.4)'}} data-wow-delay=".8s">
                                    <div className="absolute w-100 top-0 start-0" style={{ height: '4px', backgroundColor: '#ffc107' }}></div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <i className="fa fa-star fa-3x me-4 text-warning"></i>
                                        <div className="text-start">
                                            <div className="d-inline-block px-3 py-1 rounded-pill mb-2" style={{backgroundColor: 'rgba(255, 193, 7, 0.1)', color: '#ffc107', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px'}}>PENGHARGAAN SPESIAL</div>
                                            <h2 className="mb-0 text-white">1 Juara Favorit</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
`;

// Now insert them exactly before <section id="section-tickets"
const insertAnchor = '<section id="section-tickets"';
const insertIndex = content.indexOf(insertAnchor);
if (insertIndex === -1) throw new Error("Insert anchor not found");

const separator = '\n\n';
const orderedContent = [
    quoteSection,
    speakersSection,
    juriSection,
    pointPenilaian,
    logosSection,
    prizeSection,
    kategoriPemenang,
    schedSection,
    venueSection,
    testiSection
].join(separator) + separator;

// Reconstruct file! We slice at insertIndex
// To be safe, let's also remove any excessive empty newlines left by extraction
const finalContent = content.substring(0, insertIndex) + orderedContent + content.substring(insertIndex);

fs.writeFileSync(file, finalContent, 'utf8');
console.log('App.jsx successfully reordered!');
