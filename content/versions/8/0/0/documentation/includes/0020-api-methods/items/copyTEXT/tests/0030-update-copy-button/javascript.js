window.Class1476A = class {
  #copyButtonTimeout;

  async signal_1476A(ev, _) {
    await this.api.copyTEXT(".el-1476A");
    ev.target.innerHTML = "Copied";
    if (this.#copyButtonTimeout !== null) {
      clearTimeout(this.#copyButtonTimeout);
    }
    this.#copyButtonTimeout = setTimeout(() => {
      ev.target.innerHTML = "Test Manually";
    }, 1500);
  }
};
