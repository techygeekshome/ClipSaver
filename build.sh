#!/usr/bin/env bash
# Builds the release packages into dist/.
#   ClipSaver.zip          Chrome, Edge, Brave, Opera, Vivaldi (unzip, then Load unpacked)
#   ClipSaver-chrome.zip   same files, named for Chrome users
#   ClipSaver-edge.zip     same files, named for Edge users
#   ClipSaver-firefox.zip  Firefox package (Firefox manifest, files at the root)
set -euo pipefail
cd "$(dirname "$0")"
FILES="background.js bridge.js config.js extract.js hook.js results.css results.html results.js scan.js site.js zip.js icons"
OUT=dist; TMP=$(mktemp -d)
mkdir -p "$OUT"
rm -f "$OUT"/ClipSaver*.zip

mkdir "$TMP/clip-saver"
cp -r $FILES manifest.json "$TMP/clip-saver/"
(cd "$TMP" && zip -qr -X pkg.zip clip-saver)
for n in ClipSaver ClipSaver-chrome ClipSaver-edge; do cp "$TMP/pkg.zip" "$OUT/$n.zip"; done

mkdir "$TMP/ff"
cp -r $FILES "$TMP/ff/"
cp manifest.firefox.json "$TMP/ff/manifest.json"
(cd "$TMP/ff" && zip -qr -X ../ff.zip .)
cp "$TMP/ff.zip" "$OUT/ClipSaver-firefox.zip"

rm -r "$TMP"
ls -l "$OUT"
