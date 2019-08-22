const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function seventees() {
  console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70");
  for(let index in entrepreneurs) {
    if(entrepreneurs[index].year >= 1975 && entrepreneurs[index].year < 1980) {
      console.log(`${entrepreneurs[index].first} ${entrepreneurs[index].last}`);
    }
  }
}
seventees();

function getName() {
  let array = []
  console.log("Sors une array qui contient le prénom et le nom des entrepreneurs:");
  for(let index in entrepreneurs) {
    let first = entrepreneurs[index].first
    let last = entrepreneurs[index].last
    array.push(`${first} ${last}`)
  }
  console.log(array);
}

getName();


function getAge() {
  current_year = 2019
  for(let index in entrepreneurs) {
    age = current_year - entrepreneurs[index].year
    console.log(`${entrepreneurs[index].first} ${entrepreneurs[index].last} a ${age} ans.`)
  }
}

getAge();


function orderName() {
  entrepreneurs.sort((a, b) => (a.last > b.last) ? 1 : -1)
  console.log(entrepreneurs)
}

orderName();
