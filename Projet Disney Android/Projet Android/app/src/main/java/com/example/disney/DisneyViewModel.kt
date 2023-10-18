package com.example.disney

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.disney.RequestUtils.getAllCharacters
import kotlin.concurrent.thread

class DisneyViewModel: ViewModel() {
    var errorMessage = MutableLiveData("")
    var runInProgress = MutableLiveData(false)
    var dataRandom = MutableLiveData<CharacterBean?>()
    var dataList = MutableLiveData<CharactersBean?>()

    // Charger un personnage aléatoire à partir de son ID généré aléatoirement
    fun loadRandomChar(id : Int) {
        // Reset de donnée
        // Le post value déclanche l'observer
        errorMessage.postValue("")
        dataRandom.postValue(null)
        runInProgress.postValue(true)

        thread {
            try {
                dataRandom.postValue(RequestUtils.loadRandomCharacter(id))

            } catch (e: Exception) {
                e.printStackTrace()
                errorMessage.postValue("Une erreur est survenue :  ${e.message}")
            }

            runInProgress.postValue(false)
        }
    }

    // Récupérer les personnages de l'API
    fun getAllChars(){
        // Reset de donnée
        // Le post value déclanche l'observer
        errorMessage.postValue("")
        dataList.postValue(null)
        runInProgress.postValue(true)

        thread {
            try {
                dataList.postValue(getAllCharacters())
            } catch (e: Exception) {
                e.printStackTrace()
                errorMessage.postValue("Une erreur est survenue :  ${e.message}")
            }

            runInProgress.postValue(false)
        }
    }
}