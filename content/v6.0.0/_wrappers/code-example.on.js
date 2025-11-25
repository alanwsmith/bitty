window.BittyCodeExample1 = class {
  async example(_, el) {
    const url =
      "/[@ json.version.version_dir @]/snippets/intro/combined-body.html";
    const response = await this.api.getTXT(url);
    if (response.value) {
      const payload = [];
      const lines = [null];
      response.value.split("\n").forEach((line) => {
        lines.push(line);
      });
      const script = el.getString("script").split("\n").map((line) =>
        line.trim()
      ).filter((line) => {
        return line !== "";
      });
      script.forEach((item) => {
        const startDetails = item.split(":");
        const details = [
          startDetails[0].trim(),
          startDetails.slice(1).join(":").trim(),
        ];
        if (details[0] === "line") {
          payload.push(lines[parseInt(details[1])]);
        } else if (details[0] === "newline") {
          payload.push("");
        }
      });
      el.innerHTML = payload.join("\n");
    }
  }
};
