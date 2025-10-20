export default class {
  updateText(_event, element) {
    const ts = Date.now();
    element.innerHTML = `Clicked at:<br>${ts}`;
  }
}