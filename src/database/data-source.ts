import { DataSource } from "typeorm"

const AppDataSource = new DataSource( {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "mysecretpassword",
    database: "yeahstock",
    migrations: ["./src/database/migrations/*.ts"],
    entities: ["./src/modules/**/entities/*.ts"],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    });

   export default AppDataSource;