export default class {
  updateText(_event, el) {
    const ts = Date.now();
    el.innerHTML = `Clicked at:<br>${ts}`;
  }
}
