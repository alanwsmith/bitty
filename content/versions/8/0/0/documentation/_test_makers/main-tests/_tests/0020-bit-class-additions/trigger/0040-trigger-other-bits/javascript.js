async bittyReady() {
  // delay to let other bit initialize
  await this.sleep(100);
  this.trigger("$SIGNAL2_NAME");
}


ndow.$CLASS2_NAME = class {
$SIGNAL2_NAME(_, el) {
  el.innerHTML = "ok";
}