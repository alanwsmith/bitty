#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.deleteJSON("el_$HASH");
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.createJSON("el_$HASH", `{}`);
  this.trigger("$SIGNAL_NAME");
}