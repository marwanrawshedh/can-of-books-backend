
const mongoose = require('mongoose');





 mongoose.connect(process.env.URL);
  const BookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String,
  })

  let BookName = mongoose.model('bookname', BookSchema);
  // seedData();


async function seedData() {
  const almuwatta = new BookName({
    title: "Al Muwatta",
    description: " Muwatta Imam Malik of Imam Malik written in the 8th-century, is the earliest collection of hadith texts comprising the subjects of Islamic law, compiled by the Imam, Malik ibn Anas.",
    status: "avaliable",
    email: "marwansalem55@yahoo.com",
  });

  const theRisala = new BookName({
    title: "The Risāla",
    description: " book of the communication on the foundations of comprehension  is a seminal text on the principles of Islamic jurisprudence",
    status: "avaliable",
    email: "marwansalem55@yahoo.com",
  });
  const alMusnad = new BookName({
    title: "al Musnad",
    description: " Ahmad ibn Hanbal is a collection of hadith compiled by the Islamic scholar Ahmad ibn Hanbal to whom the Hanbali fiqh is attributed.",
    status: "avaliable",
    email: "marwansalem55@yahoo.com",
  });
  console.log(BookName)
  await almuwatta.save();
  await theRisala.save();
  await alMusnad.save();
}


// function getBook(req, res) {

//     const frontemail = req.query.frontemail;
   
//     BookName.find({ email: frontemail }, (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       else {
//         res.send(result);
//       }
//     })
//   }
  // module.exports=getBook
  module.exports=BookName;