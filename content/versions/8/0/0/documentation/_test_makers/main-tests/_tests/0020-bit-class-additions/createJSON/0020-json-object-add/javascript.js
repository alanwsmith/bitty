#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  // const jsonObject = JSON.parse(`{ "status": "ok" }`);
  // this.createJSON("el_$HASH", jsonObject);
  // el.innerHTML = this.json["el_$HASH"].status;
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}
