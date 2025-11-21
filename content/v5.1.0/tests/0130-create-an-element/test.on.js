export default class {
  prepTest0130(_event, _el) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = "FAILED";
    newDiv.classList.add("test");
    newDiv.dataset.receive = "runTest0130";
    this.api.appendChild(newDiv);
    this.api.trigger("runTest0130");
  }

  runTest0130(event, el) {
    if (el.dataset.bittyid !== undefined) {
      el.innerHTML = "PASSED";
    }
  }
}
