var SITE = {
  name: 'Clip Saver',
  color: '#0f9b8e',
  unit: 'videos',
  scrolling: 'Scrolling the profile...',
  postTitle: 'Video by',
  wrongPage: 'Open a TikTok profile or a single video first, then click the Clip Saver icon again.',
  notFoundPost: "Couldn't read this video. Refresh the page and try again.",
  notFoundProfile: "No videos found. If the account is private, you need to follow it. Otherwise refresh the page and try again.",
  linkSelector: 'a[href*="/video/"], a[href*="/photo/"]',
  linkCode(href) {
    const m = href.match(/\/(?:video|photo)\/(\d{6,})/);
    return m ? m[1] : null;
  },
  postUrl(p) {
    const kind = p.media.every((m) => m.kind === 'image') ? 'photo' : 'video';
    return `https://www.tiktok.com/@${p.owner}/${kind}/${p.code}`;
  },
  page(loc) {
    const code = this.linkCode(loc.pathname);
    if (code) return { type: 'post', code };
    const m = loc.pathname.match(/^\/@([A-Za-z0-9._-]{1,40})\/?$/);
    return m ? { type: 'profile', user: m[1] } : null;
  }
};
