async bittyReady() {
  this.trigger(`$SIGNAL_NAME`);
  await this.sleep(50);
  this.trigger(`$SIGNAL2_NAME`);
  await this.sleep(50);
  this.trigger(`$SIGNAL3_NAME`);
}

