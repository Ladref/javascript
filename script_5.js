console.log("This is script_5.js")

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


function rented() {
  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
  count = 0
  for(let index in books) {
    if(books[index].rented > 1) {
      count += 1
      console.log("Yes!");
    } else {
      count -= 1
      console.log("No!");
    }
  }
  if(count === books.length) {
    console.log("Yes, all books have been rented at least once")
  } else {
    console.log("No, some of them have not been rented yet.")
  }
}

rented();

function mostRented() {
  let max = 0;
  books.forEach(book => {
    if (book.rented > max) {
      max = book.rented;
    }
  })
let most_rented = books.find(book => book.rented === max)
console.log(`${most_rented.title} is the most rented one with ${most_rented.rented} rents.`)
}

mostRented();


function lessRented() {
  books.sort((a,b) => (a.rented > b.rented) ? 1 : -1)
  console.log(`${books[0].title} is the less rented books with ${books[0].rented} rents`);
}

lessRented();


function book873495() {
  let book_id = books.find(book => book.id === 873495)
  console.log(`${book_id.title} has the id ${book_id.id}`)
}

book873495();


function deletebook() {
  for(let index in books) {
    if(books[index].id == 133712) {
      console.log(`${books[index].title} has beed removed`)
      books.splice(index, 1);
    }
  }
return books;
}


deletebook();


function orderBook() {
  books.sort((a, b) => (a.title > b.title) ? 1 : -1)
  console.log(books)
}

orderBook(deletebook());
