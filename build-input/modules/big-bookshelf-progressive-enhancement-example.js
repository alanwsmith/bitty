// deno-fmt-ignore-file

const templates = {
    bookForShowBooks: `<div>
    <button data-id="" data-key="shortTitle" data-send="showBook"></button>
    by <span data-key="lastName"></span>
</div>`,

    showBook: `<div data-key="title"></div>
<div>by <span data-key="firstName"></span>
<span data-key="lastName"></span></div> 
<div><span data-key="pageCount"></span> pages</div>
<p class="notes"></p>
<div>
    <button data-send="showBooks">View All Books</button>
</div>
`,

    showBooks: `<div id="book-list"></div>`,
}

let books = null;

export default class {
    constructor() {
        this.templates = {};
        for (const templateId in templates) {
            const newTemplate = document.createElement("template");
            newTemplate.innerHTML = templates[templateId];
            this.templates[templateId] = newTemplate
        }
    }

    assemble(template, data) {
        // console.log(data);
        const content  = this.loadTemplate(template);
        const dataIdEl = content.querySelector(`[data-id]`);
        if (dataIdEl) {
            dataIdEl.dataset.id = data.id;
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
        if (books === null) {
            books = {};
            const rawBooks = el.querySelectorAll("li");
            [...rawBooks].forEach((rawBook) => {
                const book = {
                    id: rawBook.dataset.id
                };
                const fields = rawBook.querySelectorAll("[data-key]");
                [...fields].forEach((field) => {
                    const key = field.dataset.key;
                    const value = field.innerHTML;
                    book[key] = value;
                });
                books[rawBook.dataset.id] = book;
            });
            // books.sort(
            //     (a,b) => a.sortKey.localeCompare(b.sortKey)
            // );
        }
        console.log(books);
    }

    loadTemplate(templateId) {
        return this.templates[templateId].content.cloneNode(true);
    }

    showBook(el, event) {
        console.log(event.target.dataset.id);
        const book = books[event.target.dataset.id];
        console.log(book);
        const content = this.assemble("showBook", book);
        el.replaceChildren(content);

        // const wrapper = this.loadTemplate("showBook");
        // const book = this.#books[event.target.dataset.id];
        // for (const key of Object.keys(book)) {
        //     console.log(key);
        // }
        // // wrapper.querySelector(".book-title").innerHTML = book.title;
        // // wrapper.querySelector(".author-first-name").innerHTML = book.author[0];
        // // wrapper.querySelector(".author-last-name").innerHTML = book.author[1];
        // // wrapper.querySelector(".page-count").innerHTML = book.pages;
        // // wrapper.querySelector(".book-notes").innerHTML = book.notes;
        // el.replaceChildren(wrapper);
    }

    showBooks(el, _event) {
        this.loadBooks(el);
        const content = this.loadTemplate("showBooks");
        const list = content.querySelector("#book-list");

        for (const book of Object.entries(books).toSorted(
            (a,b) => a[1].sortKey.localeCompare(b[1].sortKey)
        )) {
            // console.log(book);
            list.appendChild(this.assemble("bookForShowBooks", book[1]));
        }

        // books.forEach((book) => {
        //     list.appendChild(
        //         this.assemble("bookForShowBooks", book)
        //     );
        // });

        el.replaceChildren(content);
    }
}

