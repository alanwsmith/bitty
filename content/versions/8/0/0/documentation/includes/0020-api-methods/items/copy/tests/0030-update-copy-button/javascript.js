window.Class5DFF2 = class {
  #copyButtonTimeout;

  async signal_5DFF2(ev, _) {
    await this.api.copy(".el-5DFF2");
    ev.target.innerHTML = "Copied";
    if (this.#copyButtonTimeout !== null) {
      clearTimeout(this.#copyButtonTimeout);
    }
    this.#copyButtonTimeout = setTimeout(() => {
      ev.target.innerHTML = "Test Manually";
    }, 1500);
  }
};
