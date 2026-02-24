async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");



  this.qs("[data-send~=$SIGNAL_NAME]").click();
}



// async bittyReady() {

//   // Create a JSON and then remove it from the
//   // collection to simulate it not being 
//   // loaded on a page. 
//   this.sleep(100);
//   this.createJSON("data_$HASH", { status: "test passed" });
//   delete this.json["data_$HASH"];
//   this.qs("[data-send~=$SIGNAL_NAME]").click();
// }

