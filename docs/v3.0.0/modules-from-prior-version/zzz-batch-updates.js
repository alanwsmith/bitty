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

  check10(_event, element) {
    element.innerHTML = this.#number > 10;
  }

  check20(_event, element) {
    element.innerHTML = this.#number > 20;
  }

  check30(_event, element) {
    element.innerHTML = this.#number > 30;
  }

  check40(_event, element) {
    element.innerHTML = this.#number > 40;
  }

  check50(_event, element) {
    element.innerHTML = this.#number > 50;
  }

  check60(_event, element) {
    element.innerHTML = this.#number > 60;
  }

  check70(_event, element) {
    element.innerHTML = this.#number > 70;
  }

  check80(_event, element) {
    element.innerHTML = this.#number > 80;
  }

  check90(_event, element) {
    element.innerHTML = this.#number > 90;
  }

  setInitialValue(_event, element) {
    el.value = this.#number;
  }

}