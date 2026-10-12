var APP = {
  name: "Clip Saver",
  unit: "videos",
  defaultName: "tiktok",
  settingsKey: "cs_settings",
  csvName: "videos.csv",
  helpTitle: "Open a TikTok profile or video first",
  helpHtml: "Open any TikTok profile or video in this browser, let it load, then click the Clip Saver icon in the toolbar.",
  hosts: /(^|\.)(tiktok\.com|tiktokcdn\.com|tiktokcdn-us\.com|tiktokcdn-eu\.com|tiktokv\.com)$/,
  relay: true,
  relayFirst: true,
  videoCredentials: "include"
};
