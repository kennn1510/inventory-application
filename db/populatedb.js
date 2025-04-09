const { Client } = require("pg");
require("dotenv/config");

const SQL = `
CREATE TABLE IF NOT EXISTS games (
  game_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 )
);

INSERT INTO games ( title )
VALUES 
  ('Monster Hunter Wilds'),
  ('Zelda'),
  ('Red Dead Redemption 2');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
