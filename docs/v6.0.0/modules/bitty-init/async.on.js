export default class {
  #message = null;

  async bittyInit() {
    const url = "/v6.0.0/payloads/bitty-init/basic.txt";
    const response = await this.api.getTXT(url);
    if (response.value) {
      this.#message = response.value;
    } else {
      this.#message = response.error;
    }
  }

  update(_event, el) {
    el.innerHTML = this.#message;
  }
}