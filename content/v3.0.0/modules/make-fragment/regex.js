const template = `<div>The 0000 KIND fox</div>`;

export default class {
  makeFragmentRegEx(_event, el) {
    const subs = [
      [/\d+/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const content = this.api.makeFragment(
      template, subs
    );
    el.replaceChildren(content);
  }
}