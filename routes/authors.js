var express = require('express');
var router = express.Router();


authors=[
    { "aid":0,
    "pen":'J.K. Rowling, Robert Galbraith',
      "name":"Joanne Rowling",
      "books":'Harry Potter, Fantastic Beasts'  ,
      "img":'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F20%252F2016%252F01%252Fjk-rowling-1024.jpg&q=85',
      "bio":'Joanne Rowling (born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, and screenwriter. She is author of the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,[2][3] becoming the best-selling book series in history.[4] The books are the basis of a popular film series, over which Rowling had overall approval on the scripts[5] and was a producer on the final films.[6] She also writes crime fiction under the pen name Robert Galbraith.',
    },
    { "aid":1,
    "pen":'William Shakespeare',
      "name":"William Shakespeare",
      "books":'Macbeth, Hamlet, Romeo and Juliet, Julius Caeser,King Lear, Twelfth Night'  ,
      "bio":" William Shakespeare was an English playwright, poet and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist. He is often called England's national poet and the 'Bard of Avon'.",
      "img":'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/1200px-Shakespeare.jpg',
    },
    { 
    "aid":2,
    "pen":'Mark Twain',
    "name":"Samuel Langhorne Clemens",
    "books":'The Adventures of Tom Sawyer,Adventures of Huckleberry Finn'  ,
    "bio":' Samuel Langhorne Clemens, known by his pen name Mark Twain, was an American writer, humorist, entrepreneur, publisher, and lecturer. He was lauded as the "greatest humorist the United States has produced," and William Faulkner called him "the father of American literature"',
    "img":'https://media.npr.org/assets/artslife/arts/2010/11/mark-twain/mark-twain-6fa45e42400eea8cac3953cb267d66a33825a370-s1100-c50.jpg',
    },
    { 
      "aid":3,
    "pen":'Charles Dickens',
    "name":"Charles John Huffam Dickens",
    "books":'Oliver Twist,Great Expectations, David Copperfield'  ,
    "bio":"Charles John Huffam Dickens FRSA was an English writer and social critic. He created some of the world's best-known fictional characters and is regarded by many as the greatest novelist of the Victorian era.",
    "img":'https://upload.wikimedia.org/wikipedia/commons/a/aa/Dickens_Gurney_head.jpg',
    },
    { 
    "aid":4,
    "pen":'Jane Austen',
    "name":"Jane Austen",
    "books":'Northanger Abbey'  ,
    "bio":"Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century. Austen's plots often explore the dependence of women on marriage in the pursuit of favourable social standing and economic security.",
    "img":'https://cdn.britannica.com/w:400,h:300,c:crop/12/172012-050-A9AFF8AF/Jane-Austen-Cassandra-engraving-portrait-1810.jpg',
    },
    { 
    "aid":5,
    "pen":'Michael Cunnningham',
    "name":"Michael Cunnningham",
    "books":'The Hours'  ,
    "bio":'Michael Cunningham is an American novelist and screenwriter. He is best known for his 1998 novel The Hours, which won the Pulitzer Prize for Fiction and the PEN/Faulkner Award in 1999. Cunningham is a senior lecturer of creative writing at Yale University. ',
    "img":'https://bostonglobe-prod.cdn.arcpublishing.com/resizer/bt5uQKNFcCkZt0QGM0BHDrJ5JQ8=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/IN4TYWG2OQI6LFH57SB2HZVOS4.jpg',
  },
  { 
    "aid":6,
    "pen":'Leo Tolstoy',
    "name":"Count Lev Nikolayevich Tolstoy",
    "books":'War and Peace,Anna Karenina'  ,
    "bio":'Count Lev Nikolayevich Tolstoy, usually referred to in English as Leo Tolstoy, was a Russian writer who is regarded as one of the greatest authors of all time. He received nominations for the Nobel Prize in Literature every year from 1902 to 1906 and for the Nobel Peace Prize in 1901, 1902, and 1909.  ',
    "img":'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkRdfRvcojBnbsUcySv-9eQd93wIVPdkrSBrcV-Pp-mdwuyl9A',
  },
  { 
    "aid":7,
    "pen":'Virginia Woolf',
    "name":"Adeline Virginia Woolf ",
    "books":"Mrs. Dalloway,A Room of One's Own,"  ,
    "bio":'Adeline Virginia Woolf was an English writer, considered one of the most important modernist 20th-century authors and a pioneer in the use of stream of consciousness as a narrative device. ',
    "img":'https://mastersreview.com/files/2015/02/virginia-woolf.jpg',
  },
  { 
    "aid":8,
    "pen":'Marquez',
    "name":"Gabriel García Márquez",
    "books":'One Hundred Years of Solitude'  ,
    "bio":'Gabriel García Márquez was a Colombian novelist, short-story writer, screenwriter, and journalist, known affectionately as Gabo or Gabito throughout Latin America.',
    "img":'https://images2.minutemediacdn.com/image/upload/c_crop,h_427,w_634,x_6,y_0/v1554931535/shape/mentalfloss/gabrielgarciamarquez.png?itok=g5Og9yK1',
  },
  { 
    "aid":9,
    "pen":'J.R. Tolkien',
    "name":"John Ronald Reuel Tolkien",
    "books":'Lord of the Rings Trilogy,The Hobbit'  ,
    "bio":'John Ronald Reuel Tolkien CBE FRSL was an English writer, poet, philologist, and academic, best known as the author of the high fantasy works The Hobbit and The Lord of the Rings. ',
    "img":'https://cdn.britannica.com/w:400,h:300,c:crop/65/66765-050-63A945A7/JRR-Tolkien.jpg',
  },

  

]
router.get('/:id', function(req, res, next) {
var id=req.params.id;
var auth=authors[id];
  res.render('author', { head: auth.pen,author:auth });
});
router.get('/', function(req, res, next) {
  res.render('authors', { head: 'authors' });
});

module.exports = router;
