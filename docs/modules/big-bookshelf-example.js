// deno-fmt-ignore-file

const viewBookDisplayTemplate = document.createElement("template");
viewBookDisplayTemplate.innerHTML = `
<div class="book-title"></div>
<div>by 
<span class="author-first-name"></span>
<span class="author-last-name"></span>
</div> 
<div><span class="page-count"></span> pages</div>
`;

const viewBooksDisplayTemplate = document.createElement("template");
viewBooksDisplayTemplate.innerHTML = `
<div>Book List</div>
<div id="book-list"></div>
`;

const viewBooksControlsTemplate = document.createElement("template");
viewBooksControlsTemplate.innerHTML = `
<button class="add-book">Add Book</button>
`;

const viewBooksBookTemplate = document.createElement("template");
viewBooksBookTemplate.innerHTML = `
<div>
<span class="book-title"></span> - 
<button class="view-book" data-send="viewBook">view</button>
<button class="edit-book">edit</button>
<button class="delete-book">delete</button>
</div>
`;

export default class {

    #books = {
        "25d7c22f": { title: "On Writing", author: ["Stephen", "King"], pages: 288 },
        "4bcc8077": { title: "Neuromancer", author: ["William", "Gibson"], pages: 271 },
        "fe4ae65f": { title: "Dune", author: ["Frank", "Herbert"], pages: 412 },
    };

    makeBookEl(bookId, bookData) {
        const bookEl = viewBooksBookTemplate.content.cloneNode(true);
        bookEl.querySelector(".book-title").innerHTML = bookData.title;
        bookEl.querySelector(".view-book").dataset.id = bookId;
        return bookEl;
    }

    showViewBookControls(_el, _event) {
        
    }

    showViewBookDisplay(el, event) {
        const wrapper = viewBookDisplayTemplate.content.cloneNode(true);
        const bookId = event.target.dataset.id;
        wrapper.querySelector(".book-title").innerHTML = this.#books[bookId].title;
        wrapper.querySelector(".author-first-name").innerHTML = this.#books[bookId].author[0];
        wrapper.querySelector(".author-last-name").innerHTML = this.#books[bookId].author[1];
        wrapper.querySelector(".page-count").innerHTML = this.#books[bookId].pages;
        el.replaceChildren(wrapper);
    }

    showViewBooksControls(el) {
        const wrapper = viewBooksControlsTemplate.content.cloneNode(true);
        el.replaceChildren(wrapper);
    }

    showViewBooksDisplay(el) {
        const wrapper = viewBooksDisplayTemplate.content.cloneNode(true);
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

    viewBooks(el, _event) {
        if (el.dataset.name === "controls") {
            this.showViewBooksControls(el);
        }
        if (el.dataset.name === "display") {
            this.showViewBooksDisplay(el);
        }
    }
}
