const fs = require('fs');
const path = require('path');
const file = path.join(process.cwd(), 'src/App.jsx');
let content = fs.readFileSync(file, 'utf8');

function extractTag(idMarker) {
    const startIdx = content.indexOf(idMarker);
    if (startIdx === -1) throw new Error("Marker not found: " + idMarker);
    const sectionStart = content.lastIndexOf('<section', startIdx);
    const nextClose = content.indexOf('</section>', startIdx);
    const endIndex = nextClose + 10;
    const chunk = content.substring(sectionStart, endIndex);
    content = content.substring(0, sectionStart) + content.substring(endIndex);
    return { chunk, sectionStart };
}

const { sectionStart } = extractTag('id="section-kategori-pemenang"');

const newLayout = `                {/* NEW KATEGORI PEMENANG - REDESIGN TECH-PANEL */}
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
                                <div className="bg-dark-2 p-4 rounded-3 hover relative overflow-hidden wow fadeIn scale-in-mask h-100" style={{ border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                                    <div className="d-flex align-items-center mb-4">
                                         <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(163, 255, 0, 0.1)' }}>
                                              <i className="fa fa-medal fs-3" style={{ color: '#a3ff00' }}></i>
                                         </div>
                                         <div className="ms-3 text-start">
                                              <h5 className="mb-1 text-white-op-5 text-uppercase fw-bold" style={{ letterSpacing: '1px', fontSize: '11px' }}>Kategori</h5>
                                              <h4 className="mb-0 text-white">SMP</h4>
                                         </div>
                                    </div>
                                    <div className="text-start ms-2">
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="fa fa-caret-right me-3" style={{ color: '#a3ff00' }}></i>
                                            <span className="text-white fs-15">Juara I</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="fa fa-caret-right me-3" style={{ color: '#a3ff00' }}></i>
                                            <span className="text-white fs-15">Juara II</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <i className="fa fa-caret-right me-3" style={{ color: '#a3ff00' }}></i>
                                            <span className="text-white fs-15">Juara III</span>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 start-0 w-100 hover-bg-color" style={{ height: '3px', transition: '0.4s ease' }}></div>
                                </div>
                            </div>

                            {/* SMA */}
                            <div className="col-lg-3 col-md-6">
                                <div className="bg-dark-2 p-4 rounded-3 hover relative overflow-hidden wow fadeIn scale-in-mask h-100" style={{ border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }} data-wow-delay=".2s">
                                    <div className="d-flex align-items-center mb-4">
                                         <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(163, 255, 0, 0.1)' }}>
                                              <i className="fa fa-medal fs-3" style={{ color: '#a3ff00' }}></i>
                                         </div>
                                         <div className="ms-3 text-start">
                                              <h5 className="mb-1 text-white-op-5 text-uppercase fw-bold" style={{ letterSpacing: '1px', fontSize: '11px' }}>Kategori</h5>
                                              <h4 className="mb-0 text-white">SMA</h4>
                                         </div>
                                    </div>
                                    <div className="text-start ms-2">
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="fa fa-caret-right me-3" style={{ color: '#a3ff00' }}></i>
                                            <span className="text-white fs-15">Juara I</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="fa fa-caret-right me-3" style={{ color: '#a3ff00' }}></i>
                                            <span className="text-white fs-15">Juara II</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <i className="fa fa-caret-right me-3" style={{ color: '#a3ff00' }}></i>
                                            <span className="text-white fs-15">Juara III</span>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 start-0 w-100 hover-bg-color" style={{ height: '3px', transition: '0.4s ease' }}></div>
                                </div>
                            </div>

                            {/* SMK */}
                            <div className="col-lg-3 col-md-6">
                                <div className="bg-dark-2 p-4 rounded-3 hover relative overflow-hidden wow fadeIn scale-in-mask h-100" style={{ border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }} data-wow-delay=".4s">
                                    <div className="d-flex align-items-center mb-4">
                                         <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(163, 255, 0, 0.1)' }}>
                                              <i className="fa fa-medal fs-3" style={{ color: '#a3ff00' }}></i>
                                         </div>
                                         <div className="ms-3 text-start">
                                              <h5 className="mb-1 text-white-op-5 text-uppercase fw-bold" style={{ letterSpacing: '1px', fontSize: '11px' }}>Kategori</h5>
                                              <h4 className="mb-0 text-white">SMK</h4>
                                         </div>
                                    </div>
                                    <div className="text-start ms-2">
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="fa fa-caret-right me-3" style={{ color: '#a3ff00' }}></i>
                                            <span className="text-white fs-15">Juara I</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="fa fa-caret-right me-3" style={{ color: '#a3ff00' }}></i>
                                            <span className="text-white fs-15">Juara II</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <i className="fa fa-caret-right me-3" style={{ color: '#a3ff00' }}></i>
                                            <span className="text-white fs-15">Juara III</span>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 start-0 w-100 hover-bg-color" style={{ height: '3px', transition: '0.4s ease' }}></div>
                                </div>
                            </div>

                            {/* Guru */}
                            <div className="col-lg-3 col-md-6">
                                <div className="bg-dark-2 p-4 rounded-3 hover relative overflow-hidden wow fadeIn scale-in-mask h-100" style={{ border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }} data-wow-delay=".6s">
                                    <div className="d-flex align-items-center mb-4">
                                         <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(163, 255, 0, 0.1)' }}>
                                              <i className="fa fa-trophy fs-3" style={{ color: '#a3ff00' }}></i>
                                         </div>
                                         <div className="ms-3 text-start">
                                              <h5 className="mb-1 text-white-op-5 text-uppercase fw-bold" style={{ letterSpacing: '1px', fontSize: '11px' }}>Kategori</h5>
                                              <h4 className="mb-0 text-white">Guru</h4>
                                         </div>
                                    </div>
                                    <div className="text-start ms-2">
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="fa fa-caret-right me-3" style={{ color: '#a3ff00' }}></i>
                                            <span className="text-white fs-15">Juara I</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="fa fa-caret-right me-3" style={{ color: '#a3ff00' }}></i>
                                            <span className="text-white fs-15">Juara II</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <i className="fa fa-caret-right me-3" style={{ color: '#a3ff00' }}></i>
                                            <span className="text-white fs-15">Juara III</span>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 start-0 w-100 hover-bg-color" style={{ height: '3px', transition: '0.4s ease' }}></div>
                                </div>
                            </div>
                            
                            {/* Juara Favorit Full Width */}
                            <div className="col-lg-8 col-md-10 mt-4">
                                <div className="bg-dark-2 p-4 rounded-3 hover relative overflow-hidden wow fadeIn scale-in-mask d-flex align-items-center justify-content-between" style={{ border: '1px solid rgba(255,193,7,0.2)', background: 'linear-gradient(90deg, rgba(30,30,35,1) 0%, rgba(50,40,10,0.8) 100%)', boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }} data-wow-delay=".8s">
                                    <div className="text-start d-flex flex-column justify-content-center">
                                         <h5 className="mb-2 text-warning text-uppercase fw-bold" style={{ letterSpacing: '1px', fontSize: '11px' }}>Penghargaan Spesial</h5>
                                         <h2 className="mb-0 text-white wow scale-in-mask">1 Juara Favorit</h2>
                                    </div>
                                    <div className="d-flex align-items-center">
                                         <div className="d-none d-sm-block text-end me-4">
                                            <span className="text-white-op-8 fs-14">Dipilih berdasarkan perolehan<br/>suara dan interaksi terbanyak</span>
                                         </div>
                                         <div className="p-2">
                                              <i className="fa fa-star fa-3x text-warning wow pulse" data-wow-iteration="infinite" data-wow-duration="2s" style={{ filter: 'drop-shadow(0 0 15px rgba(255,193,7,0.5))' }}></i>
                                         </div>
                                    </div>
                                    <div className="absolute top-0 start-0 h-100" style={{ width: '3px', backgroundColor: '#ffc107' }}></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>`;

const finalContent = content.substring(0, sectionStart) + newLayout + content.substring(sectionStart);
fs.writeFileSync(file, finalContent, 'utf8');
console.log('Tech-panel layout applied!');
