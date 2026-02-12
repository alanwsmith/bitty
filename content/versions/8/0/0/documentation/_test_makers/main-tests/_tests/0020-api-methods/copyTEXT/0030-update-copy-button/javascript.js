window.$CLASS_NAME = class {
  #copyButtonTimeout;

  async $SIGNAL_NAME(ev, _) {
    await this.api.copyTEXT(".$STYLE_NAME");
    // TODO: Update with
    // `ev.replaceChildrenAfterDelay(content, ms)`
    // when it's ready
    ev.target.innerHTML = "Copied";
    if (this.#copyButtonTimeout !== null) {
      clearTimeout(this.#copyButtonTimeout);
    }
    this.#copyButtonTimeout = setTimeout(() => {
      ev.target.innerHTML = "Test Manually";
    }, 1500);
  }
};
