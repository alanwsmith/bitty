const todoTemplates = {
  item: `
<div 
  data-itemid="ITEM_ID" 
  data-receive="updateTodoItem deleteItem" 
  data-status="not-done">
  <label data-send="updateTodoItem">
    <input type="checkbox" /> ITEM_TEXT
  </label>
</div>`,

  deleteButton: `
<button 
  data-send="deleteItem" 
  data-receive="removeDelete"
>delete</button>`,
};

window.ToDoList = class {
  addTodoItem(ev, el) {
    if (ev.type === "keyup" && ev.keyCode === 13) {
      const subs = [
        ["ITEM_ID", self.crypto.randomUUID()],
        ["ITEM_TEXT", ev.value],
      ];
      const newEl = this.api.makeHTML(todoTemplates.item, subs);
      el.appendChild(newEl);
      ev.target.value = "";
    }
  }

  deleteItem(ev, el) {
    if (el.propMatchesTarget("itemid")) {
      el.remove();
    }
  }

  removeDelete(ev, el) {
    if (el && el.propMatchesTarget("itemid")) {
      el.remove();
    }
  }

  updateTodoItem(ev, el) {
    if (ev.target.nodeName === "INPUT" && el.propMatchesTarget("itemid")) {
      if (el.prop("status") === "not-done") {
        el.dataset.status = "done";
        const deleteButton = this.api.makeElement(todoTemplates.deleteButton);
        el.appendChild(deleteButton);
      } else {
        el.dataset.status = "not-done";
        this.api.forward(ev, "removeDelete");
      }
    }
  }
};
