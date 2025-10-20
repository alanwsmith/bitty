export default class {
  #num = 0;

  count(_event, el) {
    this.#num += 1;
    el.innerHTML = `Count: ${this.#num}`; 
  }
}