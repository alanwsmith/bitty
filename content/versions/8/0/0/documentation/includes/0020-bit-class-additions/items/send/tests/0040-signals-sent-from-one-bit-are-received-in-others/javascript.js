async bittyReady() {
  // delay to let other bit initialize
  await this.sleep(100);
  this.send({ status: "ok" }, "signal_F8EF8_2");
}



// TODO: Move this to it's own file so it can 
// work with the display system
// window.ClassF8EF8_2 = class {
// signal_F8EF8_2(payload, el) {
//   el.innerHTML = payload.status;
// }
