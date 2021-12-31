var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', { head: 'Login' });
});
router.post('/',function(req,res){
    user=req.body;
    console.log(user)
    if(user.name=='admin' && user.password=='12345'){
        res.redirect('/add')
    }
    else{
        res.render('login',{head:'Login Error. Retry Again!'})
    }
})

module.exports = router;