const template = `<label>CONTENT</label>`;
const checkbox = `<input type="checkbox" />`;

export default class {
  makeList(_, el) {
    el.querySelectorAll("li").forEach((item) => {
      const subs = [
        ["CONTENT", item.innerHTML],
      ];
      const textStuff = this.api.makeHTML(template, subs);
      const firstGraph = textStuff.querySelector("p");
      firstGraph.prepend(this.api.makeHTML(checkbox));
      item.replaceChildren(textStuff);
    });
  }
}
