export const MAILTO_EMAIL = "info@dstrix.com";
export const MAILTO_SUBJECT = "DSTRIX Access Request";

export const MAILTO_BODY = `
Artist/Label name:
Country:
Links (Spotify/YouTube/IG/TikTok):
Catalog size:
Monthly releases plan:
Why DSTRIX:
`;

export const getAccessLink = () => {
  const subject = encodeURIComponent(MAILTO_SUBJECT);
  // Ensure consistent line breaks for email clients
  const bodyContent = MAILTO_BODY.trim().replace(/\n/g, '\r\n');
  const body = encodeURIComponent(bodyContent);
  return `mailto:${MAILTO_EMAIL}?subject=${subject}&body=${body}`;
};

// Only export Section IDs, labels are handled in the component via translations
export const SECTIONS = [
  'philosophy',
  'services',
  'process',
  'faq'
];