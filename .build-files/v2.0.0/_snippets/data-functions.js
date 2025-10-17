window.bittyFunctions = {
  test0530: () => {
    return "PASSED";
  },

  setProp: (key, value) => {
    document.documentElement.style.setProperty(key, value);
  },

  url: () => {
    return new URL(window.location.href);
  },
};
