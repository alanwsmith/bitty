export class Wrapper {
  #activeMode;

  _switch(target) {
    this.#activeMode = target.dataset.key;
  }

  $htmlMode() {
    return this.#activeMode;
  }

  $valueMode() {
    return this.#activeMode;
  }
}
