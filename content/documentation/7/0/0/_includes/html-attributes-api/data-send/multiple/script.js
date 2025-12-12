window.MultipleSends = class {  
  sendMultipleAlfa(_, el) {
    el.innerHTML = `Alfa ${Math.random()}`;
  }
  sendMultipleBravo(_, el) {
    el.innerHTML = `Bravo ${Math.random()}`;
  }
  sendMultipleCharlie(_, el) {
    el.innerHTML = `Charlie ${Math.random()}`;
  }
}