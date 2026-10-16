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
dependencies.

The arXiv and Hugging Face buttons link to the [paper PDF](https://arxiv.org/pdf/2610.19849) and its [Hugging Face paper page](https://huggingface.co/papers/2610.19849). The citation contains the full author list and arXiv identifier `2610.19849`. The GitHub and Application buttons link to DeltaStreamer and AI-Tongdan, respectively. The AI-Tongdan Video button opens the [application demonstration on Bilibili](https://www.bilibili.com/video/BV1GqJD6UE9e). The Bilibili and Xiaohongshu buttons link to the Chinese video and project introduction. OVO-Bench results reproduce all methods and group-level scores from the manuscript. Music credits and third-party media notes are in `assets/MEDIA.md`.
