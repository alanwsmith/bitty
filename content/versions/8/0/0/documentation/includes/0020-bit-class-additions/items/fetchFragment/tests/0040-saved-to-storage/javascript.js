

signal_0CCFB(_, el) {
  this.loadFragment("el_0CCFB");
  el.innerHTML = this.renderFragment("el_0CCFB").children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_signal_0CCFB");
}

async given_signal_0CCFB(_, __) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  await this.fetchFragment("el_0CCFB", url);
  delete this._fragment["el_0CCFB"];
  this.trigger("signal_0CCFB");
}