async bittyReady() {
  // delay to let other bit initialize
  await this.sleep(100);
  this.trigger("$SIGNAL2_NAME");
}


// TODO: Move this to it's own file so
// it can work with the display system
// window.$CLASS2_NAME = class {
// $SIGNAL2_NAME(_, el) {
//   el.innerHTML = "ok";
// }
