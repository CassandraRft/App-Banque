const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URI,{ ssl : true, dbName: "banque" })
.then(() => console.log('MongoDB connected !'))
.catch(() => console.log('Erreur with MongoDB connection'));