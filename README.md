# inventory-application

Inventory Application based on The Odin Project's NodeJS Course

Project: Inventory Application

Technologies used: HTMl, CSS, Javascript, NodeJS, Express, EJS, PostgreSQL

GAME MANAGEMENT APP

// Use DBML to define my database structure
// Docs: https://dbml.dbdiagram.io/docs

Table games {
game_id int [primary key, increment]
title varchar(255) [not null]
}

Table genres {
genre_id int [primary key, increment]
name varchar(100) [not null, unique]
}

Table developers {
developer_id int [primary key, increment]
name varchar(255) [not null, unique]
}

Table game_genres {
game_id int [ref: > games.game_id]
genre_id int [ref: > genres.genre_id]
Primary Key (game_id, genre_id) // Composite primary key
}

Table game_developers {
game_id int [ref: > games.game_id]
developer_id int [ref: > developers.developer_id]
Primary Key (game_id, developer_id) // Composite primary key
}
