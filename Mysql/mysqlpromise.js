/** @format */

// Database Connection
const connectToMySQL = async () => {
  console.log("hola 1");
  const sequelize = await new Promise((resolve) => {
    const sequelizes = new Sequelize(config.mysql.options)
      .authenticate()
      .then(() => {
        console.log("Succesfully connect to MYSQL");
      })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });
    console.log(typeof sequelize); // it's an object, its the reazon it doesnt truncate the code

    resolve(sequelizes);
  });

  console.log("hola 2");
  return sequelize;
};

// const mysql = connectToMySQL();
// config.mysql.client = mysql;

(async () => {
  console.log("conection done");
  const mysql = await connectToMySQL();
  console.log("conection done 11");
  config.mysql.client = mysql;
  const order = new OrderService(config.mysql.client);
})();
