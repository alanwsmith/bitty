const params = ["red", "green", "blue"];

const sliderTemplate = `
<label>PARAM
<input 
  data-send="updateColor" 
  value="VALUE"
  data-param="PARAM"
  type="range" 
  min="0"
  max="255" />
</label>`;

window.ChangeColor = class {
  makeSliders(_, el) {
    params.forEach((param) => {
      const value = Math.floor(Math.random() * 250);
      this.api.setProp(`--${param}`, value);
      const subs = [
        ["PARAM", param],
        ["VALUE", value],
      ];
      const slider = this.api.makeHTML(
        sliderTemplate,
        subs,
      );
      el.appendChild(slider);
    });
  }

  updateColor(ev, _) {
    window.requestAnimationFrame(() => {
      this.api.setProp(
        `--${ev.prop("param")}`,
        ev.valueToFloat,
      );
    });
  }
};
