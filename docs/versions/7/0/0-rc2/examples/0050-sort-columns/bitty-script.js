const sortColumnsTemplate = `
  <button 
    data-receive="selectButton"
    data-send="sortColumn selectButton" 
    data-index="INDEX">TEXT</button>
`;

const rowTemplate = `
  <tr><td>COL1</td><td>COL2</td><td>COL3</td></tr>
`;

window.SortColumns = class {
  makeButtons(_ev, el) {
    el.querySelectorAll("th").forEach((cell, cellIndex) => {
      const subs = [
        ["INDEX", cellIndex],
        ["TEXT", cell.innerHTML],
      ];
      const output = this.api.makeHTML(sortColumnsTemplate, subs);
      cell.replaceChildren(output);
    });
  }

  selectButton(_ev, el) {
    if (el.isTarget) {
      el.classList.add("active-button");
    } else {
      el.classList.remove("active-button");
    }
  }

  sortColumn(ev, el) {
    const rowToSortOn = ev.propToInt("index");
    let rows = [];
    el.querySelectorAll("tr").forEach((tr) => {
      const cells = [];
      tr.querySelectorAll("td").forEach((td) => {
        cells.push(td.innerHTML);
      });
      rows.push(cells);
    });

    rows.sort((a, b) => {
      const aCheck = a[rowToSortOn].toLowerCase();
      const bCheck = b[rowToSortOn].toLowerCase();
      if (aCheck < bCheck) {
        return -1;
      }
      if (aCheck > bCheck) {
        return 1;
      }
      return 0;
    });

    el.replaceChildren();
    rows.forEach((row) => {
      const subs = [
        ["COL1", row[0]],
        ["COL2", row[1]],
        ["COL3", row[2]],
      ];
      const updatedRow = this.api.makeHTML(rowTemplate, subs);
      el.appendChild(updatedRow);
    });
  }
};
