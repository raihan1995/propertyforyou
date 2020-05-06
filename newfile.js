console.log("is file running?");
const { Client } = require("pg");
const client = new Client({
    user: "postgres",
    password: "password",
    host: "127.0.0.1",
    port: 5432,
    database: "propertyforyou",
});
async function run() {
    console.log("is function running??");
    try {
        await client.connect()
        console.log(await client.query('SELECT 1'))
    } catch (e) {
        console.error(e)
    }
}
run()
    .then(() => console.log("FINISHED"))
    .catch(e => console.log(e))