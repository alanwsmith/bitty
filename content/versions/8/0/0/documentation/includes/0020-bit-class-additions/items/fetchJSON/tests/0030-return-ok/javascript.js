bittyReady() {
  this.trigger("given_signal_F8955");
}

given_signal_F8955(_, __) {
  this.trigger("signal_F8955");
}

async signal_F8955(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  const result = await this.fetchJSON("data_signal_F8955", url);
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
}