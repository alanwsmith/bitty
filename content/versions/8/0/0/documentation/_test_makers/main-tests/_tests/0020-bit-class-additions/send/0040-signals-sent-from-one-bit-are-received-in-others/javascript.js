async bittyReady() {
  // delay to let other bit initialize
  await this.sleep(100);
  this.send({ status: "ok" }, "$SIGNAL2_NAME");
}



// TODO: Move this to it's own file so it can 
// work with the display system
// window.$CLASS2_NAME = class {
// $SIGNAL2_NAME(payload, el) {
//   el.innerHTML = payload.status;
// }
