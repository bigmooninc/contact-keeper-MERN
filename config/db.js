const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Using promises

// const connectDB = () => {
//   mongoose
//     .connect(db, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     })
//     .then(() => console.log('mongo db connected'))
//     .catch(err => {
//       console.error(err.message);
//       process.exit(1);
//     });
// };

// Using async await

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('Mongo DB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
