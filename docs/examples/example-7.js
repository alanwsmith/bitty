export class Wrapper {
  #number = 10;

  #batches = {
    "batchCheckNumber": [
      "$htmlCheck10",
      "$htmlCheck20",
      "$htmlCheck30",
      "$htmlCheck40",
      "$htmlCheck50",
      "$htmlCheck60",
      "$htmlCheck70",
      "$htmlCheck80",
      "$htmlCheck90",
    ],
  };

  get batches() {
    return this.#batches;
  }

  _updateNumber(target) {
    this.#number = parseInt(target.value, 10);
  }

  $htmlCheck10() {
    return this.#number > 10;
  }

  $htmlCheck20() {
    return this.#number > 20;
  }

  $htmlCheck30() {
    return this.#number > 30;
  }

  $htmlCheck40() {
    return this.#number > 40;
  }

  $htmlCheck50() {
    return this.#number > 50;
  }

  $htmlCheck60() {
    return this.#number > 60;
  }

  $htmlCheck70() {
    return this.#number > 70;
  }

  $htmlCheck80() {
    return this.#number > 80;
  }

  $htmlCheck90() {
    return this.#number > 90;
  }
}
