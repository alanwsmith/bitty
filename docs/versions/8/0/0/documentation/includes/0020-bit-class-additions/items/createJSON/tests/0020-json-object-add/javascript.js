#key = "json_signal_6A436";

signal_6A436(_, el) {
  // const jsonObject = JSON.parse(`{ "status": "ok" }`);
  // this.createJSON("el_6A436", jsonObject);
  // el.innerHTML = this.json["el_6A436"].status;
}


bittyReady() {
  this.trigger("signal_6A436");
}
