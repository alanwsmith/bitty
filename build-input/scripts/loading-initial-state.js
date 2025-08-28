// deno-fmt-ignore-file

export default class {
  #counter = 0;

  increment(_) {
    this.#counter += 1;
  }

  displayCount(el, _event) {
    el.innerHTML = this.#counter;
  }
}
