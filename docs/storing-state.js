// deno-fmt-ignore-file

export class Widget {

  #counter = 0;

  _increment(_) {
    this.#counter += 1;
  }

  $displayCount(el, _) {
    el.innerHTML = this.#counter;
  }

}
