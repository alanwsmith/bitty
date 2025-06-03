export class Wrapper {
  #number = 75;

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

  _updateNumber(event) {
    this.#number = parseInt(event.target.value, 10);
  }

  $htmlCheck10(_) {
    return this.#number > 10;
  }

  $htmlCheck20(_) {
    return this.#number > 20;
  }

  $htmlCheck30(_) {
    return this.#number > 30;
  }

  $htmlCheck40(_) {
    return this.#number > 40;
  }

  $htmlCheck50(_) {
    return this.#number > 50;
  }

  $htmlCheck60(_) {
    return this.#number > 60;
  }

  $htmlCheck70(_) {
    return this.#number > 70;
  }

  $htmlCheck80(_) {
    return this.#number > 80;
  }

  $htmlCheck90(_) {
    return this.#number > 90;
  }

  $valueNumber(_) {
    return this.#number;
  }
}
