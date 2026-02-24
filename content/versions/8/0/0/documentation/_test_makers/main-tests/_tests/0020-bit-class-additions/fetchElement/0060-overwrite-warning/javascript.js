#key = "el_$SIGNAL_NAME";

async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-element.xml";
  const result = await this.fetchElement("el_$HASH", url);
  if (result.level === "warn" && result.ok === true) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_$HASH", `<div>first</div>`);
  this.trigger("$SIGNAL_NAME");
}