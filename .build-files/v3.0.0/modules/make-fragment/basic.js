const template = `<div>The quick brown fox</div>`;

export default class {
  makeFragmentBasic(_event, el) {
    const content = this.api.makeFragment(template);
    el.replaceChildren(content);
  }
}