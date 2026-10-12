# DeltaStreamer project page

Standalone static project page served at `/DeltaStreamer/`. It does not use the
parent site's Jekyll layout or modify the personal homepage.

The page uses local assets and fonts. `assets/fonts/Manrope-OFL.txt` retains the
font license. Framework and qualitative figures are copied from the project's
release assets.

Video delivery files:

- `assets/demo-en.mp4` and `assets/demo-zh.mp4`
- `assets/demo-en.vtt` and `assets/demo-zh.vtt`
- `assets/demo-en.jpg` and `assets/demo-zh.jpg`

Language buttons switch the video, poster, captions and download link together.
After the short opening, the videos show the three browser examples before the method animation. Video playback uses native controls and does not autoplay. Captions are selectable
through the player's caption controls.

To preview, serve the repository root with any static HTTP server and open
`/DeltaStreamer/`. This page has no build step and no external JavaScript or font
dependencies. Add the paper link and arXiv identifier when the paper is available.

The GitHub and Application buttons link to DeltaStreamer and AI-Tongdan, respectively. The arXiv and Hugging Face buttons remain placeholders until public links are supplied. OVO-Bench results reproduce all methods and group-level scores from the manuscript. Music credits and third-party media notes are in `assets/MEDIA.md`.
