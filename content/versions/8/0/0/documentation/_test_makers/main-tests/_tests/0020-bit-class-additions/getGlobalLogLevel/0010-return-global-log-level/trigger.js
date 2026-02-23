async bittyReady() {
  console.log(`ASSDF $SIGNAL_NAME`);
  this.sleep(3000);
  console.log(`DF $SIGNAL_NAME`);
  this.qs("[data-send~=$SIGNAL_NAME]").click();
}


