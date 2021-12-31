var express = require('express');
var router = express.Router();

books=[{

  "id":0,
  "title": "Harry Potter : Philosopher's Stone",
  "aid":0,
  "author": "J.K. Rowling",
  "year": "1997",
  "genre":"Fantasy",
  "info":"Harry Potter: Philosopher'sStone is the first in the  series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
  "img":"https://images-na.ssl-images-amazon.com/images/I/515iJ1-+IvL.jpg",
  "edition": "Harcourt Brace",
  "price": 19.95
},
{
  "id":1,
  "title": "Lord of the Rings",
  "aid":9,
  "author": "J.R. Tolkien",
  "year": 1937,
  "edition": "Penguin",
  "genre":"Romance novel",
  "img":"https://i2.wp.com/www.casualoptimist.com/wp-content/uploads/2020/09/fellowship-of-the-ring-illustration-johan-egerkrans-1000x1500.jpg?resize=1000%2C1500",
  "info":"The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, intended to be Earth at some distant time in the past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work.",
  "price": 27.45
},
{
  "id":2,
  "title": "Hamlet, Prince of Denmark",
  "aid":1,
  "author": "William Shakespeare",
  "year": 1603,
  "edition": "Signet  Classics",
  "genre":"Romance novel",
  "img":"https://rukminim1.flixcart.com/image/416/416/kqidx8w0/book/w/v/a/hamlet-original-imag4hsjgnc5zpb3.jpeg?q=70",
  "info":"The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet, is a tragedy written by William Shakespeare sometime between 1599 and 1601. It is Shakespeare's longest play, with 29,551 words.",
  "price": 7.95
},

{
  "id":3,
  "title": "Northanger Abbey",
  "aid":4,
  "author": "Jane Austen",
  "year": 1814,
  "edition": "Penguin",
  "genre":"Romance novel",
  "img":"https://upload.wikimedia.org/wikipedia/en/c/c9/Northanger_Abbey.jpg",
  "info":"Northanger Abbey is a coming-of-age novel and a satire of Gothic novels written by Jane Austen. Austen was also influenced by Charlotte Lennox's The Female Quixote. Northanger Abbey was completed in 1803, the first of Austen's novels completed in full, but was published posthumously in 1817 with Persuasion.",
  "price": 18.2
},
{
  "id":4,
  "title": "War and Peace",
  "aid":6,
  "author": "Leo Tolstoy",
  "year": 1865,
  "edition": "Penguin",
  "genre":"Historical Fiction",
  "img":"https://cdn.shopify.com/s/files/1/0736/0537/products/Book0007_380d70e7-b425-4bff-8a71-e1ca3931f0e8.jpg?v=1425082006",
  "info":"War and Peace is a literary work mixed with chapters on history and philosophy by the Russian author Leo Tolstoy, first published serially, then published in its entirety in 1869. It is regarded as one of Tolstoy's finest literary achievements and remains an internationally praised classic of world literature.",
  "price": 12.7
},  {
  "id":5,
  "title": "Mrs. Dalloway",
  "aid":7,
  "author": "Virginia Woolf",
  "year": 1925,
  "edition": "Harcourt Brace",
  "genre":"Romance novel",
  "img":"https://images-na.ssl-images-amazon.com/images/I/91UUKTsfScL.jpg",
  "info":"Mrs Dalloway is a novel by Virginia Woolf that details a day in the life of Clarissa Dalloway, a fictional high-society woman in post–First World War England. It is one of Woolf's best-known novels. ",
  "price": 25
},
{
  "id":6,
  "title": "The Hours",
  "aid":5,
  "author": "Michael Cunnningham",
  "year": 1999,
  "edition": "Harcourt Brace",
  "genre":"Romance novel",
  "img":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1185858093l/1611704._SY475_.jpg",
  "info":"The Hours is a 1998 novel written by Michael Cunningham. It won the 1999 Pulitzer Prize for Fiction, the 1999 PEN/Faulkner Award for Fiction, and was later made into an Oscar-winning 2002 film of the same name.",
  "price": 12.35
}, {
  "id":7,
  "title": "Huckleberry Finn",
  "aid":2,
  "author": "Mark Twain",
  "year": 1865,
  "edition": "Penguin",
  "genre":"Romance novel",
  "img":"https://m.media-amazon.com/images/I/51l4CWBf1YL._SL500_.jpg",
  "info":"Adventures of Huckleberry Finn or as it is known in more recent editions, The Adventures of Huckleberry Finn, is a novel by American author Mark Twain, which was first published in the United Kingdom in December 1884 and in the United States in February 1885. ",
  "price": 5.76
},
{
  "id":8,
  "title": "Bleak House",
  "aid":3,
  "author": "Charles Dickens",
  "year": 1870,
  "edition": "Random House",
  "genre":"Romance novel",
  "img":"https://kbimages1-a.akamaihd.net/24caa3f3-2ce4-4bfe-8608-b0503b0ecc4d/1200/1200/False/bleak-house-193.jpg",
  "info":"Bleak House is a novel by Charles Dickens, first published as a 20-episode serial between March 1852 and September 1853. The novel has many characters and several sub-plots, and is told partly by the novel's heroine, Esther Summerson, and partly by an omniscient narrator. ",
  "price": 5.75
}, {
  "id":9,
  "title": "Anna Karenina",
  "aid":6,
  "author": "Leo Tolstoy",
  "year": 1875,
  "edition": "Penguin",
  "genre":"Romance novel",
  "img":"https://images-na.ssl-images-amazon.com/images/I/71dD4ALhDhL.jpg",
  "info":"Anna Karenina is a novel by the Russian author Leo Tolstoy, first published in book form in 1878. Many writers consider it to be one of the greatest works of literature ever written, and Tolstoy himself called it his first true novel.",
  "price": 13.5
},
{
  "id":10,
  "title": "Tom Sawyer",
  "aid":2,
  "author": "Mark Twain",
  "year": 1862,
  "edition": "Random House",
  "genre":"Romance novel",
  "img":"https://img.chirpbooks.com/image/fetch/f_auto,q_auto:eco,w_700,h_700/https%3A//images.findawayworld.com/v1/image/cover/CD047524%3Faspect%3D1%3A1%26width%3D960",
  "info":"The Adventures of Tom Sawyer is an 1876 novel by Mark Twain about a boy growing up along the Mississippi River. It is set in the 1840s in the town of St. Petersburg, which is based on Hannibal, Missouri, where Twain lived as a boy. ",
  "price": 7.75
},
{
  "id":11,
  "title": "A Room of One's Own",
  "aid":7,
  "author": "Virginia Woolf",
  "year": 1922,
  "genre":"Romance novel",
  "img":"https://images-na.ssl-images-amazon.com/images/I/81nYAOd3IXL.jpg",
  "info":"A Room of One's Own is an extended essay by Virginia Woolf, first published in September 1929. The work is based on two lectures Woolf delivered in October 1928 at Newnham College and Girton College, women's constituent colleges at the University of Cambridge. ",
  "edition": "Penguin",
  "price": 29
},
{
  "id":12,
  "title": "One Hundred Years of Solitude",
  "aid":8,
  "author": "Marquez",
  "year": 1967,
  "edition": "Harper  Perennial",
  "genre":"Romance novel",
  "img":"https://images-na.ssl-images-amazon.com/images/I/71IWwBoDNsL.jpg",
  "info":"One Hundred Years of Solitude is a 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the town of Macondo. The novel is often cited as one of the supreme achievements in literature.",
  "price": 14.00
}

];
/* GET users listing. */
router.get('/', function(req, res, next) {
 //console.log(books.length);
  res.render('books',{head:"Books",books:books});
});
router.get('/:id', function(req, res, next) {
  var id=req.params.id
  var book=books[id]
  console.log(book); 
  res.render('book',{head:books[id].title,book:book});
});

module.exports = router;
