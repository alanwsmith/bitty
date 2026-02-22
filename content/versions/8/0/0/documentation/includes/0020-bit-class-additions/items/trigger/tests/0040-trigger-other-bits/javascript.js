async bittyReady() {
  // delay to let other bit initialize
  await this.sleep(100);
  this.trigger("signal_B1130_2");
}


ndow.ClassB1130_2 = class {
signal_B1130_2(_, el) {
  el.innerHTML = "ok";
}