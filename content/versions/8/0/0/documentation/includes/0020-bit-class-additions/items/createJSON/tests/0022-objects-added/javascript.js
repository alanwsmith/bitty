signal_C2FB6(_, el) {
  const jsObject = { "status": "test passed" };
  this.createJSON("el_C2FB6", jsObject);
  el.innerHTML = this.json["el_C2FB6"].status;
}
