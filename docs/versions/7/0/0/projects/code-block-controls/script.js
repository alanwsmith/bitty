const t = {
  blockWrapper: `
<div data-index="INDEX" class="default-border-radius accent-border default-padding">
  <div data-receive="copyText">BLOCK</div>
  <div class="text-align-right small-top-padding">
    <button data-send="reduceCodeFont">Reduce Font</button>
    <button data-send="enlargeCodeFont">Enlarge Font</button>
    <button data-send="toggleWrap">ToggleWrap</button>
    <button data-send="copyText">Copy</button>
  </div>
</div>`,
};

export class CodeBlockControls {
  #timeouts = {};
  #fontSizes =
    `xxxsmall|xxsmall|xsmall|small|default|large|xlarge|xxlarge|xxxlarge`
      .split("|");

  bittyReady() {
    this.api.querySelectorAll(".code-block").forEach((codeBlock, index) => {
      codeBlock.dataset.receive = "toggleWrap reduceCodeFont enlargeCodeFont";
      codeBlock.dataset.fontsize = 3;
      const signals = codeBlock.dataset.receive
        ? [codeBlock.dataset.receive]
        : [];
      signals.push("codeBlock");
      codeBlock.dataset.receive = signals.join(" ");
      const subs = [
        ["INDEX", index],
        ["BLOCK", codeBlock],
      ];
      const newWrapper = this.api.makeElement(t.blockWrapper, subs);
      codeBlock.replaceWith(newWrapper);
    });
  }

  async copyText(ev, el) {
    if (el.propMatchesSender("index")) {
      try {
        await navigator.clipboard.writeText(el.innerText);
        ev.sender.innerHTML = "Copied";
        if (this.#timeouts[el.bittyId]) {
          clearTimeout(this.#timeouts[el.bittyId]);
        }
        this.#timeouts[el.bittyId] = setTimeout(() => {
          ev.sender.innerHTML = "Copy";
        }, 1400);
      } catch (err) {
        console.error("Could not copy to clipboard");
      }
    }
  }

  enlargeCodeFont(_, el) {
    if (el.propMatchesSender("index")) {
      const size = el.propToInt("fontsize");
      if (size < this.#fontSizes.length - 1) {
        el.dataset.fontsize = size + 1;
        el.style.fontSize = 
          `var(--${this.#fontSizes[size + 1]}-font-size)`;
      }
    }
  }

  reduceCodeFont(_, el) {
    if (el.propMatchesSender("index")) {
      const size = el.propToInt("fontsize");
      if (size > 0) {
        el.dataset.fontsize = size - 1;
        el.style.fontSize = 
          `var(--${this.#fontSizes[size - 1]}-font-size)`;
      }
    }
  }

  toggleWrap(_, el) {
    if (el.propMatchesSender("index")) {
      el.classList.toggle("nowrap");
    }
  }
}
