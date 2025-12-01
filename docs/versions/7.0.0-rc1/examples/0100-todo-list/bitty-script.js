const templates = {
  item: `
<div 
  data-itemid="ITEM_ID" 
  data-receive="updateTodoItem deleteItem" 
  data-status="not-done"
>
  <label data-send="updateTodoItem removeDelete">
    <input type="checkbox" />ITEM_TEXT
  </label>
</div>`,

  deleteButton: `
<button 
  data-send="deleteItem" 
  data-receive="removeDelete"
>delete</button>`,
};

export default class {
  addTodoItem(ev, el) {
    if (ev.type === "keyup" && ev.keyCode === 13) {
      const subs = [
        ["ITEM_ID", self.crypto.randomUUID()],
        ["ITEM_TEXT", el.targetVal],
      ];
      const newEl = this.api.makeHTML(templates.item, subs);
      el.appendChild(newEl);
      ev.target.value = "";
    }
  }

  deleteItem(ev, el) {
    if (el.matchTargetDs("itemid")) {
      el.remove();
    }
  }

  removeDelete(ev, el) {
    if (el && el.matchTargetDs("itemid")) {
      el.remove();
    }
  }

  updateTodoItem(ev, el) {
    if (ev.target.nodeName === "INPUT" && el.matchTargetDs("itemid")) {
      if (el.ds("status") === "not-done") {
        el.dataset.status = "done";
        const deleteButton = this.api.makeHTML(templates.deleteButton);
        el.appendChild(deleteButton);
      } else {
        el.dataset.status = "not-done";
      }
    }
  }
}
