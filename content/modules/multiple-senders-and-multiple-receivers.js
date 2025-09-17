export default class {
  #books = {
    fiction: {
      title: "Neuromancer",
      author: "William Gibson",
      pages: 271,
    },
    nonFiction: {
      title: "On Writing",
      author: "Stephen King",
      pages: 288,
    },
  };
  #bookType = null;

  author(_event, el) {
    el.innerHTML = `Author: ${this.#books[this.#bookType].author}`;
  }

  pages(_event, el) {
    el.innerHTML = `Pages: ${this.#books[this.#bookType].pages}`;
  }

  setType(event, _el) {
    this.#bookType = event.target.dataset.type;
  }

  title(_event, el) {
    el.innerHTML = `Title: ${this.#books[this.#bookType].title}`;
  }
}
