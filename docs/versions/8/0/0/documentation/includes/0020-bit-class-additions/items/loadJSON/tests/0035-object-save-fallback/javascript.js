bittyReady() {
  this.trigger("given_signal_A3FE1");
}

given_signal_A3FE1(_, __) {
  const fallback = JSON.parse(`{ "status": "ok" }`);
  const result = this.loadJSON("data_signal_A3FE1", fallback);
  this.trigger("test_signal_A3FE1");
}

test_signal_A3FE1(_, el) {
  const storage = localStorage.getItem("data_signal_A3FE1");
  el.innerHTML = JSON.parse(storage).data.status;
}