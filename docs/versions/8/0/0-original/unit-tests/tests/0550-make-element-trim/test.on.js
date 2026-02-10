const template = `

  <div class="test">FAILED</div>

`;

export default class {
  bittyReady() {
    this.api.localTrigger("runTest0550");
  }

  runTest0550(_event, el) {
    const newChild = this.api.makeElement(
      template,
    );
    newChild.innerHTML = "PASSED";
    el.replaceChildren(newChild);
  }
}