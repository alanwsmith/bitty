export default class {
  bittyInit() {
    const newTree = document.createElement("div");
    newTree.innerHTML = `<div>
    <div class="test" data-receive="runTest0300">FAILED</div>
    </div>`;
    this.api.appendChild(newTree);
    this.api.trigger("runTest0300");
  }

  runTest0300(_event, el) {
    el.innerHTML = "PASSED";
  }
}