// deno-fmt-ignore-file
export class Wires {

  constructor() {
    this.num = 0;
  }

  _addOne(_) {
    this.num += 1;
  }

  $showNumber(el, _) {
    el.innerHTML = this.num;
  }

}

