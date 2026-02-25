async bittyReady() {
  this.trigger(`signal_CBE64`);
  await this.sleep(50);
  this.trigger(`signal_CBE64_2`);
  await this.sleep(50);
  this.trigger(`signal_CBE64_3`);
}

