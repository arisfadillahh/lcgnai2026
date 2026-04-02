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

// 1. Extract the old Kategori Juara section
const { sectionStart } = extractTag('id="section-kategori-pemenang"');

// 2. Define the exact new content with the unified styling
const newKategoriPemenang = `                {/* NEW KATEGORI PEMENANG */}
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
                                <div className="bg-dark-2 relative rounded-1 overflow-hidden wow fadeIn scale-in-mask text-center p-4 h-100 hover">
                                    <div className="absolute w-100 top-0 start-0 hover-bg-color" style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                                    <div className="mb-4 mt-2">
                                        <div className="d-inline-block px-3 py-1 rounded-pill" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#fff', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px'}}>KATEGORI SMP</div>
                                    </div>
                                    <h3 className="mb-3 text-white"><i className="fa fa-medal me-2 id-color"></i></h3>
                                    <h4 className="mb-2">Juara I</h4>
                                    <h4 className="mb-2">Juara II</h4>
                                    <h4 className="mb-0">Juara III</h4>
                                </div>
                            </div>

                            {/* SMA */}
                            <div className="col-lg-3 col-md-6">
                                <div className="bg-dark-2 relative rounded-1 overflow-hidden wow fadeIn scale-in-mask text-center p-4 h-100 hover" data-wow-delay=".2s">
                                    <div className="absolute w-100 top-0 start-0 hover-bg-color" style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                                    <div className="mb-4 mt-2">
                                        <div className="d-inline-block px-3 py-1 rounded-pill" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#fff', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px'}}>KATEGORI SMA</div>
                                    </div>
                                    <h3 className="mb-3 text-white"><i className="fa fa-medal me-2 id-color"></i></h3>
                                    <h4 className="mb-2">Juara I</h4>
                                    <h4 className="mb-2">Juara II</h4>
                                    <h4 className="mb-0">Juara III</h4>
                                </div>
                            </div>

                            {/* SMK */}
                            <div className="col-lg-3 col-md-6">
                                <div className="bg-dark-2 relative rounded-1 overflow-hidden wow fadeIn scale-in-mask text-center p-4 h-100 hover" data-wow-delay=".4s">
                                    <div className="absolute w-100 top-0 start-0 hover-bg-color" style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                                    <div className="mb-4 mt-2">
                                        <div className="d-inline-block px-3 py-1 rounded-pill" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#fff', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px'}}>KATEGORI SMK</div>
                                    </div>
                                    <h3 className="mb-3 text-white"><i className="fa fa-medal me-2 id-color"></i></h3>
                                    <h4 className="mb-2">Juara I</h4>
                                    <h4 className="mb-2">Juara II</h4>
                                    <h4 className="mb-0">Juara III</h4>
                                </div>
                            </div>

                            {/* Guru */}
                            <div className="col-lg-3 col-md-6">
                                <div className="bg-dark-2 relative rounded-1 overflow-hidden wow fadeIn scale-in-mask text-center p-4 h-100 hover" data-wow-delay=".6s">
                                    <div className="absolute w-100 top-0 start-0 hover-bg-color" style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                                    <div className="mb-4 mt-2">
                                        <div className="d-inline-block px-3 py-1 rounded-pill" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#fff', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px'}}>KATEGORI GURU</div>
                                    </div>
                                    <h3 className="mb-3 text-white"><i className="fa fa-trophy me-2 id-color"></i></h3>
                                    <h4 className="mb-2">Juara I</h4>
                                    <h4 className="mb-2">Juara II</h4>
                                    <h4 className="mb-0">Juara III</h4>
                                </div>
                            </div>
                            
                            {/* Juara Favorit */}
                            <div className="col-lg-6 col-md-12 mt-4">
                                <div className="bg-dark-2 relative rounded-1 overflow-hidden wow fadeIn scale-in-mask text-center p-4 px-sm-5 hover" data-wow-delay=".8s">
                                    <div className="absolute w-100 top-0 start-0" style={{ height: '4px', backgroundColor: '#a3ff00' }}></div>
                                    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center mt-2">
                                        <i className="fa fa-star fa-4x mb-3 mb-sm-0 me-sm-4 id-color" style={{fontSize: '50px'}}></i>
                                        <div className="text-center text-sm-start">
                                            <div className="d-inline-block px-3 py-1 rounded-pill mb-2" style={{backgroundColor: 'rgba(163, 255, 0, 0.1)', color: '#a3ff00', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px'}}>PENGHARGAAN SPESIAL</div>
                                            <h2 className="mb-0 text-white">1 Juara Favorit</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>`;

// Re-insert at the exact same spatial location
const finalContent = content.substring(0, sectionStart) + newKategoriPemenang + content.substring(sectionStart);
fs.writeFileSync(file, finalContent, 'utf8');
console.log('Design successfully unified!');
