const mongoose = require("mongoose");

exports.connectDatabase = () => {

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
    
  })

  .then(() => console.log(`Database Connected`))
  .catch((err) => console.log(err));
  // mongoose
  //   .createConnection(process.env.MONGO_URI)
  //   .then((con) => console.log(`Database Connected: ${con.connection.host}`))
  //   .catch((err) => console.log(err));
};
