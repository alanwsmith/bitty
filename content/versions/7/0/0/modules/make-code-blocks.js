export default class {
  bittyReady() {
    this.api.querySelectorAll(".code-block").forEach((codeBlock) => {
      const signals = codeBlock.dataset.receive
        ? [codeBlock.dataset.receive]
        : [];
      signals.push("codeBlock");
      codeBlock.dataset.receive = signals.join(" ");
    });
    this.api.localTrigger("codeBlock");
  }

  codeBlock(_, el) {
    console.log(el);
  }
}
