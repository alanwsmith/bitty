// deno-fmt-ignore-file

export default class {

  #num = 0;

  _addOne(_) {
    this.#num += 1;
  }

  $showNum(el, _) {
    el.innerHTML = this.#num;
  }

}

