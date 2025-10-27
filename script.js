console.log('Sample site loaded');
const liveUrl = document.getElementById('live-url');
if (liveUrl) {
  liveUrl.href = liveUrl.href.replace('#', `https://${location.hostname}`);
  liveUrl.textContent = liveUrl.href;
}
