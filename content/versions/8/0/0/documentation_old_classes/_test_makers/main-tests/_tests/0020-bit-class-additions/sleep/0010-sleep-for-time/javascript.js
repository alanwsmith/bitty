async $SIGNAL_NAME(_, el) {
  this.t1 = performance.now();
  await this.sleep(100);
  this.t2 = performance.now();
  if (this.t2 - this.t1 > 90) {
    el.innerHTML = "test passed";
  }
}
