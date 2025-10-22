export default class {
  async makeElFromGetTXT(_evnet, el) {
    const url = "/v3.0.0/payloads/use-html/from-get-txt/index.html";
    const template = await this.api.getTXT(url);
    const newEl = this.api.useHTML(template);
    newEl.classList.add("red");
    el.appendChild(newEl);
  }
}