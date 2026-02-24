#key = "el_signal_0938C";

async signal_0938C(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-element.xml";
  const result = await this.fetchElement("el_0938C", url);
  if (result.ok === true) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("signal_0938C");
}