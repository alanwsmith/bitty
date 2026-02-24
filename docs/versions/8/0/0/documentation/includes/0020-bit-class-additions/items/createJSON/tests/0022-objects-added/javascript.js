#key = "json_signal_C2FB6";

signal_C2FB6(_, el) {
  // const jsObject = { "status": "ok" };
  // this.createJSON("el_C2FB6", jsObject);
  // el.innerHTML = this.json["el_C2FB6"].status;
}


bittyReady() {
  this.trigger("signal_C2FB6");
}
