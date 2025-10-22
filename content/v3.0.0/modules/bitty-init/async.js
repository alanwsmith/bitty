export default class {
  #message = null;

  async bittyInit() {
    const url = "/v3.0.0/payloads/bitty-init/basic.txt";
    this.#message = await this.api.getTXT(url);
  }

  update(_event, el) {
    el.innerHTML = this.#message;
  }
}