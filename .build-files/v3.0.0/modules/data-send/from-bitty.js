export default class {
  sendFromBitty(event, el) {
    el.innerHTML = `Got: ${event.type}`;
  }
}