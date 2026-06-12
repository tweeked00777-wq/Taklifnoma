'use strict';

const WEDDING_DATE = new Date('2026-06-24T09:00:00+05:00');

const elDays  = document.getElementById('cd-days');
const elHours = document.getElementById('cd-hours');
const elMins  = document.getElementById('cd-mins');
const elSecs  = document.getElementById('cd-secs');
const elCd    = document.getElementById('countdown');

function pad(n) { return String(n).padStart(2, '0'); }

function tick() {
    const diff = WEDDING_DATE - Date.now();

    if (diff <= 0) {
        elCd.innerHTML =
            '<p style="font-family:var(--font-head);font-style:italic;' +
            'font-size:clamp(1.3rem,4vw,2.2rem);color:var(--gold-light);' +
            'letter-spacing:0.04em;">Muborak bo\'lsin! 🎊</p>';
        return;
    }

    const totalSecs = Math.floor(diff / 1000);
    const days      = Math.floor(totalSecs / 86400);
    const hours     = Math.floor((totalSecs % 86400) / 3600);
    const mins      = Math.floor((totalSecs % 3600)  / 60);
    const secs      = totalSecs % 60;

    elDays.textContent  = pad(days);
    elHours.textContent = pad(hours);
    elMins.textContent  = pad(mins);
    elSecs.textContent  = pad(secs);

    setTimeout(tick, 1000);
}

tick();

const audioEl   = document.getElementById('weddingAudio');
const playerEl  = document.getElementById('audioPlayer');
const toggleBtn = document.getElementById('apToggle');
const play      = document.getElementById('iconPlay');
const pause     = document.getElementById('iconPause');
const status    = document.getElementById('apStatus');

audioEl.volume = 0.60;

function setPlaying(isPlaying) {
    play.style.display  = isPlaying ? 'none'  : 'block';
    pause.style.display = isPlaying ? 'block' : 'none';
    playerEl.classList.toggle('playing', isPlaying);
    toggleBtn.setAttribute('aria-label', isPlaying ? 'Pause music' : 'Play music');
    status.textContent  = isPlaying ? 'Ijro etilmoqda…' : 'Bosish uchun ► bosing';
}

toggleBtn.addEventListener('click', () => {
    if (audioEl.paused) {
        audioEl.play()
            .then(() => setPlaying(true))
            .catch(err => console.warn('Audio blocked by browser policy:', err));
    } else {
        audioEl.pause();
        setPlaying(false);
    }
});

audioEl.addEventListener('ended', () => setPlaying(false));

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
