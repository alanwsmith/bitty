bittyReady() {
  this.sleep(100);
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="30" y="24" font-size="20" text-anchor="middle" fill="white">test passed</text>
</svg>`;
  this.setLocalLogLevel("none");
  this.createSVG("el_$HASH", input);
  this.qs("[data-send~=$SIGNAL_NAME]").click();
}
