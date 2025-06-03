export class Wrapper {
  #counter = 0;

  _increment(_) {
    this.#counter += 1;
  }

  $htmlCount(_) {
    return this.#counter;
  }
}
