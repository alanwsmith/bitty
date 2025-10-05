export default class {
  #value = 0;

  updateIsolatedInstance(event, element) {
    // The same signal name is used in both
    // elements in this example. Separating
    // the data can be done by comparing
    // the bitty-1-1 component they are
    // connect to with the data from
    // the triggering event.

    // get the uuid of the parent bitty-1-1
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
