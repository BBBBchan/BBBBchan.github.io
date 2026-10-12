"use strict";

const video = document.getElementById("demo-video");
const languageButtons = document.querySelectorAll("[data-language]");
const videoDownload = document.getElementById("video-download");
const videoStatus = document.getElementById("video-status");
let currentLanguage = "en";

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.language;
    if (language === currentLanguage) return;
    currentLanguage = language;
    video.pause();
    video.poster = `assets/demo-${language}.jpg`;
    video.querySelector("source").src = `assets/demo-${language}.mp4?v=ui-first-20261012`;
    const previousTrack = video.querySelector("track");
    if (previousTrack) previousTrack.remove();
    const track = document.createElement("track");
    track.kind = "captions";
    track.src = `assets/demo-${language}.vtt?v=ui-first-20261012`;
    track.srclang = language === "zh" ? "zh-CN" : "en";
    track.label = language === "zh" ? "中文" : "English";
    video.append(track);
    video.setAttribute("aria-label", `DeltaStreamer demonstration in ${language === "zh" ? "Chinese" : "English"}`);
    videoDownload.href = `assets/demo-${language}.mp4?v=ui-first-20261012`;
    languageButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    video.load();
    videoStatus.textContent = language === "zh" ? "Chinese video selected." : "English video selected.";
  });
});

const copyButton = document.getElementById("copy-citation");
const copyStatus = document.getElementById("copy-status");
let copyReset;
copyButton.addEventListener("click", async () => {
  const citation = document.getElementById("bibtex").textContent;
  try {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(citation);
    copyButton.textContent = "Copied!";
    copyStatus.textContent = "BibTeX copied to clipboard.";
  } catch (_) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById("bibtex"));
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = "Text selected";
    copyStatus.textContent = "Citation selected. Press Control+C or Command+C to copy.";
  }
  clearTimeout(copyReset);
  copyReset = setTimeout(() => { copyButton.textContent = "Copy BibTeX"; }, 2500);
});
