export class Wrapper {
  #state = {
    "activeMode": "alfa",
    "values": {
      "alfa": 20,
      "bravo": 80,
    },
  };

  _switch(target) {
    this.#state.activeMode = target.dataset.key;
  }

  $valueMode() {
    const activeMode = this.#state.activeMode;
    return this.#state.values[activeMode];
  }
}
