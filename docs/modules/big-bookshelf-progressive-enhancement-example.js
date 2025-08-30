// deno-fmt-ignore-file

const templates = {
    bookForShowBooks: `<div>
    <button data-key="shortTitle" data-send="showBook"></button>
    by <span data-key="lastName"></span>
</div>`,

    showBook: `<div data-key="title"></div>
<div>by <span data-key="firstName"></span>
<span data-key="lastName"></span></div> 
<div><span data-key="pageCount"></span> pages</div>
<p class="notes"></p>
<div>
    <button class="view-books" data-send="showBooks">View All Books</button>
</div>
`,

    showBooks: `<div id="book-list"></div>`,
}

export default class {
    constructor() {
        this.templates = {};
        for (const templateId in templates) {
            const newTemplate = document.createElement("template");
            newTemplate.innerHTML = templates[templateId];
            this.templates[templateId] = newTemplate
        }
    }

    #books = null;

    assemble(template, data) {
        const content  = this.loadTemplate(template);
        for (const key of Object.keys(data)) {
            const el = content.querySelector(`[data-key=${key}]`);
            if (el) {
                el.innerHTML = data[key];
            }
        }
        return content;
    }

    loadBooks(el) {
        if (this.#books === null) {
            const rawBooks = el.querySelectorAll("li");
            this.#books = [...rawBooks].map((rawBook) => {
                const book = {};
                const fields = rawBook.querySelectorAll("[data-key]");
                [...fields].forEach((field) => {
                    const key = field.dataset.key;
                    const value = field.innerHTML;
                    book[key] = value;
                });
                return book;
            });
            this.#books.sort(
                (a,b) => a.sortKey.localeCompare(b.sortKey)
            );
        }
    }

    loadTemplate(templateId) {
        return this.templates[templateId].content.cloneNode(true);
    }

    makeBookForBookList(book) {
        const content = this.loadTemplate("bookForShowBooks");
        // wrapper.querySelector(".book-title").innerHTML = book[1].shortTitle;
        // wrapper.querySelector(".book-title").dataset.id = book[0];
        return content;
    }

    showBook(el, event) {
        const wrapper = this.loadTemplate("showBook");
        const book = this.#books[event.target.dataset.id];
        for (const key of Object.keys(book)) {
            console.log(key);
        }
        // wrapper.querySelector(".book-title").innerHTML = book.title;
        // wrapper.querySelector(".author-first-name").innerHTML = book.author[0];
        // wrapper.querySelector(".author-last-name").innerHTML = book.author[1];
        // wrapper.querySelector(".page-count").innerHTML = book.pages;
        // wrapper.querySelector(".book-notes").innerHTML = book.notes;
        el.replaceChildren(wrapper);
    }

    showBooks(el, _event) {
        this.loadBooks(el);
        const content = this.loadTemplate("showBooks");
        const list = content.querySelector("#book-list");
        this.#books.forEach((book) => {
            list.appendChild(
                this.assemble("bookForShowBooks", book)
            );
        });
        el.replaceChildren(content);
    }
}

