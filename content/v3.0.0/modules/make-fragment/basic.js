export default class {
  makeFragmentBasic(_event, el) {
    const html = `<div>The quick brown fox</div>`;
    const content = this.api.makeFragment(html);
    el.replaceChildren(content);
  }
}