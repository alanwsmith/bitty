#key = "key_$SIGNAL_NAME";

$SIGNAL_NAME(input, el) {
  const svg = this.renderSVG(this.#key);
  // el.innerHTML = svg.querySelector("text").innerHTML;
  // this.send(svg, "view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}
