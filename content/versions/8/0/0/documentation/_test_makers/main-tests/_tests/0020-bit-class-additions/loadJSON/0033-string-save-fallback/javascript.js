bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  const fallback = `{ "status": "ok" }`;
  const result = this.loadJSON("data_$SIGNAL_NAME", fallback);
  this.trigger("$SIGNAL_NAME");
}

$SIGNAL_NAME(_, el) {
  const storage = localStorage.getItem("data_$SIGNAL_NAME");
  el.innerHTML = JSON.parse(storage).data.status;
}