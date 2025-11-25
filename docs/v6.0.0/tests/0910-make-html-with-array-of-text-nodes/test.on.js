const template1 = `FA`;
const template2 = `IL`;
const template3 = `ED`;
const template4 = `<div class="test">STATUS</div>`;

export default class {
  runTest0910(_, el) {
    const subs = [
      ["STATUS", [
        this.api.makeHTML(template1, [["FA", "PA"]]),
        this.api.makeHTML(template2, [["IL", "SS"]]),
        this.api.makeHTML(template3),
      ]],
    ];
    const result = this.api.makeHTML(template4, subs);
    el.classList.remove("test");
    el.replaceChildren(result);
  }
}