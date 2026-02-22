bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.trigger("test_$SIGNAL_NAME");
}

async test_$SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  const result = await this.fetchJSON("data_$SIGNAL_NAME", url);
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
}