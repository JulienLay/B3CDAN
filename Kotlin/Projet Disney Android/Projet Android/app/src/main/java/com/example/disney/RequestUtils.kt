package com.example.disney

import com.google.gson.Gson
import okhttp3.OkHttpClient
import okhttp3.Request

const val URL_DISNEY_ID = "https://api.disneyapi.dev/characters/"
const val URL_DISNEY_CHARACTER = "https://api.disneyapi.dev/character"

object RequestUtils {
    val client = OkHttpClient()
    val gson = Gson()

    // Charger un personnage aléatoire à partir de son ID généré aléatoirement
    fun loadRandomCharacter(id:Int) : CharacterBean {
        //Contrôle de donnée
        //construire requete
        //Faire la requete
        val json = sendGet(URL_DISNEY_ID + id)
        //Parse le résultat
        var character = gson.fromJson(json, CharacterBean::class.java)

        return character
    }

    // Récupérer les personnages de l'API
    fun getAllCharacters() : CharactersBean {
        //Contrôle de donnée
        //construire requete
        //Faire la requete
        val json = sendGet(URL_DISNEY_CHARACTER)
        //Parse le résultat
        var characters = gson.fromJson(json, CharactersBean::class.java)

        return characters
    }

    //Méthode qui prend en entrée une url, execute la requête et retourne le code HTML/JSON reçu
    fun sendGet(url: String): String {
        println("url : $url")
        //Création de la requête
        val request = Request.Builder().url(url).build()
        //Execution de la requête
        return client.newCall(request).execute().use { //it:Response
            //use permet de fermer la réponse qu'il y ait ou non une exception
            //Analyse du code retour
            if (!it.isSuccessful) {
                throw Exception("Réponse du serveur incorrect :${it.code}")
            }
            //Résultat de la requête
            it.body.string()
        }
    }

}
