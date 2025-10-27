export default class {
  makeFragmentRegEx(_event, el) {
    const html = `<div>The 0000 KIND fox</div>`;
    const subs = [
      [/\d+/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const content = this.api.makeFragment(
      html, subs
    );
    el.replaceChildren(content);
  }
}