
import { useEffect, useRef } from 'react';
import './App.css'; // You can remove this if unused
import { FaMapMarkerAlt, FaQuoteLeft, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaVideo } from 'react-icons/fa';

function App() {
    const testimonialsData = [
        {
            name: "Yuli Dianah",
            title: "Ketua Konsentrasi Keahlian RPL - SMKN 1 Cibinong",
            img: "images/testi/testi1.png",
            text: "Pengalaman baru, tambahan keterampilan tentang membuat games dengan bantuan AI"
        },
        {
            name: "Doni Putra Setiawan",
            title: "Guru SMKN 1 Gunung Putri",
            img: "images/testi/testi2.png",
            text: "karna ini menjadi pengalaman pertama untuk kelas X di sekolah kami, menjadikan siswa kami merasa senang tentang bahasa pemerograman HTML, CSS dan JavaScript"
        },
        {
            name: "Ang Kian Chye",
            title: "Guru SMA Kristen Immanuel Pontianak",
            img: "images/testi/testi3.png",
            text: "sering - sering mengadakan workshop dan perlombaan seperti ini, karena siswa juga pasti senang selain menikmati game, siswa juga bisa mencoba untuk membuatnya."
        },
        {
            name: "Shaka Aufa",
            title: "Juara 1 & Umum LCGN 2023",
            img: "images/testi/testi4.png",
            text: "Lomba yang sangat seru, bisa liat game game keren yang udah dibuat sama sekolah sekolah lain."
        }
    ];

    // Script manual re-run (karena pindah framework)
    useEffect(() => {
        // If there is any initialization needed when App mounts, add here
        if (window.Aivent) window.Aivent.init();
        if (window.jarallax) window.jarallax(document.querySelectorAll('.jarallax'), { speed: 0.2 });
        if (window.$ && window.$('#defaultCountdown').length) {
            window.$('#defaultCountdown').countdown({ until: new Date(2026, 4 - 1, 25, 9) });
        }

        // Loader safety fallback (force hide after timeout)
        const loader = document.getElementById('de-loader');
        if (loader) {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 2500);
        }
    }, []);

    // Function to handle "Daftar Sekarang" jump + scroll effect
    const handleDaftarClick = (e) => {
        e.preventDefault();
        const btn = e.currentTarget;
        btn.classList.add('jump-animate');
        setTimeout(() => {
            btn.classList.remove('jump-animate');
            const target = document.querySelector('#section-tickets');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500); // match jump-bounce duration
    };

    return (
        <>


            <div id="wrapper">

                <div className="float-text show-on-scroll">
                    <span><a href="#">Scroll to top</a></span>
                </div>
                <div className="scrollbar-v show-on-scroll"></div>

                {/*  page preloader begin  */}
                <div id="de-loader"></div>
                {/*  page preloader close  */}

                <header className="transparent">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="de-flex">
                                    <div className="de-flex-col">
                                        {/*  logo begin  */}
                                        <div id="logo">
                                            <a href="index.html">
                                                <img className="logo-main" src="images/logo.webp" alt="" />
                                                <img className="logo-scroll" src="images/logo.webp" alt="" />
                                                <img className="logo-mobile" src="images/logo.webp" alt="" />
                                            </a>
                                        </div>
                                        {/*  logo close  */}
                                    </div>

                                    <div className="de-flex-col">
                                        <div className="de-flex-col header-col-mid">
                                            <ul id="mainmenu">
                                                <li><a className="menu-item active" href="#section-hero">Home</a></li>
                                                <li><a className="menu-item" href="#section-about">Tentang Lomba</a></li>
                                                <li><a className="menu-item" href="#section-speakers">Narasumber</a></li>
                                                <li><a className="menu-item" href="#section-schedule">Jadwal</a></li>
                                                <li><a className="menu-item" href="#section-venue">Lokasi</a></li>
                                                <li><a className="menu-item" href="#section-tickets">Kategori</a></li>
                                                <li><a className="menu-item" href="#section-faq">FAQ</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="de-flex-col">
                                        <a className="btn-main fx-slide w-100" href="https://clev.io/chat" target="_blank" rel="noopener noreferrer" data-hover="Contact">
                                            <span>Contact</span>
                                        </a>

                                        <div className="menu_side_area">
                                            <span id="menu-btn"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section id="section-hero"
                    className="section-dark text-light pt-80 pb-0 jarallax relative overflow-hidden jarallax">
                    <video src="images/background/bg.mp4" className="jarallax-img" autoPlay loop muted playsInline></video>
                    <div className="gradient-edge-bottom h-10"></div>
                    <div className="sw-overlay op-5"></div>

                    <div className="container">
                        <div className="row g-4 gx-5 align-items-center justify-content-center text-center">
                            <div className="col-lg-10" style={{ marginTop: '70px' }}>
                                <div className="relative mb-0">
                                    <img src="images/logo acara.png" className="img-fluid wow fadeInUp" data-wow-delay=".3s"
                                        alt="Logo LCGN AI 2026" />
                                </div>
                                <h2 className="wow fadeInUp font-weight-bold fs-40" data-wow-delay=".4s" style={{ marginTop: '10px', marginBottom: '20px', color: '#a3ff00', textShadow: '0 0 15px rgba(163, 255, 0, 0.6), 0 0 30px rgba(163, 255, 0, 0.4)' }}>
                                    TANTANG DIRIMU JADI GAME DEVELOPER MUDA!</h2>
                                <p className="wow fadeInUp mx-auto fs-5 mb-4" style={{ maxWidth: '800px' }} data-wow-delay=".5s">
                                    Tunjukkan kreativitasmu dan ciptakan game terbaikmu di ajang lomba cipta game nasional dan
                                    jadi bagian generasi developer masa kini kedepan!
                                </p>
                                <a className="btn-main fx-slide btn-premium-glow mb10 mb-3 wow fadeInUp" data-wow-delay=".6s"
                                    href="#section-tickets" data-hover="Daftar Sekarang" onClick={handleDaftarClick}>
                                    <span>Daftar Sekarang</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="spacer-double"></div>
                    <div className="spacer-double"></div>
                    <div className="spacer-double"></div>

                    <div className="abs w-100 start-0 bottom-0 z-3">
                        <div className="container">
                            <div
                                className="sm-hide border-white-op-3 p-40 py-4 rounded-1 bg-blur relative overflow-hidden wow fadeInUp">
                                <div className="gradient-edge-bottom color start-0 h-50 op-5"></div>
                                <div className="row g-4 align-items-center relative z-2">
                                    {/* Left: Daftar Segera */}
                                    <div className="col-lg-3 text-start">
                                        <h2 className="mb-0 fw-bold pb-2" style={{ lineHeight: '1.2' }}>Daftar Segera!</h2>
                                    </div>

                                    {/* Center: Countdown */}
                                    <div className="col-lg-6 text-center">
                                        <div className="d-inline-block">
                                            <h5 className="mb-2 text-uppercase op-6" style={{ letterSpacing: '2px', fontSize: '13px' }}>Workshop Dimulai Dalam</h5>
                                            <div id="defaultCountdown" className="d-flex justify-content-center custom-countdown"></div>
                                        </div>
                                    </div>

                                    {/* Right: Zoom Info */}
                                    <div className="col-lg-3">
                                        <div className="d-flex align-items-center justify-content-lg-end">
                                            {/* Icon with glow effect */}
                                            <FaVideo className="fs-60 id-color" style={{ filter: 'drop-shadow(0 0 15px rgba(31, 78, 233, 0.7))' }} />
                                            <div className="ms-3">
                                                <h5 className="mb-0 text-start fw-bold" style={{ lineHeight: '1.2' }}>Online Via<br />Zoom Meeting</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section-apa-itu" className="bg-dark section-dark text-light">
                    <div className="container">
                        <div className="row align-items-center gx-5">
                            <div className="col-lg-6 mb-sm-30">
                                <div className="relative overflow-hidden rounded-1 wow scale-in-mask mb-4">
                                    <img src="images/aboutimg.webp" className="img-fluid" alt="Apa itu LCGN Clevio" />
                                    <div className="gradient-edge-bottom h-50"></div>
                                </div>
                                <div className="row text-center mt-4">
                                    <div className="col-4">
                                        <h3 className="fs-40 mb-0">150+</h3>
                                        <span className="fs-14">Peserta</span>
                                    </div>
                                    <div className="col-4">
                                        <h3 className="fs-40 mb-0">50+</h3>
                                        <span className="fs-14">Karya Digital</span>
                                    </div>
                                    <div className="col-4">
                                        <h3 className="fs-40 mb-0">20+</h3>
                                        <span className="fs-14">Sekolah</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="wow fadeInUp" data-wow-delay=".2s" style={{ fontSize: '50px', lineHeight: '1.2' }}>Apa Itu Lomba Cipta Game Nasional Clevio?</h2>
                                {/*  Aksen lime green  */}
                                <div style={{ width: '100px', height: '5px', backgroundColor: '#a3ff00', marginBottom: '20px' }}></div>
                                <p className="wow fadeInUp" data-wow-delay=".4s">
                                    Clevio Innovator Camp membuka tahun 2026 dengan menghadirkan program lokakarya dan
                                    kompetisi pembuatan game berbasis AI untuk peserta SMP, SMA/SMK dan guru. Acara ini
                                    dirancang
                                    untuk membekali peserta dengan keterampilan teknologi terkini, mendorong kreativitas, dan
                                    meningkatkan metode edukasi melalui integrasi kecerdasan buatan.
                                </p>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                    Program ini dimulai dengan lokakarya daring tentang penggunaan AI dalam pembuatan game,
                                    dilanjutkan dengan kompetisi pembuatan game edukatif bertema "Indonesia Tanpa Korupsi: The
                                    Game Makers Movement". Para finalis
                                    akan berkesempatan memamerkan karya mereka dalam puncak acara secara luring, memperkenalkan
                                    inovasi mereka kepada masyarakat luas sekaligus meningkatkan kesadaran akan isu sosial.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION LOGOS / PARTNER - THEME-SYNCED PARALLAX VERSION */}
                <section id="section-logos" className="bg-dark section-dark pt-100 pb-100 relative overflow-hidden jarallax" aria-label="section">
                    <img src="images/background/1.webp" className="jarallax-img" alt="" style={{ filter: 'blur(3px) brightness(0.5)' }} />
                    <div className="gradient-edge-top h-10"></div>
                    <div className="gradient-edge-bottom h-10"></div>
                    <div className="sw-overlay op-5"></div>

                    <div className="container relative" style={{ zIndex: '10' }}>
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                <h5 className="wow fadeInUp text-uppercase mb-3" style={{ letterSpacing: '4px', color: '#a3ff00', fontSize: '12px' }}>Supported By</h5>
                                <div className="spacer-10"></div>
                                <div className="d-flex justify-content-center align-items-center gap-5 wow scale-in-mask" data-wow-delay=".2s">
                                    <img src="images/logo-light/IMprove.png" alt="IMprove" className="img-fluid" style={{ maxHeight: '85px', width: 'auto', filter: 'drop-shadow(0 0 10px rgba(163,255,0,0.3))' }} />
                                    <img src="images/logo-light/mal%20ciputra.png" alt="Mal Ciputra Cibubur" className="img-fluid" style={{ maxHeight: '70px', width: 'auto', filter: 'drop-shadow(0 0 10px rgba(163,255,0,0.3))' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section-about" className="bg-dark section-dark text-light">
                    <div className="container">
                        <div className="row  gx-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="me-lg-5 pe-lg-5 py-5 my-5">
                                    <div className="subtitle wow fadeInUp" data-wow-delay=".2s">Tentang Tema Lomba</div>
                                    <h2 className="wow fadeInUp" data-wow-delay=".4s">Indonesia Tanpa<br />Korupsi: The Game<br />Makers
                                        Movement</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".6s">
                                        Ciptakan game edukatif berbasis AI yang mengangkat nilai integritas, kejujuran, dan
                                        transparansi. Lewat karya yang interaktif dan kreatif, peserta diajak menyuarakan
                                        gerakan anti-korupsi serta membangun kesadaran untuk melawan korupsi sejak dini.
                                    </p>

                                    <ul className="ul-check">
                                        <li className="wow fadeInUp" data-wow-delay=".8s">Edukasi bahaya korupsi lewat game</li>
                                        <li className="wow fadeInUp" data-wow-delay=".9s">Angkat nilai integritas dan kejujuran</li>
                                        <li className="wow fadeInUp" data-wow-delay="1s">Gerakan kreator untuk Indonesia lebih
                                            bersih</li>
                                    </ul>

                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="row g-4">
                                    <div className="col-6">
                                        <div className="relative overflow-hidden rounded-1 wow scale-in-mask mb-4">
                                            <img src="images/misc/s1.png" className="img-fluid" style={{ transform: 'scale(1.15)', transformOrigin: 'center' }} alt="" />
                                            <div className="gradient-edge-bottom h-50"></div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <div className="bg-color text-light p-30 rounded-1 wow scale-in-mask">
                                                <div className="de_count">
                                                    <h2 className="mb-0"><span className="timer" data-to="5" data-speed="3000"></span>
                                                    </h2>
                                                    <div>Days Hackathon</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="spacer-double sm-hide"></div>
                                        <div className="col-12 text-center">
                                            <div className="bg-color-2 text-light p-30 rounded-1 wow scale-in-mask">
                                                <div className="de_count">
                                                    <h2 className="mb-0"><span className="timer" data-to="3" data-speed="3000"></span>
                                                    </h2>
                                                    <div>Session Workshop</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative overflow-hidden rounded-4 wow scale-in-mask mt-4" style={{ borderRadius: '32px' }}>
                                            <img src="images/misc/s2.webp" className="img-fluid" style={{ transform: 'scale(1.12)', transformOrigin: 'center' }} alt="" />
                                            <div className="gradient-edge-bottom h-50"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="section-dark p-0" aria-label="section">
                    <div className="bg-color text-light d-flex py-4 lh-1 rot-2">
                        <div className="de-marquee-list-1 wow fadeInLeft" data-wow-duration="3s">
                            <span className="fs-60 mx-3">Indonesia Tanpa Korupsi</span>
                            <span className="fs-60 mx-3 op-2">/</span>
                            <span className="fs-60 mx-3">Powered by AI</span>
                            <span className="fs-60 mx-3 op-2">/</span>
                            <span className="fs-60 mx-3">Game Edukatif</span>
                            <span className="fs-60 mx-3 op-2">/</span>
                            <span className="fs-60 mx-3">Integritas</span>
                            <span className="fs-60 mx-3 op-2">/</span>
                            <span className="fs-60 mx-3">Kejujuran</span>
                            <span className="fs-60 mx-3 op-2">/</span>
                            <span className="fs-60 mx-3">Transparansi</span>
                            <span className="fs-60 mx-3 op-2">/</span>
                            <span className="fs-60 mx-3">Anti-Korupsi</span>
                            <span className="fs-60 mx-3 op-2">/</span>
                        </div>
                    </div>

                    <div className="bg-color-2 text-light d-flex py-4 lh-1 rot-min-1 mt-min-20">
                        <div className="de-marquee-list-2 wow fadeInRight" data-wow-duration="3s">
                            <span className="fs-60 mx-3">Indonesia Tanpa Korupsi</span>
                            <span className="fs-60 mx-3 op-2">/</span>
                            <span className="fs-60 mx-3">Powered by AI</span>
                            <span className="fs-60 mx-3 op-2">/</span>
                            <span className="fs-60 mx-3">Game Edukatif</span>
                            <span className="fs-60 mx-3 op-2">/</span>
                            <span className="fs-60 mx-3">Integritas</span>
                            <span className="fs-60 mx-3 op-2">/</span>
                            <span className="fs-60 mx-3">Kejujuran</span>
                            <span className="fs-60 mx-3 op-2">/</span>
                            <span className="fs-60 mx-3">Transparansi</span>
                            <span className="fs-60 mx-3 op-2">/</span>
                            <span className="fs-60 mx-3">Anti-Korupsi</span>
                            <span className="fs-60 mx-3 op-2">/</span>
                        </div>
                    </div>
                </section>

                <section className="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">
                    <img src="images/background/2.webp" className="jarallax-img" alt="" />
                    <div className="gradient-edge-top"></div>
                    <div className="gradient-edge-bottom"></div>
                    <div className="sw-overlay op-8"></div>
                    <div className="container relative z-4">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                <div className="wow fadeInUp mb-5" data-wow-delay=".0s">
                                    <FaQuoteLeft className="text-white fs-80 opacity-20" />
                                </div>
                                <h3 className="fs-32 mb-4 wow fadeInUp">“Pendidikan anti-korupsi sejak dini melalui medium game
                                    kreatif interaktif adalah kunci untuk membangun generasi emas Indonesia yang jujur,
                                    transparan, dan berintegritas tanpa batas.”</h3>

                                <span className="fs-18 fw-bold">Clevio Innovator Camp</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section-speakers" className="bg-dark section-dark text-light coming-soon-blur">
                    <div className="container">
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-6 relative z-3">
                                <div className="text-center">
                                    <div className="subtitle wow fadeInUp" data-wow-delay=".0s">Speakers</div>
                                    <h2 className="wow fadeInUp" data-wow-delay=".2s">Narasumber & Mentor</h2>
                                    <p className="lead wow fadeInUp">Dapatkan bimbingan intensif dari coach ahli dalam merancang dan
                                        mengembangkan proyek game berbasis AI.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-4">
                                <div className="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">
                                    <img src="images/team/1.webp" className="w-100 hover-scale-1-1" alt="" />
                                    <div className="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
                                    <div className="abs w-100 start-0 bottom-0 z-3">
                                        <div className="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">
                                            <h3 className="mb-0">Arya Perdana</h3>
                                            <span>Mentor Excel Kemenkeu</span>
                                        </div>
                                        <div className="gradient-edge-bottom h-100 op-8"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">
                                    <img src="images/team/1.webp" className="w-100 hover-scale-1-1" alt="" />
                                    <div className="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
                                    <div className="abs w-100 start-0 bottom-0 z-3">
                                        <div className="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">
                                            <h3 className="mb-0">Arya Perdana</h3>
                                            <span>VP of Machine Learning, Google</span>
                                        </div>
                                        <div className="gradient-edge-bottom h-100 op-8"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="section-juri" className="bg-dark section-dark text-light border-white-top-op-2 pt-80 pb-60 coming-soon-blur">
                    <div className="container">
                        <div className="row justify-content-center text-center mb-5">
                            <div className="col-lg-6">
                                <h2 className="wow fadeInUp" data-wow-delay=".1s">Tim Juri LCGN</h2>
                                <p className="lead wow fadeInUp">Diadili oleh para pakar industri game dan inovasi digital tingkat
                                    nasional.</p>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {/*  Juri 1  */}
                            <div className="col-lg-4 col-md-6">
                                <div className="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask bg-dark border-white-op-2 text-center pt-5 pb-4 px-3"
                                    data-wow-delay=".2s">
                                    {/*  Green accent top  */}
                                    <div className="absolute w-100 top-0 start-0" style={{ height: '100px', backgroundColor: '#a3ff00' }}>
                                    </div>

                                    <img src="images/team/1.webp" className="rounded-circle mb-3 relative z-2"
                                        style={{ width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #1a1a2e' }}
                                        alt="Calvin Mona Sandehang" />

                                    <h3 className="mb-1">Calvin Mona Sandehang</h3>
                                    <span className="d-block text-white" style={{ fontSize: '14px' }}>Program Manager AGI, Game
                                        Programmer Level Up Agate</span>
                                </div>
                            </div>
                            {/*  Juri 2  */}
                            <div className="col-lg-4 col-md-6">
                                <div className="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask bg-dark border-white-op-2 text-center pt-5 pb-4 px-3"
                                    data-wow-delay=".4s">
                                    <div className="absolute w-100 top-0 start-0" style={{ height: '100px', backgroundColor: '#a3ff00' }}>
                                    </div>

                                    <img src="images/team/2.webp" className="rounded-circle mb-3 relative z-2"
                                        style={{ width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #1a1a2e' }}
                                        alt="Bintang Ekananda" />

                                    <h3 className="mb-1">Bintang Ekananda</h3>
                                    <span className="d-block text-white" style={{ fontSize: '14px' }}>Co-founder/CEO alner.id</span>
                                </div>
                            </div>
                            {/*  Juri 3  */}
                            <div className="col-lg-4 col-md-6">
                                <div className="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask bg-dark border-white-op-2 text-center pt-5 pb-4 px-3"
                                    data-wow-delay=".6s">
                                    <div className="absolute w-100 top-0 start-0" style={{ height: '100px', backgroundColor: '#a3ff00' }}>
                                    </div>

                                    <img src="images/team/3.webp" className="rounded-circle mb-3 relative z-2"
                                        style={{ width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #1a1a2e' }}
                                        alt="Luat Sihombing" />

                                    <h3 className="mb-1">Luat Sihombing</h3>
                                    <span className="d-block text-white" style={{ fontSize: '14px' }}>Direktur Gim</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


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



                {/* section-prizepool */}
                <section id="section-prizepool" className="bg-dark section-dark pt-80 pb-80 relative overflow-hidden coming-soon-blur" aria-label="section">

                    {/* Fixed Background Image Blurred (Using absolute div instead of img tag to prevent layout pushing) */}
                    <div className="absolute w-100 h-100 start-0 top-0 z-0" style={{
                        backgroundImage: 'url(images/background/8.webp)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(10px) brightness(0.5)',
                        transform: 'scale(1.1)'
                    }}></div>

                    <div className="gradient-edge-top h-10 relative z-1"></div>
                    <div className="gradient-edge-bottom h-10 relative z-1"></div>

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
                </section>


                {/* NEW KATEGORI PEMENANG - REDESIGN TECH-PANEL */}
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
                                            <span className="text-white-op-8 fs-14">Dipilih berdasarkan perolehan<br />suara dan interaksi terbanyak</span>
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
                </section>


                <section id="section-schedule" className="bg-dark section-dark text-light">
                    <div className="container">
                        <div className="row g-4 gx-5 justify-content-center">
                            <div className="col-lg-6 text-center">
                                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Mekanisme Kegiatan</div>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Agenda Lomba Cipta Game</h2>
                            </div>
                        </div>
                        <div className="row g-4 gx-5 justify-content-center wow fadeInUp">
                            <div className="col-lg-12">
                                <div className="lcgn-timeline-wrapper wow fadeIn" data-wow-duration="0.5s">
                                    <button className="timeline-nav-btn prev" onClick={() => { document.querySelector('.lcgn-timeline').scrollBy({ left: -400, behavior: 'smooth' }); }}>
                                        <i className="fa fa-chevron-left"></i>
                                    </button>
                                    <div className="lcgn-timeline">
                                        <div className="lcgn-timeline-track">

                                            <div className="timeline-item bottom">
                                                <div className="timeline-node"><i className="fa fa-clipboard-list"></i></div>
                                                <div className="timeline-card" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                                                    <div className="timeline-date">27 Mar – 24 Apr 2026</div>
                                                    <h4 className="timeline-title">Pendaftaran</h4>
                                                    <p className="timeline-desc">Pendaftaran dilakukan dengan mengisi form yang sesuai dengan kriteria di bagian Informasi Pendaftaran.</p>
                                                </div>
                                            </div>

                                            <div className="timeline-item top">
                                                <div className="timeline-node"><i className="fa fa-chalkboard"></i></div>
                                                <div className="timeline-card" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                                                    <div className="timeline-date">25 April 2026</div>
                                                    <h4 className="timeline-title">Workshop 1 (Online)</h4>
                                                    <p className="timeline-desc">Sesi workshop pembuatan game dengan AI mengimplementasikan teknologi AI dalam membantu pembuatan sebuah game.</p>
                                                </div>
                                            </div>

                                            <div className="timeline-item bottom">
                                                <div className="timeline-node"><i className="fa fa-chalkboard"></i></div>
                                                <div className="timeline-card" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                                                    <div className="timeline-date">2 Mei 2026</div>
                                                    <h4 className="timeline-title">Workshop 2 (Online)</h4>
                                                    <p className="timeline-desc">Sesi workshop pembuatan game dengan AI mengimplementasikan teknologi AI dalam membantu pembuatan sebuah game.</p>
                                                </div>
                                            </div>

                                            <div className="timeline-item top">
                                                <div className="timeline-node"><i className="fa fa-chalkboard"></i></div>
                                                <div className="timeline-card" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                                                    <div className="timeline-date">9 Mei 2026</div>
                                                    <h4 className="timeline-title">Workshop 3 (Online)</h4>
                                                    <p className="timeline-desc">Sesi workshop pembuatan game dengan AI mengimplementasikan teknologi AI dalam membantu pembuatan sebuah game.</p>
                                                </div>
                                            </div>

                                            <div className="timeline-item bottom">
                                                <div className="timeline-node"><i className="fa fa-flag"></i></div>
                                                <div className="timeline-card" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                                                    <div className="timeline-date">9 Mei 2026</div>
                                                    <h4 className="timeline-title">Opening LCGN 2026</h4>
                                                    <p className="timeline-desc">Opening membahas peraturan, sistem pelaksanaan lomba, dan kriteria penilaian lomba.</p>
                                                </div>
                                            </div>

                                            <div className="timeline-item top">
                                                <div className="timeline-node"><i className="fa fa-laptop-code"></i></div>
                                                <div className="timeline-card" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                                                    <div className="timeline-date">9 – 13 Mei 2026</div>
                                                    <h4 className="timeline-title">Game Hackathon (Online)</h4>
                                                    <p className="timeline-desc">Para peserta mengerjakan game di rumah masing-masing secara mandiri.</p>
                                                </div>
                                            </div>

                                            <div className="timeline-item bottom">
                                                <div className="timeline-node"><i className="fa fa-calendar-check"></i></div>
                                                <div className="timeline-card" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                                                    <div className="timeline-date">14 Mei 2026</div>
                                                    <h4 className="timeline-title">Deadline Pengumpulan</h4>
                                                    <p className="timeline-desc">Game dikumpulkan selambat-lambatnya pukul 17.00 WIB pada hari Kamis, 14 Mei 2026.</p>
                                                </div>
                                            </div>

                                            <div className="timeline-item top">
                                                <div className="timeline-node"><i className="fa fa-star"></i></div>
                                                <div className="timeline-card" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                                                    <div className="timeline-date">14 – 15 Mei 2026</div>
                                                    <h4 className="timeline-title">Seleksi Finalis</h4>
                                                    <p className="timeline-desc">Tahapan penilaian dan penjurian untuk menentukan peserta terbaik yang melaju ke babak final.</p>
                                                </div>
                                            </div>

                                            <div className="timeline-item bottom">
                                                <div className="timeline-node"><i className="fa fa-bullhorn"></i></div>
                                                <div className="timeline-card" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                                                    <div className="timeline-date">15 Mei 2026</div>
                                                    <h4 className="timeline-title">Pengumuman Finalis</h4>
                                                    <p className="timeline-desc">Peserta/Tim yang lolos akan diumumkan di Instagram @cleviocamp pukul 15.00 WIB.</p>
                                                </div>
                                            </div>

                                            <div className="timeline-item top">
                                                <div className="timeline-node"><i className="fa fa-trophy"></i></div>
                                                <div className="timeline-card" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                                                    <div className="timeline-date">17 Mei 2026</div>
                                                    <h4 className="timeline-title">Festival &amp; Pameran (Hybrid)</h4>
                                                    <p className="timeline-desc">Para finalis presentasi game &amp; pameran langsung di Mal Ciputra Cibubur atau online via Zoom.</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <button className="timeline-nav-btn next" onClick={() => { document.querySelector('.lcgn-timeline').scrollBy({ left: 400, behavior: 'smooth' }); }}>
                                        <i className="fa fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section-venue" className="bg-dark section-dark text-light pt-80 relative jarallax"
                    aria-label="section">
                    <div className="container relative z-2">
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-6 text-center">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">Lokasi Festival</div>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Location & Venue</h2>
                                <p className="lead wow fadeInUp" data-wow-delay=".6s">Mal Ciputra Cibubur menjadi panggung utama perayaan kreativitas dan teknologi di LCGNAI 2026. Saksikan langsung karya inovatif game berbasis AI dari talenta muda terbaik Indonesia di lokasi strategis ini.</p>
                            </div>
                        </div>

                        <div className="row g-4 justify-content-center">
                            <div className="col-md-10">
                                <img src="images/misc/ciputra.jpeg" className="venue-img-cropped wow scale-in-mask" alt="Venue Mal Ciputra Cibubur - Lokasi LCGNAI 2026" />
                            </div>
                        </div>

                    </div>
                </section>

                <section id="section-testimonials" className="bg-dark section-dark text-light border-white-top-op-2 pt-80 pb-80" aria-label="section">
                    <div className="container">
                        <div className="row justify-content-center text-center mb-5">
                            <div className="col-lg-6">
                                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Ulasan Peserta</div>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Apa Kata Mereka?</h2>
                                <p className="lead wow fadeInUp">Dengarkan pengalaman langsung para peserta dan pendamping lomba mengenai LCGN.</p>
                            </div>
                        </div>
                    </div>

                    <div className="lcgn-testimonial-marquee-container">
                        <div className="lcgn-testimonial-track">
                            {[...testimonialsData, ...testimonialsData].map((testi, index) => (
                                <div key={index} className="lcgn-testimonial-card" style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                                    <div className="testi-header">
                                        <img src={testi.img} alt={testi.name} className="testi-avatar" />
                                        <div className="testi-info">
                                            <h4 className="testi-name">{testi.name}</h4>
                                            <span className="testi-title">{testi.title}</span>
                                        </div>
                                    </div>
                                    <div className="testi-body">
                                        <p>{testi.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="section-tickets" className="bg-dark section-dark text-light pt-80 relative jarallax"
                    aria-label="section">
                    <img src="images/background/7.webp" className="jarallax-img" alt="" />
                    <div className="gradient-edge-top"></div>
                    <div className="gradient-edge-bottom"></div>
                    <div className="sw-overlay op-7"></div>

                    <div className="container relative z-2">
                        <div className="row g-4 gx-5 justify-content-center">
                            <div className="col-lg-6 text-center">
                                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Kategori Peserta Lomba</div>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Pilih Kategori Lomba Nasional</h2>
                                <p className="lead wow fadeInUp" data-wow-delay=".4s">Select the perfect ticket for your needs and
                                    gain access to exclusive sessions, workshops, and more.</p>
                            </div>
                        </div>

                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-12">
                                <div className="lcgn-pricing-grid">
                                    <div className="lcgn-price-card" style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                                        <div className="lcgn-price-card-header">
                                            <div className="lcgn-price-card-icon"><i className="fa fa-chalkboard-teacher"></i></div>
                                            <h3 className="lcgn-price-card-title">Peserta Guru</h3>
                                            <p className="lcgn-price-card-subtitle">Guru / Pendidik Pendamping</p>
                                            <div className="lcgn-price-amount">
                                                <span className="amount">Rp 150K</span>
                                                <span className="unit">/tim</span>
                                            </div>
                                        </div>
                                        <div className="lcgn-price-card-body">
                                            <ul className="lcgn-price-features">
                                                <li>1 tim, minimal 2 orang.</li>
                                                <li>Mengikuti Workshop &amp; Hackaton.</li>
                                                <li>Berkomitmen mengikuti jalannya acara hingga selesai.</li>
                                            </ul>
                                            <a className="lcgn-price-btn" href="https://clev.io/RegistLCGNAI26GURU" target="_blank" rel="noreferrer">Daftar Sekarang</a>
                                        </div>
                                    </div>

                                    <div className="lcgn-price-card" style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                                        <div className="lcgn-price-card-header">
                                            <div className="lcgn-price-card-icon"><i className="fa fa-graduation-cap"></i></div>
                                            <h3 className="lcgn-price-card-title">Peserta Siswa</h3>
                                            <p className="lcgn-price-card-subtitle">SMP / SMA / SMK Sederajat</p>
                                            <div className="lcgn-price-amount">
                                                <span className="amount">Rp 250K</span>
                                                <span className="unit">/tim</span>
                                            </div>
                                        </div>
                                        <div className="lcgn-price-card-body">
                                            <ul className="lcgn-price-features">
                                                <li>1 tim, minimal 2 orang.</li>
                                                <li>Mengikuti Workshop &amp; Hackaton.</li>
                                                <li>Berkomitmen mengikuti jalannya acara hingga selesai.</li>
                                            </ul>
                                            <a className="lcgn-price-btn" href="https://clev.io/RegistLCGNAI26" target="_blank" rel="noreferrer">Daftar Sekarang</a>
                                        </div>
                                    </div>

                                    <div className="lcgn-price-card" style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                                        <div className="lcgn-price-card-header">
                                            <div className="lcgn-price-card-icon"><i className="fa fa-laptop-code"></i></div>
                                            <h3 className="lcgn-price-card-title">Peserta Workshop</h3>
                                            <p className="lcgn-price-card-subtitle">Peserta Umum — Workshop Only</p>
                                            <div className="lcgn-price-amount">
                                                <span className="amount">Rp 150K</span>
                                                <span className="unit">/Orang</span>
                                            </div>
                                        </div>
                                        <div className="lcgn-price-card-body">
                                            <ul className="lcgn-price-features">
                                                <li>1 Orang.</li>
                                                <li>Mengikuti Workshop.</li>
                                                <li>Tidak mengikuti rangkaian lomba.</li>
                                            </ul>
                                            <a className="lcgn-price-btn" href="https://clev.io/RegistWorkshopAI26" target="_blank" rel="noreferrer">Daftar Sekarang</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section id="section-faq" className="bg-dark section-dark text-light coming-soon-blur">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-5">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">Everything You Need to Know</div>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h2>
                            </div>

                            <div className="col-lg-7">
                                <div className="accordion s2 wow fadeInUp">
                                    <div className="accordion-section">
                                        <div className="accordion-section-title" data-tab="#accordion-a1">
                                            What is the AI Summit 2026?
                                        </div>
                                        <div className="accordion-section-content" id="accordion-a1">
                                            The AI Summit 2026 is a premier event gathering leading AI experts, thought leaders,
                                            and innovators. It features keynotes, workshops, panels, and networking
                                            opportunities focusing on the latest advancements in artificial intelligence.
                                        </div>

                                        <div className="accordion-section-title" data-tab="#accordion-a2">
                                            When and where will the event be held?
                                        </div>
                                        <div className="accordion-section-content" id="accordion-a2">
                                            The AI Summit 2026 will take place from **[Event Dates]** at **[Event Location]**.
                                            More details about the venue and directions will be provided closer to the event.
                                        </div>

                                        <div className="accordion-section-title" data-tab="#accordion-a3">
                                            How can I register for the event?
                                        </div>
                                        <div className="accordion-section-content" id="accordion-a3">
                                            You can register for the AI Summit 2026 through our official website. Simply choose
                                            your ticket type and fill out the registration form.
                                        </div>

                                        <div className="accordion-section-title" data-tab="#accordion-a4">
                                            What ticket options are available?
                                        </div>
                                        <div className="accordion-section-content" id="accordion-a4">
                                            We offer a range of ticket options, including Standard, VIP, Full Access Pass,
                                            Student, and Virtual tickets. You can find more details about each ticket type on
                                            our [Tickets Page](#).
                                        </div>

                                        <div className="accordion-section-title" data-tab="#accordion-a5">
                                            Can I transfer my ticket to someone else?
                                        </div>
                                        <div className="accordion-section-content" id="accordion-a5">
                                            Tickets are non-transferable. If you are unable to attend, please contact our
                                            support team for assistance.
                                        </div>

                                        <div className="accordion-section-title" data-tab="#accordion-a6">
                                            Will there be virtual participation?
                                        </div>
                                        <div className="accordion-section-content" id="accordion-a6">
                                            Yes! For those who can’t attend in person, we offer a **Virtual Ticket**. This
                                            provides access to live-streamed sessions, workshops, and networking opportunities
                                            online.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">
                    <img src="images/background/3.webp" className="jarallax-img" alt="" />
                    <div className="gradient-edge-top"></div>
                    <div className="gradient-edge-bottom"></div>
                    <div className="sw-overlay op-8"></div>
                    <div className="container relative z-2">
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">Sponsorship Opportunities</div>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Tertarik Menjadi Sponsor?</h2>
                                <p className="wow fadeInUp" data-wow-delay=".4s">
                                    Jadilah bagian dari gerakan literasi digital dan kreativitas anak bangsa. Dukung talenta muda Indonesia dalam mengembangkan inovasi game berbasis AI. Hubungi kami untuk mendiskusikan kemitraan yang berdampak luas.
                                </p>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-auto mb-3 wow fadeInUp" data-wow-delay=".6s">
                                <a href="https://wa.me/6281212860444" target="_blank" rel="noopener noreferrer" className="btn-main fx-slide btn-premium-glow" data-hover="Hubungi Tim Clevio">
                                    <span>Hubungi Tim Clevio</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  footer begin  */}
                <footer className="text-light section-dark pb-0">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-md-12">
                                <div className="d-lg-flex align-items-center justify-content-between text-center">
                                    <div>
                                        <h3 className="fs-20">Address</h3>
                                        Bukit Golf Cibubur, Riverside 1 Blok A7/25,<br />
                                        Bojong Nangka, Kec. Gn. Putri, Kab. Bogor,<br />
                                        Jawa Barat 16963
                                    </div>
                                    <div>
                                        <img src="images/logo.webp" className="w-150px" alt="" /><br />
                                        <div className="social-icons mb-sm-30 mt-4">
                                            <a href="#"><FaFacebookF /></a>
                                            <a href="#"><FaInstagram /></a>
                                            <a href="#"><FaTwitter /></a>
                                            <a href="#"><FaYoutube /></a>
                                        </div>

                                    </div>
                                    <div>
                                        <h3 className="fs-20">Contact Us</h3>
                                        <a href="https://clev.io/chat" target="_blank" rel="noopener noreferrer" className="text-white">clev.io/chat</a><br />
                                        62 812-1286-0444<br />
                                        camp@clevio.co
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subfooter">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    Copyright 2026 - Clevio Innovator Camp. All Rights Reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/*  footer end  */}
            </div>

            {/*  Javascript Files
    ==================================================  */}

        </>
    );
}

export default App;
