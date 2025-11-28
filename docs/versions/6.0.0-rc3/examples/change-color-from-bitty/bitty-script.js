const params = {
  "lightness": { min: 0, max: 1.0, step: 0.01, value: 0.7 },
  "chroma": { min: 0, max: 0.2, step: 0.001, value: 0.05 },
  "hue": { min: 0, max: 360, step: 1, value: 300 },
};

const sliderTemplate = `
<div><label>PARAM
<input 
  type="range" 
  data-param="PARAM"
  min="MIN"
  max="MAX"
  step="STEP"
  value="VALUE"
  data-send="updateColor" />
</label></div>`;

export default class {
  makeSliders(_, el) {
    Object.entries(params).forEach(([param, values]) => {
      this.api.setProp(`--${param}`, values.value);
      const subs = [
        ["PARAM", param],
        ["VALUE", values.value],
        ["MIN", values.min],
        ["MAX", values.max],
        ["STEP", values.step],
      ];
      const slider = this.api.makeHTML(sliderTemplate, subs);
      el.appendChild(slider);
    });
  }

  updateColor(ev, el) {
    window.requestAnimationFrame(() => {
      this.api.setProp(
        `--${ev.target.getString("param")}`,
        ev.target.floatValue,
      );
    });
  }
}
