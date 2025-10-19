const template = `

  <div class="test">FAILED</div>`;

export default class {
  runTest0550(_event, el) {
    const newChild = this.api.useEl(
      template
    );
    newChild.innerHTML = "PASSED";
    el.replaceChildren(newChild);
  }
}

