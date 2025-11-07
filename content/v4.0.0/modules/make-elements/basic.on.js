export default class {
  makeElementsBasic(_event, el) {
    const html = `<div>The quick brown fox</div>`;
    const content = this.api.makeElements(html);
    el.replaceChildren(content);
  }
}