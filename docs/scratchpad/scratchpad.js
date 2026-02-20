export default class {
  showTemplateSignal(_, __) {
    this.api.trigger("showTemplate");
  }

  showTemplate(_, el) {
    const subs = [
      ["Alfa", "PING"],
    ];
    el.replaceChildren(
      this.api.elementFromTemplate("scratchpadTemplate", subs),
    );
  }
}
