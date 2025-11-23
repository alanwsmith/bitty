function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  bittyInit() {
    console.log("here6");
    const newEl = this.api.makeHTML(`<div>
    <div class="test" data-receive="runTest0300">FAILED</div>
    </div>`);
    this.api.appendChild(newEl);

    // const newTree = document.createElement("div");
    // newTree.innerHTML = `<div>
    // <div class="test" data-receive="runTest0300">FAILED</div>
    // </div>`;
    // // this.api.appendChild(newTree);

    this.api.trigger("runTest0300");
  }

  runTest0300(_event, el) {
    el.innerHTML = "PASSED";
  }
}