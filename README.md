# inventory-application

Inventory Application based on The Odin Project's NodeJS Course

Project: Inventory Application

Technologies used: HTMl, CSS, Javascript, NodeJS, Express, EJS, PostgreSQL

GAME MANAGEMENT APP

// Use DBML to define my database structure
// Docs: https://dbml.dbdiagram.io/docs

Table game {
game_id int [primary key, increment]
title varchar(255) [not null]
}

Table genre {
genre_id int [primary key, increment]
name varchar(100) [not null, unique]
}

Table developer {
developer_id int [primary key, increment]
name varchar(255) [not null, unique]
}

Table game_genre {
game_id int [ref: > game.game_id]
genre_id int [ref: > genre.genre_id]
Primary Key (game_id, genre_id) // Composite primary key
}

Table game_developer {
game_id int [ref: > game.game_id]
developer_id int [ref: > developer.developer_id]
Primary Key (game_id, developer_id) // Composite primary key
}
