$SIGNAL_NAME(_, el) {
  const input = `
    <svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="green" />
      <text x="30" y="24" font-size="20" text-anchor="middle" fill="white">test passed</text>
    </svg>`;
  this.createSVG("el_$HASH", input);
  const svg = this.renderSVG("el_$HASH");
  el.innerHTML = svg.querySelector("text").innerHTML;
  this.trigger( "view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(_, el) {
  el.replaceWith(this.renderSVG("el_$HASH"));
}

