export default class {
  sendMultipleAlfa(_event, el) {
    el.innerHTML = `Alfa ${Math.random()}`;
  }
  sendMultipleBravo(_event, el) {
    el.innerHTML = `Bravo ${Math.random()}`;
  }
  sendMultipleCharlie(_event, el) {
    el.innerHTML = `Charlie ${Math.random()}`;
  }
}