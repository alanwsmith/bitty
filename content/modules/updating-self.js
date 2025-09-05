export default class {
  #counter = 0;

  update(el, _event) {
    this.#counter += 1;
    el.innerHTML = `--- ${this.#counter} ---`;
  }
}
