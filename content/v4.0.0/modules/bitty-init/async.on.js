export default class {
  #message = null;

  async bittyInit() {
    const url = "/[@ json.version.version_dir @]/payloads/bitty-init/basic.txt";
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
