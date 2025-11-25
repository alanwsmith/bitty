const template = `
  <div 
    class="test"
    data-receive="runTest0130">FAILED</div>
`;

export default class {
  prepTest0130(_event, el) {
    el.replaceChildren(
      this.api.makeElement(template),
    );
    this.api.trigger("runTest0130");
  }

  runTest0130(event, el) {
    if (el.dataset.bittyid !== undefined) {
      el.innerHTML = "PASSED";
    }
  }
}
