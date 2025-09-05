// TODO: Deprecate this

export default class {

  #number = 75;

  #batches = {
    "checkNumbers": [
      "check10",
      "check20",
      "check30",
      "check40",
      "check50",
      "check60",
      "check70",
      "check80",
      "check90",
    ],
  };

  get batches() {
    return this.#batches;
  }

  updateNumber(data) {
    this.#number = data.target.value;
  }

  check10(el, _event) {
    el.innerHTML = this.#number > 10;
  }

  check20(el, _event) {
    el.innerHTML = this.#number > 20;
  }

  check30(el, _event) {
    el.innerHTML = this.#number > 30;
  }

  check40(el, _event) {
    el.innerHTML = this.#number > 40;
  }

  check50(el, _event) {
    el.innerHTML = this.#number > 50;
  }

  check60(el, _event) {
    el.innerHTML = this.#number > 60;
  }

  check70(el, _event) {
    el.innerHTML = this.#number > 70;
  }

  check80(el, _event) {
    el.innerHTML = this.#number > 80;
  }

  check90(el, _event) {
    el.innerHTML = this.#number > 90;
  }

  setInitialValue(el, _event) {
    el.value = this.#number;
  }

}
