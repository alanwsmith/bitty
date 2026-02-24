bittyReady() {
  this.trigger("given_signal_E6EB8");
}

given_signal_E6EB8(_, __) {
  const fallback = `{ "status": "test passed" }`;
  const result = this.loadJSON("data_signal_E6EB8", fallback);
  this.trigger("signal_E6EB8");
}

signal_E6EB8(_, el) {
  const storage = localStorage.getItem("data_signal_E6EB8");
  el.innerHTML = JSON.parse(storage).data.status;
}