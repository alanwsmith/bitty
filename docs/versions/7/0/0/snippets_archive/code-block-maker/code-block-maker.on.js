window.BittyCodeBlockMaker = class {
  async example(_, el) {
    const payload = [];
    const lines = [null];
    const script = el.getString("script").split("|").map((line) => line.trim())
      .filter((line) => {
        return line !== "";
      });
    let prepSpacer = script.map((line) => "\n");
    el.innerHTML = prepSpacer.join("");
    const url = "//snippets/intro/combined-body.html";
    const response = await this.api.getTXT(url);
    if (response.value) {
      response.value.split("\n").forEach((line) => {
        lines.push(line);
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
        } else if (details[0] === "line-chars") {
          // console.log(
          //   lines[parseInt(details[1])],
          // );
          const assembler = [];
          const params = details[1].split("~").map((x) => x.trim());
          const segments = params.slice(1);
          segments.forEach((seg) => {
            const chars = seg.split("-").map((x) => parseInt(x.trim()));
            assembler.push(
              lines[parseInt(details[1])].slice(chars[0] - 1, chars[1] - 1),
            );
          });
          const toAdd = assembler.join("");
          //console.log(toAdd);
          payload.push(assembler.join(""));
        }
      });
      el.innerHTML = payload.join("\n");
    } else {
      console.error(response.error);
    }
  }
};