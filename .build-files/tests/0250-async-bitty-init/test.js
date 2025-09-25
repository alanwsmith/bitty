function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class AsyncTest {
  async bittyInit() {
    await sleep(100);
    const el = this.api.querySelector("div");
    el.innerHTML = "PASSED";
  }
}

export class SyncTest {
  bittyInit() {
    const el = this.api.querySelector("div");
    el.innerHTML = "PASSED";
  }
}
