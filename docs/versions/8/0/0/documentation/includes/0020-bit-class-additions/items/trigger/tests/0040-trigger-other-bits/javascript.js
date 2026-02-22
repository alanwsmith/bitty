async bittyReady() {
  // delay to let other bit initialize
  await this.sleep(100);
  this.trigger("signal_B1130_2");
}


// TODO: Move this to it's own file so
// it can work with the display system
// window.ClassB1130_2 = class {
// signal_B1130_2(_, el) {
//   el.innerHTML = "ok";
// }
