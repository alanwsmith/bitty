$SIGNAL_NAME(_, el) {
  const fallback = `{ "status": "test passed" }`;
  const result = this.loadJSON("data_$SIGNAL_NAME", fallback);
  delete this.json.data_$SIGNAL_NAME;
  const storage = localStorage.getItem("data_$SIGNAL_NAME");
  el.innerHTML = JSON.parse(storage).data.status;
}