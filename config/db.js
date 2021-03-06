const mongoose = require("mongoose");

const config = require("config");

const db = config.get("mongoURI");

// Connecting without async await

// const connectDB = () => {
// 	mongoose
// 		.connect(db, {
// 			useNewUrlParser: true,
// 			useCreateIndex: true,
// 			useFindAndModify: false,
// 		})
// 		.then(() => console.log("MongoDB Connected"))
// 		.catch((err) => {
// 			console.error(err.message);
// 			process.exit(1);
// 		});
// };

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		});
		console.log("MongoDB Connected...");
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
