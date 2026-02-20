const baseParams = {
  "border-radius": {
    classString: `.SIZE-KEY { KEY: var(--SIZE-KEY); }`,
    varString: `--SIZE-KEY: VALUE;`,
    values: [
      `0.1rem`,
      `0.2rem`,
      `0.3rem`,
      `0.4rem`,
      `0.5rem`,
      `0.6rem`,
      `0.7rem`,
      `0.8rem`,
      `0.9rem`,
    ],
  },
  "flow": {
    classString:
      `.SIZE-KEY > :where(:not(:first-child)) { margin-top: var(--flow-space, var(--SIZE-KEY)); }`,
    varString: `--SIZE-KEY: VALUE;`,
    values: [
      `0.2rem`,
      `0.3rem`,
      `0.5rem`,
      `0.7rem`,
      `1.0rem`,
      `1.2rem`,
      `1.2rem`,
      `1.4rem`,
      `1.6rem`,
    ],
  },
  "font-size": {
    classString: `.SIZE-KEY { KEY: var(--SIZE-KEY);}`,
    varString: `--SIZE-KEY: VALUE;`,
    values: [
      "clamp(0.58rem, calc(0.57rem + 0.03vw), 0.6rem)",
      "clamp(0.68rem, calc(0.67rem + 0.03vw), 0.7rem)",
      "clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem)",
      "clamp(0.94rem, calc(0.92rem + 0.11vw), 1rem)",
      "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)",
      "clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)",
      "clamp(1.32rem, calc(1.5rem + 0.58vw), 1.65rem)",
      "clamp(1.84rem, calc(1.77rem + 0.87vw), 2.14rem)",
      "clamp(2.8rem, calc(2rem + 1.25vw), 3.1rem)",
    ],
  },
  "font-weight": {
    classString: `.KEY-VALUE { KEY: var(--KEY-VALUE);}`,
    varString: `--KEY-VALUE: VALUE;`,
    values: [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
    ],
  },
  "gap": {
    classString: `.SIZE-KEY { KEY: var(--SIZE-KEY);}`,
    varString: `--SIZE-KEY: VALUE;`,
    values: [
      `0.1rem`,
      `0.2rem`,
      `0.4rem`,
      `0.6rem`,
      `0.8rem`,
      `1.0rem`,
      `1.4rem`,
      `1.9rem`,
      `2.2rem`,
    ],
  },
  "line-height": {
    classString: `.SIZE-KEY { KEY: var(--SIZE-KEY);}`,
    varString: `--SIZE-KEY: VALUE;`,
    values: [
      1.0,
      1.1,
      1.2,
      1.3,
      1.45,
      1.5,
      1.6,
      1.7,
      1.8,
    ],
  },
  "margin": {
    classString: `.SIZE-KEY { KEY: var(--SIZE-KEY);}`,
    varString: `--SIZE-KEY: VALUE;`,
    values: [
      `0.1rem`,
      `0.2rem`,
      `0.4rem`,
      `0.6rem`,
      `0.8rem`,
      `1.0rem`,
      `1.4rem`,
      `1.9rem`,
      `2.2rem`,
    ],
  },
  "padding": {
    classString: `.SIZE-KEY { KEY: var(--SIZE-KEY);}`,
    varString: `--SIZE-KEY: VALUE;`,
    values: [
      `0.1rem`,
      `0.2rem`,
      `0.4rem`,
      `0.6rem`,
      `0.8rem`,
      `1.0rem`,
      `1.3rem`,
      `1.9rem`,
      `2.5rem`,
    ],
  },
  "text-align": {
    classString: `.KEY-VALUE { KEY: VALUE; }`,
    varString: `--KEY-VALUE: VALUE;`,
    values: ["center", "end", "justify", "left", "right", "start"],
  },
  "width": {
    classString: `.SIZE-width { width: var(--SIZE-width); }
        .SIZE-min-width { min-width: var(--SIZE-width); }
        .SIZE-max-width { max-width: var(--SIZE-width); }
        .SIZE-wrapper { width: var(--SIZE-width); margin-inline: auto; }`,
    varString: `--SIZE-KEY: VALUE;`,
    values: [
      "min(100vw - 1.4rem, 3rem)",
      "min(100vw - 1.4rem, 7rem)",
      "min(100vw - 1.4rem, 16rem)",
      "min(100vw - 1.4rem, 33rem)",
      "min(100vw - 1.4rem, 48rem)",
      "min(100vw - 1.4rem, 50rem)",
      "min(100vw - 1.4rem, 54rem)",
      "min(100vw - 1.4rem, 58rem)",
      "min(100vw - 1.4rem, 64rem)",
    ],
  },
};
const borderRadii = [
  `bottom-left`,
  `bottom-right`,
  `end-end`,
  `end-start`,
  `start-end`,
  `start-start`,
  `top-left`,
  `top-right`,
];
const colors = [
  "background",
  "black",
  "white",
  "match",
  "reverse",
  "default",
  "heading",
  "link",
  "accent",
  "info",
];
const edges = [
  `block`,
  `block-end`,
  `block-start`,
  `bottom`,
  `inline`,
  `inline-end`,
  `inline-start`,
  `left`,
  `right`,
  `top`,
];
const prefixes = ["", "faded-"];
const sizes = [
  "xxxsmall",
  "xxsmall",
  "xsmall",
  "small",
  "default",
  "large",
  "xlarge",
  "xxlarge",
  "xxxlarge",
];
const fullWidth = "calc(100vw - 1.4rem)";
function cssVarsDev() {
  let lines = [];
  for (const [key, data] of Object.entries(baseParams)) {
    data.values.forEach((value, itemIndex) => {
      lines.push(
        data.varString
          .replaceAll(`KEY`, key)
          .replaceAll(`SIZE`, sizes[itemIndex])
          .replaceAll(`VALUE`, value),
      );
    });
  }
  for (const [key, data] of Object.entries(baseParams)) {
    data.values.forEach((value, itemIndex) => {
      lines.push(
        data
          .classString
          .replaceAll(`SIZE`, sizes[itemIndex])
          .replaceAll(`VALUE`, value)
          .replaceAll(
            `KEY`,
            key,
          ),
      );
    });
  }
  prefixes.forEach((prefix) => {
    colors.forEach((color) => {
      const key = `${prefix}${color}`;
      lines.push(
        `--${key}-border: 1px solid var(--${key}-color);
        .${key}-background-color { background-color: var(--${key}-color); }
        .${key}-color { color: var(--${key}-color); }
        .${key}-border { border: var(--${key}-border); }`,
      );
      edges.forEach((edge) => {
        lines.push(
          `.${key}-${edge}-border { border-${edge}: var(--${key}-border); }`,
        );
      });
    });
  });
  sizes.forEach((size) => {
    edges.forEach((edge) => {
      lines.push(
        `.${size}-${edge}-padding { padding-${edge}: var(--${size}-padding); }
        .${size}-${edge}-margin { margin-${edge}: var(--${size}-margin); }`,
      );
    });
    borderRadii.forEach((item, itemIndex) => {
      lines.push(
        `--${size}-${item}-border-radius: ${item};`,
      );
      lines.push(
        `.${size}-${item}-border-radius { border-${item}-radius: var(--${size}-border-radius);}`,
      );
    });
  });
  lines.push(
    `--full-width: ${fullWidth};
    .full-wrapper { width: var(--full-width); margin-inline: auto; }`,
  );
  return `:root { ${lines.join("\n")} }`;
}
function addSheet(content) {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(content);
  document.adoptedStyleSheets.push(sheet);
}

function switchColorStyles() {
  const contrast = localStorage.getItem("contrast")
    ? localStorage.getItem("contrast")
    : "";
  const theme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "";
  const styleKeys = colors.map((color) => `${color}-color`);
  styleKeys.forEach((styleKey) => {
    prefixes.forEach((prefix) => {
      const key = `--switch--${prefix}${styleKey}`;
      if (theme === "auto") {
        document.documentElement.style.removeProperty(key);
      } else {
        const value = `var(--${contrast}${theme}--${prefix}${styleKey})`;
        document.documentElement.style.setProperty(
          key,
          value,
        );
      }
    });
  });
}

addSheet(cssVarsDev());
switchColorStyles();
