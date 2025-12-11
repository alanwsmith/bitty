window.ThemeSwitcher = class {
  constructor() {
    this.vars = {
      themes: [
        ["auto", "Auto"],
        ["light", "Light"],
        ["hc-light", "HC Light"],
        ["dark", "Dark"],
        ["hc-dark", "HC Dark"],
      ],
      switcher: `<div class="theme-switcher"></div>`,
      item: `<div><label>
  <input type="radio" 
    name="mode-LOCATION" 
    value="KEY" 
    data-send="changeTheme" 
    data-receive="syncCheckedTheme" 
    CHECKED
/> NAME</label></div>`,
    };
  }

  changeTheme(event, _el) {
    if (event.type === "input") {
      updateStyles(event.target.value);
      this.api.trigger("syncCheckedTheme");
    }
  }

  getCurrentTheme() {
    let current = localStorage.getItem("theme");
    if (current) {
      return current;
    } else {
      return "auto";
    }
  }

  themeSwitcher(_event, el) {
    const switcher = this.api.makeElement(this.vars.switcher);
    for (let theme of this.vars.themes) {
      const checked = this.getCurrentTheme() === theme[0] ? "checked" : "";
      const subs = [
        ["KEY", theme[0]],
        ["NAME", theme[1]],
        ["CHECKED", checked],
      ];
      const option = this.api.makeElement(this.vars.item, subs);
      switcher.appendChild(option);
    }
    el.replaceChildren(switcher);
  }

  syncCheckedTheme(_event, el) {
    if (el.value === this.getCurrentTheme()) {
      el.checked = true;
    } else {
      el.checked = false;
    }
  }
};
