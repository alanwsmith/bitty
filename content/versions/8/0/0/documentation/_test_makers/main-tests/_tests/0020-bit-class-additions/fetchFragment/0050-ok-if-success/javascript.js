

async $SIGNAL_NAME(url, el) {
  const result = await this.fetchFragment("el_$HASH", url);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  this.send(url, "$SIGNAL_NAME");
}