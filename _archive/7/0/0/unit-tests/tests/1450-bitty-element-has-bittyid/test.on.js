const template = `<div class="test">FAILED</div>`;
export default class {
  bittyInit() {
    const div = this.api.makeElement(template);
    if (this.api.bittyId !== undefined) {
      div.innerHTML = "PASSED";
    }
    this.api.appendChild(div);
  }
}