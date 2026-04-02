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

const { sectionStart } = extractTag('id="section-prizepool"');

const newPrizepool = `                {/* section-prizepool */}
                <section id="section-prizepool" className="bg-dark section-dark pt-80 pb-80 relative overflow-hidden jarallax" aria-label="section">
                    {/* Background Image Blurred */}
                    <img src="images/background/8.webp" className="jarallax-img" alt="" style={{ filter: 'blur(8px) brightness(0.6)' }} />
                    <div className="gradient-edge-top h-10"></div>
                    <div className="gradient-edge-bottom h-10"></div>
                    <div className="sw-overlay op-7"></div>

                    <div className="container relative z-4">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8">
                                <h2 className="fs-40 wow fadeInUp text-uppercase mb-2" data-wow-delay=".1s" style={{ letterSpacing: '2px' }}>
                                    <span className="id-color">LOMBA CIPTA GAME NASIONAL</span><br />
                                    Powered By AI
                                </h2>
                                <h4 className="mb-5 wow fadeInUp fw-normal text-white-op-8" data-wow-delay=".3s">
                                    Ayo Berkompetisi dan Raih Total Penghargaan Senilai
                                </h4>
                                
                                {/* Glassmorphism Box */}
                                <div className="d-inline-block p-4 px-md-5 rounded-3 wow scale-in-mask relative overflow-hidden" data-wow-delay=".5s" style={{ border: '1px solid rgba(163,255,0,0.3)', boxShadow: '0 10px 40px rgba(163,255,0,0.15)', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                                    <div className="absolute w-100 top-0 start-0 hover-bg-color" style={{ height: '3px', backgroundColor: '#a3ff00' }}></div>
                                    <div className="d-flex align-items-center justify-content-center gap-3">
                                        <h1 className="mb-0 text-white" style={{ fontWeight: '800', fontSize: 'clamp(40px, 5vw, 65px)', lineHeight: '1' }}>Rp</h1>
                                        <div className="de_count">
                                            <h1 className="mb-0" style={{ color: '#a3ff00', fontWeight: '900', fontSize: 'clamp(50px, 6vw, 80px)', lineHeight: '1', textShadow: '0 0 30px rgba(163,255,0,0.6)' }}>
                                                <span className="timer" data-to="21" data-speed="2500">0</span>
                                            </h1>
                                        </div>
                                        <h1 className="mb-0 text-white" style={{ fontWeight: '800', fontSize: 'clamp(40px, 5vw, 65px)', lineHeight: '1' }}>Juta<span className="id-color">+</span></h1>
                                    </div>
                                    <p className="mt-3 mb-0 text-white-op-7 fw-bold text-uppercase fs-12" style={{ letterSpacing: '2px' }}>Total Prizepool LCGNAI 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`;

const finalContent = content.substring(0, sectionStart) + newPrizepool + content.substring(sectionStart);
fs.writeFileSync(file, finalContent, 'utf8');
console.log('Prizepool successfully updated!');
