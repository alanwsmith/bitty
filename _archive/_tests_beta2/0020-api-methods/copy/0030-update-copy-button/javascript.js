window.$CLASS_NAME = class {
  #copyButtonTimeout;

  async $SIGNAL_NAME(ev, _) {
    await this.api.copy(".$STYLE_NAME");
    ev.target.innerHTML = "Copied";
    if (this.#copyButtonTimeout !== null) {
      clearTimeout(this.#copyButtonTimeout);
    }
    this.#copyButtonTimeout = setTimeout(() => {
      ev.target.innerHTML = "Test Manually";
    }, 1500);
  }
};
