bittyReady() {
  this.trigger("given_signal_CEE9A");
}

given_signal_CEE9A(_, __) {
  localStorage.removeItem("data_signal_CEE9A");
  this.trigger("signal_CEE9A");
}

signal_CEE9A(_, el) {
  const result = this.loadJSON("data_signal_CEE9A", `{ "status": "test passed" }`);
  if (result.ok === true) {
    el.innerHTML = this.json["data_signal_CEE9A"].status;
  }
}