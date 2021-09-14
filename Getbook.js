
let BookName=require('./Schema')
function getBook(req, res) {

    // const email = req.query.email;
    const frontemail = "marwansalem55@yahoo.com";
    BookName.find({ email: frontemail }, (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        res.send(result);
      }
    })
  }
  module.exports=getBook