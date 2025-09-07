// deno-fmt-ignore-file

export default class {
    #books = {
        fiction: {
            title: "Neuromancer",
            author: "William Gibson",
            pages: 271
        },
        nonFiction: {
            title: "On Writing",
            author: "Stephen King",
            pages: 288
        }
    };

  update(el, event) {
    const bookType = event.target.dataset.type;

    if (el.dataset.name === "title") {
        el.innerHTML = 
            `Title: ${this.#books[bookType].title}`;
    }
    
    if (el.dataset.name === "author") {
        el.innerHTML = 
            `Author: ${this.#books[bookType].author}`;
    }

    if (el.dataset.name === "pages") {
        el.innerHTML = 
            `Pages: ${this.#books[bookType].pages}`;
    }
  }
}
