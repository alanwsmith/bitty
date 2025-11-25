window.BittyCodeExample1 = class {
  example(_, el) {
    // console.log(el.bittyParentId);
    // console.log(this.api.dataset.bittyid);
    el.innerHTML = "eeeeeeeeeeeeeeeeeee";
  }

  // async exampled(_, el) {
  //   console.log("asdf");
  //   const url =
  //     "/[@ json.version.version_dir @]/snippets/intro/combined-body.html";
  //   const response = await this.api.getTXT(url);
  //   if (response.value) {
  //     console.log("here2eeeeeeeeeeeeeeeeeeeeeeee");
  //     const payload = [];
  //     const lines = [null];
  //     response.value.split("\n").forEach((line) => {
  //       lines.push(line);
  //     });
  //     const script = el.getString("script").split("|").map((line) =>
  //       line.trim()
  //     ).filter((line) => {
  //       return line !== "";
  //     });
  //     console.log(script);
  //     script.forEach((item) => {
  //       const startDetails = item.split(":");
  //       const details = [
  //         startDetails[0].trim(),
  //         startDetails.slice(1).join(":").trim(),
  //       ];
  //       if (details[0] === "line") {
  //         payload.push(lines[parseInt(details[1])]);
  //       } else if (details[0] === "newline") {
  //         payload.push("");
  //       } else if (details[0] === "line-chars") {
  //         console.log("here1---------------------");
  //         const assembler = [];
  //         const params = details[1].split("~").map((x) => x.trim());
  //         const segments = params.slice(1);
  //         segments.forEach((seg) => {
  //           const chars = seg.split("-").map((x) => parseInt(x.trim()));
  //           console.log(chars);
  //         });
  //         // payload.push(lines[parseInt(params[0])]);
  //       }
  //     });
  //     el.innerHTML = payload.join("\n");
  //   }
  //  }
};
