async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  this.createFragment("el_F8382", `<div></div>`);
}
