HOW TO ADD YOUR BACKGROUND PHOTOS
====================================

HERO BACKGROUND (main full-screen image):
  1. Drop your photo here as:  hero-bg.jpg
     (Recommended: 1920×1080 px minimum, landscape orientation)
  2. Open index.html in a text editor
  3. Find the comment block that says:
         "── TO USE YOUR OWN PHOTO — uncomment & edit the 4 lines below:"
     inside the  .hero { ... }  CSS rule
  4. Uncomment those 4 lines and save

DETAILS/RECEPTION SECTION BACKGROUND (optional):
  1. Drop your photo here as:  details-bg.jpg
  2. Find the same comment inside  .details-sec { ... }  and uncomment it

TIPS:
  - For best quality, use JPG at 85–90% quality (keeps file size low)
  - Portrait photos (tall) don't work well as backgrounds — use landscape
  - Dark or medium-toned photos look best with the blue overlay
  - Adjust the overlay darkness via  --hero-overlay  in the :root block
    (lower opacity number = more image visible)
