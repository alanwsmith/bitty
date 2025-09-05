export default class {
  constructor() {
    this.num = 0;
  }

  addOne() {
    this.num += 1;
  }

  showNum(el) {
    el.innerHTML = this.num;
  }
}
