var express = require('express');
var router = express.Router();
const fileUpload = require('express-fileupload');
router.use(fileUpload());
router.get('/', function(req, res, next) {
    res.render('add', { head: 'Contribute to the Library!',form:null });
  });
  
  router.get('/book', function(req, res, next) {
    res.render('add', { head: 'Enter New Book Detail', form:'book'});
  });
  
  router.post('/book', function(req, res, next) {
      var book=req.body;
      console.log(book)
      console.log(req.files)

      if (req.files) {
        let file = req.files.cover
        const fileName = book.title
        file.mv(`${__dirname}/../public/images/${fileName}.jpg`, err => {
            if (err) {
                console.log(err)
                res.send('There is error')
            } else {
               
                // res.send('uploaded successfully')
            }
        })
    } else {
       // res.send('There are no files')
    }
    book.img=`/images/${book.title}.jpg`;
    res.render('book', { head: book.title,book:book});
  });
  router.get('/author', function(req, res, next) {
    res.render('add', { head: 'Enter New Author Detail',form:'author' });
  });
  router.post('/author', function(req, res, next) {
    var author=req.body;
    console.log(author)
    if (req.files) {
        let file = req.files.photo
        const fileName = author.pen
        file.mv(`${__dirname}/../public/images/${fileName}.jpg`, err => {
            if (err) {
                console.log(err)
                res.send('There is error')
            }
        })
    } 
    author.img=`/images/${author.pen}.jpg`;
  res.render('author', { head: author.pen,author:author});
});
  module.exports = router;