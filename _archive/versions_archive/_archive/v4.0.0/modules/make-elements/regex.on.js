export default class {
  makeElementsRegEx(_event, el) {
    const html = `<div>The 0000 KIND fox</div>`;
    const subs = [
      [/\d+/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const content = this.api.makeElements(
      html, subs
    );
    el.replaceChildren(content);
  }
}