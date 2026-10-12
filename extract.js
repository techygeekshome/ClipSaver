// Turns a TikTok item (video or photo post) into
// { id, code, owner, date, caption, media: [{ kind, urls, w, h, video }] }.
function extract(n) {
  if (!n || typeof n.id !== 'string' || !/^\d{6,}$/.test(n.id) || !n.author) return null;
  if (!n.video && !n.imagePost) return null;
  const owner = typeof n.author === 'string' ? n.author : n.author.uniqueId || '';
  const media = [];
  const images = n.imagePost && n.imagePost.images;
  if (images && images.length) {
    for (const img of images) {
      const urls = (img.imageURL && img.imageURL.urlList) || [];
      if (urls.length) media.push({ kind: 'image', urls: urls.slice(0, 4), w: img.imageWidth || 0, h: img.imageHeight || 0, video: [] });
    }
  } else if (n.video) {
    const v = n.video;
    // Best quality first: H.264 (plays everywhere) before H.265, then biggest picture, then highest bitrate.
    const isH264 = (b) => !/265|bytevc1|hevc/i.test(String(b.CodecType || ''));
    const gears = (v.bitrateInfo || []).filter((b) => b && b.PlayAddr && b.PlayAddr.UrlList);
    gears.sort((a, b) =>
      (isH264(b) - isH264(a)) ||
      ((b.PlayAddr.Width || 0) * (b.PlayAddr.Height || 0) - (a.PlayAddr.Width || 0) * (a.PlayAddr.Height || 0)) ||
      ((b.Bitrate || 0) - (a.Bitrate || 0))
    );
    const vids = [];
    for (const g of gears) for (const u of g.PlayAddr.UrlList) if (!/\/aweme\/v1\/play\//.test(u)) vids.push(u);
    if (v.playAddr) vids.push(v.playAddr);
    if (v.downloadAddr) vids.push(v.downloadAddr); // last resort: this copy carries the watermark
    const best = gears[0] && gears[0].PlayAddr;
    media.push({
      kind: 'video',
      urls: [v.originCover, v.cover, v.dynamicCover].filter((u) => typeof u === 'string' && u),
      w: (best && best.Width) || v.width || 0,
      h: (best && best.Height) || v.height || 0,
      video: [...new Set(vids.filter((u) => typeof u === 'string' && u))]
    });
  }
  if (!media.length) return null;
  return {
    id: n.id,
    code: n.id,
    owner,
    date: Number(n.createTime) || 0,
    caption: n.desc || '',
    media
  };
}
