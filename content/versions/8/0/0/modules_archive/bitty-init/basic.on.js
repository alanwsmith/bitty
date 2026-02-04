export default class {
  #counter = 0;

  bittyInit() {
    this.#counter = 9000;
    this.api.localTrigger("update");
  }

  update(_event, el) {
    el.innerHTML = this.#counter;
  }
}

