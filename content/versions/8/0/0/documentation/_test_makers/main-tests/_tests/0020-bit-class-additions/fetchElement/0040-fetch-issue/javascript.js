window.$CLASS_NAME = class {
  async $SIGNAL_NAME(_, el) {
    const url = "/url-that-causes-a-404";
    const result = await this.fetchElement("data_$SIGNAL_NAME", url);
    if (result.level === "error" && result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};
