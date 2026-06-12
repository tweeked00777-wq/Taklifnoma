HOW TO ADD YOUR BACKGROUND MUSIC
====================================

QUICK START:
  1. Place your audio file here and name it:  traditional-track.mp3
  2. Open the site — the floating ► button will play it automatically.
     That's all! No code changes needed.

USING A DIFFERENT FILENAME:
  If your file has a different name (e.g., "layla.mp3"), open index.html,
  search for  music/traditional-track.mp3  and replace it with your filename.

SUPPORTED FORMATS:
  .mp3   → works in all major browsers (recommended)
  .ogg   → Firefox fallback (optional, add as second <source> tag)
  .m4a   → Safari / iOS fallback (optional)

  To add a fallback format, open index.html and find the <audio> tag.
  Uncomment the extra <source> lines already provided there.

AUTOPLAY:
  Browsers block audio from starting automatically before the user interacts.
  This is normal and correct. The player starts PAUSED — the guest must click ►.

VOLUME:
  Default is 60%. To change it, open index.html and find:
      audioEl.volume = 0.60;
  Change 0.60 to any value between 0.0 (silent) and 1.0 (full volume).

LOOP:
  Music loops by default (the <audio loop> attribute). To disable looping,
  remove the word  loop  from the <audio> tag in index.html.
