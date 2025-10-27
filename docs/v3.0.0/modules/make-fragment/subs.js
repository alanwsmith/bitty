export default class {
  makeFragmentSubs(_event, el) {
    const html = `<div>The SPEED KIND fox</div>`;
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const content = this.api.makeFragment(
      html, subs
    );
    el.replaceChildren(content);
  }
}