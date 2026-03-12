export default class {
  makeHTMLBasic(_event, el) {
    const html = `<div>The quick brown fox</div>`;
    const content = this.api.makeHTML(html);
    el.replaceChildren(content);
  }
}