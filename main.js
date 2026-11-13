(() => {
    "use strict";

    // Mark document ready for smooth CSS reveal transitions without flash bug
    document.documentElement.classList.add("js-ready");

    /* =========================================================
       01. BILINGUAL DICTIONARY (ID & EN)
    ========================================================= */
    const translations = {
        id: {
            pageTitle: "Ghatfan Almer — Portofolio",
            metaDescription:
                "Portofolio Ghatfan Almer — eksplorasi teknologi, OSINT, pengembangan web, dan keamanan digital.",
            skip: "Lewati ke konten utama",
            homeLabel: "Ghatfan Almer — beranda",
            portfolioLabel: "PORTOFOLIO PERSONAL",
            languageLabel: "Pilih bahasa",
            navAbout: "Tentang",
            navSkills: "Keahlian",
            navContact: "Kontak",

            availability: "Terbuka untuk koneksi & kolaborasi",
            greeting: "Halo, saya",
            taglineOne: "Rasa ingin tahu.",
            taglineTwo: "Tanpa batas.",
            heroDescription:
                "Saya mengeksplorasi teknologi, membangun pengalaman web modern, dan mempelajari keamanan digital. Menghubungkan rasa penasaran dengan solusi yang presisi dan berguna.",
            connectButton: "Mari terhubung",
            skillsButton: "Jelajahi keahlian",

            aboutEyebrow: "01 / Tentang saya",
            aboutTitleOne: "Selalu penasaran.",
            aboutTitleTwo: "Selalu bertumbuh.",
            aboutOpening: "Saya Ghatfan Almer, seorang penggemar teknologi.",
            aboutOne:
                "Saya menikmati proses belajar, bereksperimen, dan memahami bagaimana sesuatu bekerja—mulai dari sebuah antarmuka hingga sistem di baliknya.",
            aboutTwo:
                "Minat saya meliputi OSINT, pengembangan web, dan pengujian keamanan pada lingkungan yang memiliki izin. Saya senang menelusuri informasi, membangun antarmuka yang nyaman, serta mendokumentasikan temuan dengan jelas.",
            aboutThree:
                "Saya juga menggunakan Microsoft dan Google Workspace untuk mengolah informasi dan berkolaborasi. Bagi saya, kemampuan teknis berjalan bersama ketelitian, etika, dan komunikasi yang baik.",
            traitOne: "Rasa ingin tahu",
            traitTwo: "Teliti",
            traitThree: "Terus belajar",

            workflowTitleOne: "Eksplorasi",
            workflowTitleTwo: "Bangun & uji",
            workflowTitleThree: "Sempurnakan",
            workflowOne:
                "Mulai dari pertanyaan, cari konteks, dan pahami persoalannya terlebih dahulu.",
            workflowTwo:
                "Ubah ide menjadi sesuatu yang nyata, lalu pelajari apa yang bisa ditingkatkan.",
            workflowThree:
                "Rapikan detail, dokumentasikan proses, dan terus berkembang dari setiap percobaan.",

            skillsEyebrow: "02 / Keahlian & perangkat",
            skillsTitle: "Yang saya tekuni",
            skillsIntro:
                "Perpaduan eksplorasi, pengembangan, dan perangkat produktivitas untuk mengubah ide menjadi hasil.",
            osintDescription:
                "Menelusuri dan memverifikasi informasi dari sumber terbuka untuk menyusun temuan yang terstruktur, dengan memperhatikan privasi dan etika.",
            webDescription:
                "Membangun website responsif dengan antarmuka yang rapi, interaksi yang nyaman, dan perhatian pada pengalaman pengguna.",
            securityDescription:
                "Mendalami pengujian keamanan pada lingkungan berizin, mendokumentasikan temuan, dan memahami rekomendasi perbaikannya.",
            microsoftDescription:
                "Mengolah dokumen, merapikan data, dan menyusun presentasi menggunakan Word, Excel, serta PowerPoint.",
            googleDescription:
                "Mengelola informasi dan pekerjaan bersama melalui Docs, Sheets, Slides, serta Drive agar kolaborasi lebih tertata.",
            researchTag: "Riset",
            verificationTag: "Verifikasi",
            securityTag: "Keamanan",
            reportingTag: "Pelaporan",
            collaborationTag: "Kolaborasi",
            learningTitle: "Belajar tidak berhenti.",
            learningDescription:
                "Selalu ada ruang untuk pengetahuan baru, tantangan berbeda, dan kesempatan berkembang bersama orang lain.",
            learningTag: "Masih mengeksplorasi",

            contactEyebrow: "03 / Mulai percakapan",
            contactAvailability: "Terbuka untuk ide baru",
            contactTitleOne: "Ide bagus dimulai",
            contactTitleTwo: "dari percakapan.",
            contactDescription:
                "Ada ide, pertanyaan, atau kesempatan berkolaborasi? Kirim pesan. Mari lihat apa yang bisa kita bangun bersama.",
            copyEmail: "Salin alamat email",
            copyShort: "Salin",
            copiedShort: "Tersalin",
            emailCopied: "Alamat email fannalmer@gmail.com berhasil disalin.",
            emailCopyFailed: "Silakan salin manual: fannalmer@gmail.com",

            instagramLabel: "Instagram ghtfnalmr_, buka tab baru",
            whatsappLabel: "Hubungi melalui WhatsApp, buka tab baru",
            telegramLabel: "Telegram gxpnn, buka tab baru",

            footerNote: "Dibangun dengan rasa ingin tahu.",
            backTop: "Kembali ke atas",

            musicWidgetLabel: "Pemutar musik Cancer — My Chemical Romance",
            playToggleLabel: "Putar atau hentikan lagu Cancer",
            openMusic: "Buka panel penuh pemutar Spotify",
            closeMusic: "Tutup panel musik",
            btnPlayNow: "Putar",
            btnStopNow: "Stop",
            musicConnecting: "Menghubungkan pemutar lagu…",
            musicReady: "Siap diputar penuh dari awal hingga akhir.",
            musicAutoWaiting: "Ketuk layar atau tombol Play untuk memulai audio.",
            musicPlaying: "Sedang memutar: Cancer — My Chemical Romance.",
            musicStopped: "Lagu dihentikan. Tekan Play untuk memutar lagi.",
            musicFallback: "Gunakan pemutar Spotify di atas untuk mendengarkan lagu penuh.",
            openSpotify: "Buka di Spotify",
            spotifyExternalLabel: "Buka Cancer di Spotify pada tab baru"
        },

        en: {
            pageTitle: "Ghatfan Almer — Portfolio",
            metaDescription:
                "Ghatfan Almer's portfolio — exploring technology, OSINT, web development, and digital security.",
            skip: "Skip to main content",
            homeLabel: "Ghatfan Almer — home",
            portfolioLabel: "PERSONAL PORTFOLIO",
            languageLabel: "Choose language",
            navAbout: "About",
            navSkills: "Skills",
            navContact: "Contact",

            availability: "Open to connections & collaboration",
            greeting: "Hello, I'm",
            taglineOne: "Curious mind.",
            taglineTwo: "No boundaries.",
            heroDescription:
                "I explore technology, craft modern web experiences, and study digital security. Connecting curiosity with precise, useful outcomes.",
            connectButton: "Let's connect",
            skillsButton: "Explore my skills",

            aboutEyebrow: "01 / About me",
            aboutTitleOne: "Always curious.",
            aboutTitleTwo: "Always growing.",
            aboutOpening: "I'm Ghatfan Almer, a technology enthusiast.",
            aboutOne:
                "I enjoy learning, experimenting, and understanding how things work—from an interface to the systems behind it.",
            aboutTwo:
                "My interests include OSINT, web development, and security testing in authorized environments. I enjoy researching information, building comfortable interfaces, and documenting findings clearly.",
            aboutThree:
                "I also use Microsoft and Google Workspace to organize information and collaborate. To me, technical skills go hand in hand with attention to detail, ethics, and clear communication.",
            traitOne: "Curiosity-driven",
            traitTwo: "Detail-oriented",
            traitThree: "Continuous learner",

            workflowTitleOne: "Explore",
            workflowTitleTwo: "Build & test",
            workflowTitleThree: "Refine",
            workflowOne:
                "Start with a question, find the context, and understand the problem first.",
            workflowTwo:
                "Turn an idea into something real, then discover what can be improved.",
            workflowThree:
                "Polish the details, document the process, and grow with every experiment.",

            skillsEyebrow: "02 / Skills & toolkit",
            skillsTitle: "What I work with",
            skillsIntro:
                "A mix of exploration, development, and productivity tools to turn ideas into outcomes.",
            osintDescription:
                "Researching and verifying information from open sources to produce structured findings while respecting privacy and ethics.",
            webDescription:
                "Building responsive websites with clean interfaces, comfortable interactions, and attention to the user experience.",
            securityDescription:
                "Studying security testing in authorized environments, documenting findings, and understanding remediation recommendations.",
            microsoftDescription:
                "Working with documents, organizing data, and creating presentations using Word, Excel, and PowerPoint.",
            googleDescription:
                "Organizing information and teamwork through Docs, Sheets, Slides, and Drive for more structured collaboration.",
            researchTag: "Research",
            verificationTag: "Verification",
            securityTag: "Security",
            reportingTag: "Reporting",
            collaborationTag: "Collaboration",
            learningTitle: "Learning never stops.",
            learningDescription:
                "There's always room for new knowledge, different challenges, and opportunities to grow with others.",
            learningTag: "Still exploring",

            contactEyebrow: "03 / Start a conversation",
            contactAvailability: "Open to new ideas",
            contactTitleOne: "Good ideas start",
            contactTitleTwo: "with a conversation.",
            contactDescription:
                "Have an idea, a question, or an opportunity to collaborate? Send a message. Let's see what we can build together.",
            copyEmail: "Copy email address",
            copyShort: "Copy",
            copiedShort: "Copied",
            emailCopied: "Email address fannalmer@gmail.com copied.",
            emailCopyFailed: "Please copy manually: fannalmer@gmail.com",

            instagramLabel: "Instagram ghtfnalmr_, opens in a new tab",
            whatsappLabel: "Contact via WhatsApp, opens in a new tab",
            telegramLabel: "Telegram gxpnn, opens in a new tab",

            footerNote: "Built with curiosity.",
            backTop: "Back to top",

            musicWidgetLabel: "Music player Cancer — My Chemical Romance",
            playToggleLabel: "Play or stop Cancer",
            openMusic: "Open full Spotify player panel",
            closeMusic: "Close music panel",
            btnPlayNow: "Play",
            btnStopNow: "Stop",
            musicConnecting: "Connecting music player…",
            musicReady: "Ready to play from start to finish.",
            musicAutoWaiting: "Tap anywhere or press Play to start audio.",
            musicPlaying: "Now playing: Cancer — My Chemical Romance.",
            musicStopped: "Playback stopped. Press Play anytime.",
            musicFallback: "Use the Spotify player above to listen.",
            openSpotify: "Open in Spotify",
            spotifyExternalLabel: "Open Cancer on Spotify in a new tab"
        }
    };

    let currentLanguage = "id";
    let musicStatusKey = "musicConnecting";
    let isCurrentlyPlaying = false;

    function t(key) {
        return (translations[currentLanguage] && translations[currentLanguage][key]) || key;
    }

    function updateMusicButtonsText() {
        const actionLabel = document.getElementById("drawer-action-label");
        if (actionLabel) {
            actionLabel.textContent = t(isCurrentlyPlaying ? "btnStopNow" : "btnPlayNow");
        }
        const statusEl = document.getElementById("music-status");
        if (statusEl) {
            statusEl.textContent = t(musicStatusKey);
        }
    }

    function applyLanguage(lang) {
        currentLanguage = lang === "en" ? "en" : "id";
        document.documentElement.lang = currentLanguage;
        document.title = t("pageTitle");

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", t("metaDescription"));
        }

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.dataset.i18n;
            if (translations[currentLanguage][key]) {
                el.textContent = t(key);
            }
        });

        document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
            const key = el.dataset.i18nAria;
            if (translations[currentLanguage][key]) {
                el.setAttribute("aria-label", t(key));
            }
        });

        document.querySelectorAll("[data-language]").forEach((btn) => {
            btn.setAttribute("aria-pressed", String(btn.dataset.language === currentLanguage));
        });

        updateMusicButtonsText();
    }

    try {
        const saved = localStorage.getItem("ghatfan-language");
        if (saved === "id" || saved === "en") {
            currentLanguage = saved;
        }
    } catch {
        // Ignore restricted storage
    }

    applyLanguage(currentLanguage);

    document.querySelectorAll("[data-language]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.language;
            applyLanguage(lang);
            try {
                localStorage.setItem("ghatfan-language", lang);
            } catch {
                // Continue without persistence
            }
        });
    });

    const yearEl = document.getElementById("current-year");
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }

    /* =========================================================
       02. SMOOTH SCROLL REVEAL & OFFSCREEN GPU ANIMATION PAUSE
    ========================================================= */
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealItems = [...document.querySelectorAll(".reveal-item")];

    if ("IntersectionObserver" in window && !prefersReducedMotion.matches) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
        );

        revealItems.forEach((el) => revealObserver.observe(el));
    } else {
        revealItems.forEach((el) => el.classList.add("is-visible"));
    }

    // Pause ambient animations when scrolled out of viewport (saves mobile battery & FPS)
    const motionZones = document.querySelectorAll(".motion-zone");
    if ("IntersectionObserver" in window) {
        const zoneObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle("in-view", entry.isIntersecting);
                });
            },
            { rootMargin: "80px 0px" }
        );
        motionZones.forEach((zone) => zoneObserver.observe(zone));
    } else {
        motionZones.forEach((zone) => zone.classList.add("in-view"));
    }

    document.addEventListener("visibilitychange", () => {
        document.documentElement.classList.toggle("page-hidden", document.hidden);
    });

    /* =========================================================
       03. DESKTOP-ONLY SPOTLIGHT CARDS (ZERO OVERHEAD ON MOBILE)
    ========================================================= */
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        document.querySelectorAll(".spotlight-card").forEach((card) => {
            card.addEventListener(
                "pointermove",
                (e) => {
                    const rect = card.getBoundingClientRect();
                    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
                },
                { passive: true }
            );
        });
    }

    /* =========================================================
       04. COPY EMAIL WITH INSTANT VISUAL FEEDBACK
    ========================================================= */
    const toast = document.getElementById("toast");
    const copyBtn = document.getElementById("copy-email");
    let toastTimeout
     = null;
    let copyResetTimeout = null;

    function showToast(msg) {
        if (!toast) return;
        window.clearTimeout(toastTimeout);
        toast.textContent = msg;
        toast.hidden = false;
        toastTimeout = window.setTimeout(() => {
            toast.hidden = true;
        }, 3200);
    }

    if (copyBtn) {
        copyBtn.addEventListener("click", async () => {
            const labelSpan = copyBtn.querySelector(".copy-label");
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText("fannalmer@gmail.com");
                } else {
                    const temp = document.createElement("textarea");
                    temp.value = "fannalmer@gmail.com";
                    temp.style.position = "fixed";
                    temp.style.opacity = "0";
                    document.body.appendChild(temp);
                    temp.select();
                    document.execCommand("copy");
                    temp.remove();
                }

                copyBtn.classList.add("is-copied");
                if (labelSpan) labelSpan.textContent = t("copiedShort");
                showToast(t("emailCopied"));

                window.clearTimeout(copyResetTimeout);
                copyResetTimeout = window.setTimeout(() => {
                    copyBtn.classList.remove("is-copied");
                    if (labelSpan) labelSpan.textContent = t("copyShort");
                }, 2400);
            } catch {
                showToast(t("emailCopyFailed"));
            }
        });
    }

    /* =========================================================
       05. HEADER DUAL-ENGINE MUSIC PLAYER (AUTOPLAY + STOP)
       - Placed right next to "Ghatfan Almer" in Header.
       - Supports full-track playback via local `cancer.mp3` (if provided)
         OR official Spotify IFrame Controller API from start to finish.
       - Smart Autoplay on load + First-Interaction Autoplay Unlock.
       - Instant Play / Stop toggle with progress bar & solar equalizer.
    ========================================================= */
    const TRACK_ID = "0GgN4MhR5GKn5IcKN0e0rG";
    const TRACK_URI = `spotify:track:${TRACK_ID}`;

    const headerPlayer = document.getElementById("header-player");
    const playToggleBtn = document.getElementById("player-toggle-btn");
    const expandMetaBtn = document.getElementById("player-expand-btn");
    const drawerTriggerBtn = document.getElementById("player-drawer-trigger");
    const drawer = document.getElementById("header-spotify-drawer");
    const drawerCloseBtn = document.getElementById("drawer-close-btn");
    const drawerMasterStopBtn = document.getElementById("drawer-master-stop");
    const progressFill = document.getElementById("player-progress-fill");
    const spotifyFrame = document.getElementById("spotify-frame");
    const localAudio = document.getElementById("local-full-audio");

    let spotifyController = null;
    let useLocalAudio = false;
    let userManuallyStopped = false;
    let autoplayPendingUnlock = true;
    let fallbackLoaded = false;

    function setPlayingUI(playing, statusKey) {
        isCurrentlyPlaying = playing;
        if (headerPlayer) {
            headerPlayer.classList.toggle("is-playing", playing);
        }
        if (statusKey) {
            musicStatusKey = statusKey;
        }
        updateMusicButtonsText();
    }

    function setProgressRatio(ratio) {
        if (!progressFill) return;
        const clamped = Math.max(0, Math.min(1, Number(ratio) || 0));
        progressFill.style.transform = `scaleX(${clamped})`;
    }

    function setDrawerOpen(open) {
        if (!drawer) return;
        drawer.hidden = !open;
        if (expandMetaBtn) expandMetaBtn.setAttribute("aria-expanded", String(open));
        if (drawerTriggerBtn) drawerTriggerBtn.setAttribute("aria-expanded", String(open));
    }

    // Check if user placed a full-length `cancer.mp3` file next to index.html
    if (localAudio) {
        localAudio.volume = 0.85;

        localAudio.addEventListener("canplay", () => {
            useLocalAudio = true;
            if (!userManuallyStopped && !isCurrentlyPlaying) {
                attemptPlay();
            }
        });

        localAudio.addEventListener("timeupdate", () => {
            if (!useLocalAudio || !localAudio.duration) return;
            setProgressRatio(localAudio.currentTime / localAudio.duration);
        });

        localAudio.addEventListener("play", () => {
            if (useLocalAudio) setPlayingUI(true, "musicPlaying");
        });

        localAudio.addEventListener("pause", () => {
            if (useLocalAudio && userManuallyStopped) {
                setPlayingUI(false, "musicStopped");
            }
        });
    }

    function loadSpotifyFallbackIframe() {
        if (fallbackLoaded || !spotifyFrame) return;
        fallbackLoaded = true;

        const iframe = document.createElement("iframe");
        iframe.src = `https://open.spotify.com/embed/track/${TRACK_ID}?utm_source=generator&theme=0`;
        iframe.title = "Spotify — Cancer by My Chemical Romance";
        iframe.width = "100%";
        iframe.height = "152";
        iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
        iframe.loading = "eager";

        spotifyFrame.replaceChildren(iframe);
        if (!useLocalAudio) {
            setPlayingUI(false, "musicFallback");
        }
    }

    function attemptPlay() {
        if (userManuallyStopped) return;

        if (useLocalAudio && localAudio) {
            const playPromise = localAudio.play();
            if (playPromise && typeof playPromise.then === "function") {
                playPromise
                    .then(() => {
                        autoplayPendingUnlock = false;
                        setPlayingUI(true, "musicPlaying");
                    })
                    .catch(() => {
                        autoplayPendingUnlock = true;
                        setPlayingUI(false, "musicAutoWaiting");
                    });
            }
            return;
        }

        if (spotifyController) {
            try {
                spotifyController.play();
                autoplayPendingUnlock = false;
            } catch {
                autoplayPendingUnlock = true;
                setPlayingUI(false, "musicAutoWaiting");
            }
        }
    }

    function stopPlayback() {
        userManuallyStopped = true;
        autoplayPendingUnlock = false;

        if (useLocalAudio && localAudio) {
            localAudio.pause();
            localAudio.currentTime = 0;
        }

        if (spotifyController) {
            try {
                spotifyController.pause();
                spotifyController.seek(0);
            } catch {
                // Ignore if embed controller restricts seek while paused
            }
        }

        setProgressRatio(0);
        setPlayingUI(false, "musicStopped");
    }

    function togglePlayStop() {
        if (isCurrentlyPlaying) {
            stopPlayback();
        } else {
            userManuallyStopped = false;
            if (useLocalAudio && localAudio) {
                localAudio.play().catch(() => setDrawerOpen(true));
            } else if (spotifyController) {
                try {
                    spotifyController.togglePlay();
                } catch {
                    setDrawerOpen(true);
                }
            } else {
                setDrawerOpen(true);
            }
        }
    }

    // Unlock autoplay smoothly on first user gesture if browser policy blocked initial sound
    function unlockOnFirstGesture(event) {
        if (!autoplayPendingUnlock || userManuallyStopped || isCurrentlyPlaying) {
            cleanupUnlockListeners();
            return;
        }
        // Do not double-trigger if user directly clicked the play/stop button
        if (playToggleBtn && playToggleBtn.contains(event.target)) {
            cleanupUnlockListeners();
            return;
        }
        attemptPlay();
        if (isCurrentlyPlaying) {
            cleanupUnlockListeners();
        }
    }

    function cleanupUnlockListeners() {
        window.removeEventListener("pointerdown", unlockOnFirstGesture);
        window.removeEventListener("keydown", unlockOnFirstGesture);
    }

    window.addEventListener("pointerdown", unlockOnFirstGesture, { passive: true });
    window.addEventListener("keydown", unlockOnFirstGesture, { passive: true });

    // Initialize Official Spotify IFrame API eagerly so Header Bar works immediately
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
        if (!spotifyFrame) return;

        const mount = document.createElement("div");
        spotifyFrame.replaceChildren(mount);

        const fallbackTimer = window.setTimeout(() => {
            if (!spotifyController) loadSpotifyFallbackIframe();
        }, 9000);

        try {
            IFrameAPI.createController(
                mount,
                {
                    uri: TRACK_URI,
                    width: "100%",
                    height: 152
                },
                (controller) => {
                    window.clearTimeout(fallbackTimer);
                    spotifyController = controller;

                    controller.addListener("ready", () => {
                        const iframe = spotifyFrame.querySelector("iframe");
                        if (iframe) {
                            iframe.title = "Spotify — Cancer by My Chemical Romance";
                            iframe.allow =
                                "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
                        }

                        if (!useLocalAudio) {
                            setPlayingUI(false, "musicReady");
                            if (!userManuallyStopped) {
                                attemptPlay();
                            }
                        }
                    });

                    controller.addListener("playback_update", (e) => {
                        if (useLocalAudio) return;

                        const data = (e && e.data) || {};
                        const duration = Number(data.duration) || 0;
                        const position = Number(data.position) || 0;

                        if (duration > 0) {
                            setProgressRatio(position / duration);
                        }

                        const playingNow = data.isPaused === false && data.isBuffering === false;

                        if (playingNow) {
                            autoplayPendingUnlock = false;
                            setPlayingUI(true, "musicPlaying");
                        } else if (userManuallyStopped) {
                            setPlayingUI(false, "musicStopped");
                        } else if (position > 0 && data.isPaused) {
                            setPlayingUI(false, "musicStopped");
                        }
                    });
                }
            );
        } catch {
            loadSpotifyFallbackIframe();
        }
    };

    (function loadSpotifyScript() {
        const script = document.createElement("script");
        script.src = "https://open.spotify.com/embed/iframe-api/v1";
        script.async = true;
        script.onerror = loadSpotifyFallbackIframe;
        document.head.appendChild(script);
    })();

    // UI Controls Wiring
    if (playToggleBtn) {
        playToggleBtn.addEventListener("click", togglePlayStop);
    }

    if (drawerMasterStopBtn) {
        drawerMasterStopBtn.addEventListener("click", togglePlayStop);
    }

    if (expandMetaBtn) {
        expandMetaBtn.addEventListener("click", () => setDrawerOpen(drawer.hidden));
    }

    if (drawerTriggerBtn) {
        drawerTriggerBtn.addEventListener("click", () => setDrawerOpen(drawer.hidden));
    }

    if (drawerCloseBtn) {
        drawerCloseBtn.addEventListener("click", () => setDrawerOpen(false));
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && drawer && !drawer.hidden) {
            setDrawerOpen(false);
        }
    });

    document.addEventListener("pointerdown", (e) => {
        if (drawer && !drawer.hidden && headerPlayer && !headerPlayer.contains(e.target)) {
            setDrawerOpen(false);
        }
    });
})();
