function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export default class {
  prepTest0130(_event, _el) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = "XXXFAILED";
    newDiv.classList.add("test");
    newDiv.classList.add("test-element-wrapper");
    newDiv.dataset.receive = "runTest0130";
    this.api.appendChild(newDiv);
  }

   runTest0130(event, el) {
    if (el.dataset.bittyid !== undefined) {
      el.innerHTML = "PASSED";
    }
  }
}
