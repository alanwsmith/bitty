class State {
  constructor() {
    this.loadCheck = null;
    this.ping = "this is from the state object";
  }

  async isReady() {
    if (!this.loadCheck) {
      // This is for the example to slow things down
      // so you can see the bitty elements wait on the state
      await new Promise((resolve) => setTimeout(resolve, 3000));
      this.loadCheck = new Promise((resolve) => {
        const dataString = localStorage.getItem(this.storageName);
        if (dataString !== null) {
          this.data = JSON.parse(dataString);
        }
        resolve();
      });
    }
    return this.loadCheck;
  }
}

const state = new State();
