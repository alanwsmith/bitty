window.BittyCodeExample1 = class {
  async example(_, el) {
    const details = el.getString("script");

    // const start = el.getInt("start");
    // const end = el.getInt("end");
    // // this preloads the number of lines for the
    // // output to minimize jumping.
    // let prepLines = "";
    // for (let x = start; x <= end; x += 1) {
    //   prepLines += "\n";
    // }
    // el.innerHTML = prepLines;
    // const url =
    //   "/[@ json.version.version_dir @]/snippets/intro/combined-body.html";
    // const response = await this.api.getTXT(url);
    // if (response.value) {
    //   console.log(response.value);
    //   const lines = response.value.split("\n");
    //   const payload = [];
    //   lines.forEach((line, lineIndex) => {
    //     const lineNum = lineIndex + 1;
    //     if (lineNum >= start && lineNum <= end) {
    //       payload.push(line);
    //     }
    //   });
    //   el.innerHTML = payload.join("\n");
    // }
  }
};
