// deno-fmt-ignore-file

export default class {
  #counter = 0;

  displayCount(el, _) {
    this.#counter += 1;
    el.innerHTML = this.#counter;
  }
}
