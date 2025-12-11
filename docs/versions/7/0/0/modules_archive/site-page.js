function randomFloat(min, max) {
  return (Math.random() * (max - min)) + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setProp(key, value) {
  document.documentElement.style.setProperty(key, value);
}

function setPx(key, value) {
  document.documentElement.style.setProperty(key, `${value}px`);
}

function shuffleArray(array) {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

function url() {
  return new URL(window.location.href);
}

export default class {
  bittyInit() {
    // note this style.display can be removed when
    // bitty-6.0.0-rc3 or later is out
    this.api.style.display = "";
    setProp("--load-hider", "1");
  }
}

export class ThemeSwitcher {
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
        ["LOCATION", el.getString("location")],
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
}
