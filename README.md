# Clip Saver for TikTok

Save TikTok videos and photo posts from a whole profile or a single video, in the best quality TikTok offers. Everything comes down in a single ZIP file.

**Download and full guide:** https://techygeekshome.info/browser-extensions/clip-saver/

## What it does

- **Whole profiles or single videos.** Open a profile and Clip Saver scrolls through it for you, or open one video to save just that.
- **Best quality**: the highest-resolution copy TikTok has, in H.264 so it plays on any device.
- **Photo posts too.** Every picture in a photo carousel comes down at full size.
- **You choose what goes in**: a preview grid with tick boxes and a minimum size filter.
- **One ZIP download**, with the account name and date in every file name, plus an optional CSV of captions and links.

## Install

**Microsoft Edge:** install Clip Saver from the [Edge Add-ons store](https://microsoftedge.microsoft.com/addons/detail/clip-saver-for-tiktok/nelfacpkaicjmbidfjlambopfgobomgd). It updates itself.

For other browsers, pick the download from the [latest release](https://github.com/techygeekshome/ClipSaver/releases/latest).

| Browser | Download |
|---|---|
| Chrome, Brave, Opera, Vivaldi | `ClipSaver-chrome.zip` |
| Microsoft Edge | [Edge Add-ons store](https://microsoftedge.microsoft.com/addons/detail/clip-saver-for-tiktok/nelfacpkaicjmbidfjlambopfgobomgd), or `ClipSaver-edge.zip` |
| Firefox (142 or newer) | `ClipSaver-firefox.zip` |

`ClipSaver.zip` is the same package as the Chrome and Edge downloads.

### Chrome, Edge, Brave, Opera and Vivaldi

1. Unzip the download somewhere you'll keep it.
2. Open `chrome://extensions` (or `edge://extensions`).
3. Turn on **Developer mode**.
4. Click **Load unpacked** and pick the `clip-saver` folder.

### Firefox

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on** and pick `ClipSaver-firefox.zip`.

Firefox removes temporary add-ons when it closes.

### Build it yourself

The code in this repo is the Chromium version. `manifest.firefox.json` is the Firefox manifest. Run `./build.sh` to make every package in `dist/`.

## Use

1. Open a TikTok profile or a video.
2. Click the Clip Saver icon. On a profile it scrolls down and counts the videos as it finds them.
3. A results tab opens with everything it found.
4. Untick anything you don't want and click **Download ZIP**. Keep the TikTok tab open until the ZIP has downloaded, because the videos are fetched through it.

If you installed Clip Saver while the page was already open, refresh the page once before you click the icon.

## Privacy

Clip Saver only reads what TikTok already sends to your browser while you look at a page, and only downloads from TikTok's own servers. It has no account, no analytics and sends nothing anywhere else. The only thing it stores is your filter settings, on your own computer.

## Licence

GPL-3.0. Free for everyone, including commercial use.

Clip Saver is an independent tool made by [TechyGeeksHome](https://techygeekshome.info). It is not affiliated with, endorsed by or connected to TikTok or ByteDance. The photos and videos you save still belong to the people who made them. Only save what you have the right to keep.
