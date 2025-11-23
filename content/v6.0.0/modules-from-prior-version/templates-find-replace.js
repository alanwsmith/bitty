export default class {
  renderTemplate(_event, el) {
    const template = `<div>Hello, NAME! How is your TIME?</div>`;
    const replacements = {
      "NAME": "World",
      "TIME": "Day",
    };
    el.replaceChildren(this.api.useTemplate(template, replacements));
  }
}
