export default class {
  #message = null;

  async bittyInit() {
    const url = "/v5.0.0/payloads/bitty-init/basic.txt";
    const response = await this.api.getTXT(url);
    if (response.ok) {
      this.#message = response.ok;
    } else {
      this.#message = response.error;
    }
  }

  update(_event, el) {
    el.innerHTML = this.#message;
  }
}