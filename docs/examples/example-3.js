export class Wrapper {
  #counter = 0;

  _increment() {
    this.#counter += 1;
  }

  $htmlCount() {
    return this.#counter;
  }
}
