export class Wrapper {
  #batches = {};

  constructor() {}

  get batches() {
    return this.#batches;
  }

  $htmlClick() {
    return "got a click.";
  }
}
