const buttonTemplate = `
  <button 
    data-send="followButtonClick" 
    data-receive="followButtonClick" 
    data-row="ROW"
    data-col="COL"
  >-</button>
`;

export default class {
  loadButtons(_ev, el) {
    for (let row = 0; row < 5; row += 1) {
      for (let col = 0; col < 5; col += 1) {
        const subs = [
          ["ROW", row],
          ["COL", col],
        ];
        const button = this.api.makeHTML(
          buttonTemplate,
          subs,
        );
        el.appendChild(button);
      }
    }
  }

  followButtonClick(_ev, el) {
    if (el.isTarget) {
      el.innerHTML = "+";
      el.classList.add("active-button");
    } else {
      el.innerHTML = "-";
      el.classList.remove("active-button");
    }
  }
}
