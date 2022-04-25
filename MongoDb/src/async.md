<!-- @format -->

// Here because we are not using await it will run first termino connection and later Succesfully conneected to mongoDb

// const connectToMongoose = async () => {
// console.log("inicio");
// mongoose
// .connect(mongoConnection, {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// // useCreateIndex: true,
// })
// .then(() => {
// console.log("Successfully connected to Mongodb");
// });

// return console.log("termino conecction");
// };

// The correct way to use async await
// const connectToMongoose = async () => {
// console.log("inicio");
// await mongoose
// .connect(mongoConnection, {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// // useCreateIndex: true,
// })
// .then(() => {
// console.log("Successfully connected to Mongodb");
// });

// return console.log("termino conecction");
// };
