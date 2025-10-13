const templates = {
    bookForShowBooks: `<div>
    <button class="book-title" data-send="showBook"></button>
</div>`,

    showBook: `<div class="book-title"></div>
<div>by <span class="author-first-name"></span>
<span class="author-last-name"></span></div> 
<div><span class="page-count"></span> pages</div>
<p class="book-notes"></p>
<div>
    <button class="view-books" data-send="showBooks">View All Books</button>
</div>
`,

    showBooks: `<div>Book List</div><div id="book-list"></div>`,
}


export default class {

    #books = {
        "1bcc8077": { 
            title: "Neuromancer", 
            shortTitle: "Neuromancer",
            sortKey: "Neuromancer", 
            author: ["William", "Gibson"], 
            pages: 271,
            notes: "My discovery of cyberpunk and how much I'm into it.",
        },

        "75d7c22f": { 
            title: "On Writing: A Memoir of the Craft", 
            shortTitle: "On Writing",
            sortKey: "On Writing", 
            author: ["Stephen", "King"], 
            pages: 288,
            notes: "Required reading for anyone who writes.",
        },

        "ab9d8b45": { 
            title: "The Diamond Age: Or, A Young Lady's Illustrated Primer", 
            shortTitle: "The Diamond Age",
            sortKey: "Diamond Age, The", 
            author: ["Neal", "Stephenson"], 
            pages: 455,
            notes: "The Primer is pretty much my vision for my grimoire.",
        },

        "de4ae65f": { 
            title: "Dune", 
            shortTitle: "Dune",
            sortKey: "Dune", 
            author: ["Frank", "Herbert"], 
            pages: 412,
            notes: "One of the few books I've read multiple times. And the best movie adaptation I've ever seen.",
        },

    };

    constructor() {
        this.templates = {};
        for (const templateId in templates) {
            const newTemplate = document.createElement("template");
            newTemplate.innerHTML = templates[templateId];
            this.templates[templateId] = newTemplate
        }
    }

    loadTemplate(templateId) {
        return this.templates[templateId].content.cloneNode(true);
    }

    makeBookForBookList(book) {
        const wrapper = this.loadTemplate("bookForShowBooks");
        wrapper.querySelector(".book-title").innerHTML = book[1].shortTitle;
        wrapper.querySelector(".book-title").dataset.id = book[0];
        return wrapper;
    }

    showBook(event, element) {
        const wrapper = this.loadTemplate("showBook");
        const book = this.#books[event.target.dataset.id];
        wrapper.querySelector(".book-title").innerHTML = book.title;
        wrapper.querySelector(".author-first-name").innerHTML = book.author[0];
        wrapper.querySelector(".author-last-name").innerHTML = book.author[1];
        wrapper.querySelector(".page-count").innerHTML = book.pages;
        wrapper.querySelector(".book-notes").innerHTML = book.notes;
        el.replaceChildren(wrapper);
    }

    showBooks(_event, element) {
        const wrapper = this.loadTemplate("showBooks");
        const list = wrapper.querySelector("#book-list");
        for (const book of Object.entries(this.#books).toSorted(
            (a,b) => a[1].sortKey.localeCompare(b[1].sortKey)
        )) {
            list.appendChild(this.makeBookForBookList(book));
        }
        el.replaceChildren(wrapper);
    }
}