// deno-fmt-ignore-file

const rawTemplates = {
    viewBookControls: `<button class="view-books" data-send="viewBooks">View All Books</button>`,

    viewBookDisplay: `<div class="book-title"></div>
<div>by <span class="author-first-name"></span>
<span class="author-last-name"></span></div> 
<div><span class="page-count"></span> pages</div>`,

    viewBooksBook: `<div><span class="book-title"></span> - 
<button class="view-book" data-send="viewBook">view</button>
<button class="edit-book">edit</button>
<button class="delete-book">delete</button></div>`,

    viewBooksControls: `<button class="add-book">Add Book</button>`,

    viewBooksDisplay: `<div>Book List</div>
<div id="book-list"></div>`
}


export default class {

    #books = {
        "25d7c22f": { title: "On Writing", author: ["Stephen", "King"], pages: 288 },
        "4bcc8077": { title: "Neuromancer", author: ["William", "Gibson"], pages: 271 },
        "fe4ae65f": { title: "Dune", author: ["Frank", "Herbert"], pages: 412 },
        "ab9d8b45": { title: "The Diamond Age", author: ["Neal", "Stephenson"], pages: 455 },
    };

    constructor() {
        this.templates = {};
        for (const templateId in rawTemplates) {
            const newTemplate = document.createElement("template");
            newTemplate.innerHTML = rawTemplates[templateId];
            this.templates[templateId] = newTemplate
        } 
        console.log(this.templates);
    }

    loadTemplate(templateId) {
        return this.templates[templateId].content.cloneNode(true);
    }

    makeBookEl(bookId, bookData) {
        const wrapper = this.loadTemplate("viewBooksBook");
        wrapper.querySelector(".book-title").innerHTML = bookData.title;
        wrapper.querySelector(".view-book").dataset.id = bookId;
        return wrapper;
    }

    showViewBookControls(el, _event) {
        const wrapper = this.loadTemplate("viewBookControls");
        el.replaceChildren(wrapper);
    }

    showViewBookDisplay(el, event) {
        const wrapper = this.loadTemplate("viewBookDisplay");
        const bookId = event.target.dataset.id;
        wrapper.querySelector(".book-title").innerHTML = this.#books[bookId].title;
        wrapper.querySelector(".author-first-name").innerHTML = this.#books[bookId].author[0];
        wrapper.querySelector(".author-last-name").innerHTML = this.#books[bookId].author[1];
        wrapper.querySelector(".page-count").innerHTML = this.#books[bookId].pages;
        el.replaceChildren(wrapper);
    }

    showViewBooksControls(el, _event) {
        const wrapper = this.loadTemplate("viewBooksControls");
        el.replaceChildren(wrapper);
    }

    showViewBooksDisplay(el, _event) {
        const wrapper = this.loadTemplate("viewBooksDisplay");
        const list = wrapper.querySelector("#book-list");
        for (const bookId in this.#books) {
            list.appendChild(this.makeBookEl(bookId, this.#books[bookId]));
        }
        el.replaceChildren(wrapper);
    }

    viewBook(el, event) {
        if (el.dataset.name === "controls") {
            this.showViewBookControls(el, event);
        }
        if (el.dataset.name === "display") {
            this.showViewBookDisplay(el, event);
        }
    }

    viewBooks(el, event) {
        if (el.dataset.name === "controls") {
            this.showViewBooksControls(el, event);
        }
        if (el.dataset.name === "display") {
            this.showViewBooksDisplay(el, event);
        }
    }
}
