const templates = {
  bookForShowBooks: `<div>
    <button data-id="" data-key="shortTitle" data-send="showBook"></button>
    by <span data-key="lastName"></span></div>`,

  showBook: `<div data-key="title"></div>
<div>by <span data-key="firstName"></span>
<span data-key="lastName"></span></div> 
<p data-key="note"></p>
<div><span data-key="pageCount"></span> pages</div>
<div><button data-send="showBooks">View All Books</button></div>`,

  showBooks: `<div id="book-list"></div>`,
}

export default class {
  constructor() {
    this.books = null;
    this.templates = {};
    for (const templateId in templates) {
      const newTemplate = document.createElement("template");
      newTemplate.innerHTML = templates[templateId];
      this.templates[templateId] = newTemplate
    }
  }

  assemble(template, data = {}) {
    const content = this.templates[template].content.cloneNode(true);
    if (data.id) {
      const dataIdEl = content.querySelector(`[data-id]`);
      if (dataIdEl) {
        dataIdEl.dataset.id = data.id;
      }
    }
    for (const key of Object.keys(data)) {
      const el = content.querySelector(`[data-key=${key}]`);
      if (el) {
        el.innerHTML = data[key];
      }
    }
    return content;
  }

  loadBooks(el) {
    if (this.books === null) {
      this.books = {};
      const rawBooks = el.querySelectorAll("li");
      [...rawBooks].forEach((rawBook) => {
        const book = { id: rawBook.dataset.id };
        const fields = rawBook.querySelectorAll("[data-key]");
        [...fields].forEach((field) => {
          const key = field.dataset.key;
          const value = field.innerHTML;
          book[key] = value;
        });
        this.books[rawBook.dataset.id] = book;
      });
    }
  }

  showBook(el, event) {
    const book = this.books[event.target.dataset.id];
    const content = this.assemble("showBook", book);
    el.replaceChildren(content);
  }

  showBooks(el, _event) {
    this.loadBooks(el);
    const content = this.assemble("showBooks");
    const list = content.querySelector("#book-list");
    for (const book of Object.entries(this.books).toSorted(
      (a, b) => a[1].sortKey.localeCompare(b[1].sortKey)
    )) {
      list.appendChild(this.assemble("bookForShowBooks", book[1]));
    }
    el.replaceChildren(content);
  }
}

