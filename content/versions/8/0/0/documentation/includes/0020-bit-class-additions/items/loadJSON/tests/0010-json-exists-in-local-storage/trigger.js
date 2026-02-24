async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");



  this.qs("[data-send~=signal_C89F4]").click();
}



// async bittyReady() {

//   // Create a JSON and then remove it from the
//   // collection to simulate it not being 
//   // loaded on a page. 
//   this.sleep(100);
//   this.createJSON("data_C89F4", { status: "test passed" });
//   delete this.json["data_C89F4"];
//   this.qs("[data-send~=signal_C89F4]").click();
// }

