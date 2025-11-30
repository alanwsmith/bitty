const params = ["red", "green", "blue"];

const sliderTemplate = `
<div><label>PARAM
<input 
  type="range" 
  data-param="PARAM"
  min="0"
  max="255"
  value="VALUE"
  data-send="updateColor" />
</label></div>`;

export default class {
  makeSliders(_, el) {
    params.forEach((param) => {
      const value = Math.floor(Math.random() * 250);
      this.api.setProp(`--${param}`, value);
      const subs = [
        ["PARAM", param],
        ["VALUE", value],
      ];
      const slider = this.api.makeHTML(sliderTemplate, subs);
      el.appendChild(slider);
    });
  }

  updateColor(ev, el) {
    window.requestAnimationFrame(() => {
      this.api.setProp(
        `--${ev.ds("param")}`,
        ev.valFloat,
      );
    });
  }
}
