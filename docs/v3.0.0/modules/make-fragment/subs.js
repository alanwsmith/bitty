const template = `<div>The SPEED KIND fox</div>`;

export default class {
  makeFragmentSubs(_event, el) {
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const content = this.api.makeFragment(
      template, subs
    );
    el.replaceChildren(content);
  }
}