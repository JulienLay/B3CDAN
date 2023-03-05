package com.example.disney

/* -------------------------------- */
// API Disney
/* -------------------------------- */

data class CharactersBean(
    var data: List<CharacterBean>,
    var count:Int,
)

data class CharacterBean(
    val imageUrl: String,
    val name: String,
    val films: List<String>,
    val shortFilms: List<String>,
    val tvShows: List<String>,
    val videoGames: List<String>,
    val parkAttractions: List<String>,
)