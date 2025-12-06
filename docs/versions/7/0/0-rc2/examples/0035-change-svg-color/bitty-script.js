/*
[!- set page_config = namespace() !]
[!- if file.folder_parts[1] !]
[!- set page_config.version = file.folder_parts[1] !]
[!- else !]
[!- set page_config.version = current_version !]
[!- endif !]

[!- if file.parent_folder !]
[!- set page_config.parent_folder = file.parent_folder !]
[!- else !]
[!- set page_config.parent_folder = folder.name !]
[!- endif !]
*/

const svgParams = ["svg-red", "svg-green", "svg-blue"];

const svgSliderTemplates = `
<label>PARAM
<input 
  data-send="updateSVGColor" 
  value="VALUE"
  data-param="PARAM"
  type="range" 
  min="0"
  max="255" />
</label>`;

window.ChangeSVGColor = class {
  async loadSVG(_, el) {
    const faceURL =
      `/versions/[@ major_dir @]/[@ minor_dir @]/[@ patch_dir @]/svgs/faces/9.svg`;
    const faceResponse = await this.api.getSVG(faceURL);
    if (faceResponse.value) {
      const faceSVG = faceResponse.value;
      faceSVG.classList.add("example-face");
      el.appendChild(faceSVG);
    }
  }

  makeSliders(_, el) {
    svgParams.forEach((param) => {
      const value = Math.floor(Math.random() * 250);
      this.api.setProp(`--${param}`, value);
      const subs = [
        ["PARAM", param],
        ["VALUE", value],
      ];
      const slider = this.api.makeHTML(svgSliderTemplates, subs);
      el.appendChild(slider);
    });
  }

  updateSVGColor(ev, el) {
    window.requestAnimationFrame(() => {
      this.api.setProp(
        `--${ev.prop("param")}`,
        ev.valueToFloat,
      );
    });
  }
};
