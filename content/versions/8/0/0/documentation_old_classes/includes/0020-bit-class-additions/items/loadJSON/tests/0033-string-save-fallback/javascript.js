signal_E6EB8(_, el) {
  const fallback = `{ "status": "test passed" }`;
  const result = this.loadJSON("data_signal_E6EB8", fallback);
  delete this.json.data_signal_E6EB8;
  const storage = localStorage.getItem("data_signal_E6EB8");
  el.innerHTML = JSON.parse(storage).data.status;
}