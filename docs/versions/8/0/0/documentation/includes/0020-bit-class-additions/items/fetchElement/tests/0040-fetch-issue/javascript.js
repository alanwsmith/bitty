window.ClassEFEFA = class {
  async signal_EFEFA(_, el) {
    const url = "/url-that-causes-a-404";
    const result = await this.fetchElement("data_signal_EFEFA", url);
    if (result.level === "error" && result.ok === false) {
      //el.innerHTML = "ok";
    }
  }
};
