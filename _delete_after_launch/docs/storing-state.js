// deno-fmt-ignore-file

export default class {

  #counter = 0;

  _increment(_) {
    this.#counter += 1;
  }

  $displayCount(el, _) {
    el.innerHTML = this.#counter;
  }

}
