function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(100);
    const newTree = document.createElement("div");
    newTree.innerHTML = `<div>
    <div class="test" data-receive="runTest0300">FAILED</div>
    </div>`;
    this.api.appendChild(newTree);
    await sleep(100);
    this.api.forward(null, "runTest0300");
  }

  runTest0300(_event, el) {
    el.innerHTML = "PASSED";
  }
}