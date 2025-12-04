const words = ["football", "running", "quiet"];
export default class {
  #currentWord = 0;
  #guesses = [];

  bittyReady() {
    this.api.trigger("updateGallows hangmanDisplay");
  }

  updateGallows(_ev, el) {
    el.innerHTML = 0;
  }

  hangmanDisplay(_ev, el) {
    el.innerHTML = "_ _ _ _ _ _ _ _";
  }
}
