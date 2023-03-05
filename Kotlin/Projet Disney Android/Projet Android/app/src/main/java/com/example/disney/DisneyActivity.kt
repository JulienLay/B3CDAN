package com.example.disney

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import androidx.core.view.isVisible
import androidx.lifecycle.ViewModelProvider
import com.example.disney.databinding.ActivityDisneyBinding
import com.squareup.picasso.Picasso

class DisneyActivity : AppCompatActivity() {
    //Créer l'IHM. Lazy création à la 1er utilisation
    //Attention à bien mettre le setContentView(binding.root) dans le onCreate
    val binding by lazy { ActivityDisneyBinding.inflate(layoutInflater) }
    val model by lazy { ViewModelProvider(this).get(DisneyViewModel::class.java) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(binding.root)

        //Abonnement au live data
        observe()

        model.getAllChars()
        // On génère un personnage aléatoire
        model.loadRandomChar((6..7526).random())
    }

    fun observe() {
        //Chaque fois qu'on fait un postValue déclanche l'observer
        //Idem à l'abonnement de l'observation
        model.errorMessage.observe(this) {
            if (it.isNotBlank()) {
                binding.tvError.text = it
                binding.tvError.isVisible = true
            } else {
                binding.tvError.isVisible = false
            }
        }

        model.dataList.observe(this) {

            val list :MutableList<String> = ArrayList()

            for (i:Int in 0..7437)
                list.add("${it?.data?.get(i)?.name}")

            val adapter = ArrayAdapter(this, androidx.appcompat.R.layout.support_simple_spinner_dropdown_item, list)

            binding.spinnerCharacters.adapter = adapter
        }

        binding.btLoad.setOnClickListener {
            model.dataRandom.observe(this) {
                // Name
                if (it?.name != "") {
                    binding.tvName.text = "Name : ${it?.name}"
                } else {
                    binding.tvName.text = "Name : No name"
                }

                // Films
                val listFilms = it?.films
                var strFilms = "Films : "
                if (!listFilms!!.isEmpty()) {
                    for (i in listFilms.indices) {
                        strFilms += listFilms.get(i) + ", "
                    }
                } else {
                    strFilms += "No film"
                }
                binding.tvFilms.text = strFilms

                // Short Films
                val listShortFilms = it?.shortFilms
                var strShortFilms = "Short films : "
                if (!listShortFilms!!.isEmpty()) {
                    for (i in listShortFilms.indices) {
                        strShortFilms += listShortFilms.get(i) + ", "
                    }
                } else {
                    strShortFilms += "No short film"
                }
                binding.tvShortFilms.text = strShortFilms

                // TV Shows
                val listTVShows = it?.tvShows
                var strTVShows = "TV Shows : "
                if (!listTVShows!!.isEmpty()) {
                    for (i in listTVShows.indices) {
                        strTVShows += listTVShows.get(i) + ", "
                    }
                } else {
                    strTVShows += "No TV Show"
                }
                binding.tvTVShows.text = strTVShows

                // Video Games
                val listVideoGames = it?.videoGames
                var strVideoGames = "Video games : "
                if (!listVideoGames!!.isEmpty()) {
                    for (i in listVideoGames.indices) {
                        strVideoGames += listVideoGames.get(i) + ", "
                    }
                } else {
                    strVideoGames += "No Video Game"
                }
                binding.tvVideoGames.text = strVideoGames

                // Park Attractions
                val listParkAttractions = it?.parkAttractions
                var strParkAttractions = "Park attractions : "
                if (!listParkAttractions!!.isEmpty()) {
                    for (i in listParkAttractions.indices) {
                        strParkAttractions += listParkAttractions.get(i) + ", "
                    }
                } else {
                    strParkAttractions += "No Park Attractions"
                }
                binding.tvParkAttractions.text = strParkAttractions

                // Image
                val imageURL = "${it?.imageUrl}"
                val imageView = binding.imageFromAPI
                Picasso.get().load(imageURL).into(imageView)
            }
        }

        model.runInProgress.observe(this) {
            binding.progressBar.isVisible = it
        }
    }
}