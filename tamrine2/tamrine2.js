class Media {
  constructor(name, country, author) {
    this.name = name;
    this.country = country;
    this.author = author;
  }
}

class Book extends Media {
  constructor(name, country, author, coverArtist) {
    super(name, country, author, coverArtist);
    this.coverArtist = coverArtist;
  }
}
const person1 = new Book(
  "HarryPater",
  "United Kingdom",
  "Joan Rowling",
  "Marry"
);
console.log(person1);

class Movie extends Media {
  constructor(name, country, author, director) {
    super(name, country, author);
    this.director = director;
  }
}
const person2 = new Movie("Friends", "United State", "David", "Ben");
console.log(person2);
