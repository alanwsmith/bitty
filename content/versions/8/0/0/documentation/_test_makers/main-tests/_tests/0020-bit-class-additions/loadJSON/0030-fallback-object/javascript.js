bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  localStorage.removeItem("data_$SIGNAL_NAME");
  this.trigger("$SIGNAL_NAME");
}

$SIGNAL_NAME(_, el) {
  const fallback = JSON.parse(`{ "status": "ok" }`);
  const result = this.loadJSON("data_$SIGNAL_NAME", fallback);
  if (result.ok === true) {
    el.innerHTML = this.json["data_$SIGNAL_NAME"].status;
  }
}