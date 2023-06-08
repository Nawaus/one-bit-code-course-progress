const Product = require("./Product");

module.exports = class Book extends Product {
  constructor(
    title,
    synopsis,
    price,
    genre,
    page,
    author,
    description,
    inStock = 0
  ) {
    super(`Book: ${title}`, description, price, inStock);
    this.title = title;
    this.synopsis = synopsis;
    this.genre = genre;
    this.page = page;
    this.author = author;
  }
};
