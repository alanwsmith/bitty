export default class {
  #value = 0;

  updateIsolatedInstance(event, element) {
    // get the uuid of the parent bitty-js
    // component
    const bittyUUID = this.api.dataset.uuid;

    // get the uuid of the parent element from
    // the event target
    const checkUUID = event.target.parentNode.dataset.uuid;

    if (bittyUUID === checkUUID) {
      this.#value += 1;
      element.innerHTML = this.#value;
    }
  }
}
