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
  ('Counter-Strike 2'),
  ('Red Dead Redemption 2'),
  ('Street Fighter 6');

CREATE TABLE IF NOT EXISTS genres (
  genre_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 100 )
);

INSERT INTO genres (name)
VALUES
  ('Action'),
  ('Shooter'),
  ('Open World'),
  ('Adventure'),
  ('Singleplayer'),
  ('Multiplayer'),
  ('Fighting');

CREATE TABLE IF NOT EXISTS developers (
  developer_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 )
);

INSERT INTO developers (name)
VALUES
  ('Capcom'),
  ('Valve'),
  ('Rockstar Games');

CREATE TABLE IF NOT EXISTS game_genre (
  game_id INTEGER REFERENCES games(game_id) ON DELETE CASCADE,
  genre_id INTEGER REFERENCES genres(genre_id) ON DELETE CASCADE,
  PRIMARY KEY (game_id, genre_id)
);

INSERT INTO game_genre (game_id, genre_id)
VALUES
  (1, 1),   -- Monster Hunter Wilds is Action
  (1, 4),   -- Monster Hunter Wilds is Adventure
  (2, 2),   -- Counter-Strike 2 is Shooter
  (2, 6),   -- Counter-Strike 2 is Multiplayer
  (3, 1),   -- Red Dead Redemption 2 is Action
  (3, 3),   -- Red Dead Redemption 2 is Open World
  (3, 4),   -- Red Dead Redemption 2 is Adventure
  (3, 5),   -- Red Dead Redemption 2 is Singleplayer
  (4, 7),   -- Street Fighter 6 is Fighting
  (4, 6);   -- Street Fighter 6 is Multiplayer

CREATE TABLE IF NOT EXISTS game_developer (
  game_id INTEGER REFERENCES games(game_id) ON DELETE CASCADE,
  developer_id INTEGER REFERENCES developers(developer_id) ON DELETE CASCADE,
  PRIMARY KEY (game_id, developer_id)
);

INSERT INTO game_developer (game_id, developer_id)
VALUES
  (1, 1),   -- Monster Hunter Wilds by Capcom
  (2, 2),   -- Counter-Strike 2 by Valve
  (3, 3),   -- Red Dead Redemption 2 by Rockstar Games
  (4, 1);   -- Street Fighter 6 by Capcom
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
