const template = `<div>The SPEED KIND fox</div>`;

export default class {
  useSubsTemplate(_event, el) {
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const content = this.api.useTemplate(
      template, subs
    );
    el.appendChild(content);
  }
}