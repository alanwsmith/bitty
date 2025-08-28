// deno-fmt-ignore-file

export default class {

  constructor() {
    this.num = 0;
  }

  _addOne() {
    this.num += 1;
  }

  $showNum(el) {
    el.innerHTML = this.num;
  }

}

