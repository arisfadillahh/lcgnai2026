const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');

const newHTML = `                        <div className="row g-4 gx-5 justify-content-center wow fadeInUp">
                            <div className="col-lg-12">
                                <div className="lcgn-timeline" style={{ marginTop: '50px' }}>
                                    
                                    <div className="timeline-item bottom">
                                        <div className="timeline-node"><i className="fa fa-paint-brush"></i></div>
                                        <div className="timeline-card">
                                            <div className="timeline-date">25 April 2026</div>
                                            <h4 className="timeline-title">Sesi Brainstorming</h4>
                                            <p className="timeline-desc">Peserta melakukan brainstorming ide konsep game dan menuangkannya ke dalam Game Design Document & Storyboard sebagai gambaran awal alur dan fitur proyek.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="timeline-item top">
                                        <div className="timeline-node"><i className="fa fa-code"></i></div>
                                        <div className="timeline-card">
                                            <div className="timeline-date">Awal Mei 2026</div>
                                            <h4 className="timeline-title">Programming Big Project</h4>
                                            <p className="timeline-desc">Peserta mulai menyusun gameplay dan logika fitur utama di engine pilihan mereka sehingga tercipta prototipe yang interaktif dan dapat dimainkan.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="timeline-item bottom">
                                        <div className="timeline-node"><i className="fa fa-rocket"></i></div>
                                        <div className="timeline-card">
                                            <div className="timeline-date">3 - 7 Mei 2026</div>
                                            <h4 className="timeline-title">Masa Hackathon</h4>
                                            <p className="timeline-desc">Peserta diberikan waktu independen selama beberapa hari untuk melengkapi mekanik, polesan akhir, dan memperbaiki bug hingga mencapai versi final.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="timeline-item top">
                                        <div className="timeline-node"><i className="fa fa-microphone"></i></div>
                                        <div className="timeline-card">
                                            <div className="timeline-date">8 Mei 2026</div>
                                            <h4 className="timeline-title">Latihan Presentasi</h4>
                                            <p className="timeline-desc">Bagi finalis, akan ada sesi latih presentasi di mana mereka dilatih untuk menyampaikan visi permainan, monetisasi, dan fitur utama secara profesional di depan umum.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="timeline-item bottom">
                                        <div className="timeline-node"><i className="fa fa-trophy"></i></div>
                                        <div className="timeline-card">
                                            <div className="timeline-date">10 Mei 2026</div>
                                            <h4 className="timeline-title">Festival Juara Clevio</h4>
                                            <p className="timeline-desc">Ajang pameran game peserta serta acara puncak pengumuman pemenang LCGN tingkat nasional, perayaan, dan networking penutup.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>`;

// Replace lines 603 to 1160 (0-indexed: lines[603] to lines[1160])
lines.splice(603, 1161 - 604 + 1, newHTML);

fs.writeFileSync(filePath, lines.join('\n'));
console.log('Successfully replaced schedule with horizontal timeline!');
