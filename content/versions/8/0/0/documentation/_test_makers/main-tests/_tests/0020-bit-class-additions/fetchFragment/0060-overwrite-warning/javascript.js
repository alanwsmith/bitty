

async $SIGNAL_NAME(url, el) {
  const result = await this.fetchFragment("el_$HASH", url);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_$HASH", "<div></div>");
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  this.send(url, "$SIGNAL_NAME");
}