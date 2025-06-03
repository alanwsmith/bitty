export class Wires {
  $updateText(el, data) {
    el.innerHTML = `Button clicked at:<br>${Date.now()}`;
  }
}
