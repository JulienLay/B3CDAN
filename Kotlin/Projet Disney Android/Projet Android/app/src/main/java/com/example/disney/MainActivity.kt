package com.example.disney

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import com.example.disney.databinding.ActivityMainBinding

const val MENU_ITEM_API = 18
const val MENU_ITEM_CREDIT = 19

class MainActivity : AppCompatActivity() {

    //Créer l'IHM. Lazy création à la 1er utilisation
    val binding by lazy { ActivityMainBinding.inflate(layoutInflater) }

    //Surcharge de onCreate de AppCompatActivity
    //override indique que la méthode est une surcharge
    //Création de l'écran
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        //On affiche l'IHM qu'on a créé
        setContentView(binding.root)

        binding.btCredit.setOnClickListener {
            val intent = Intent(this, DisneyCreditActivity::class.java)
            startActivity(intent)
        }

        binding.btAPIDisney.setOnClickListener {
            val intent = Intent(this, DisneyActivity::class.java)
            startActivity(intent)
        }
    }

    //Callback de la création de menu
    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menu.add(0, MENU_ITEM_API, 0, "API Disney")
        menu.add(0, MENU_ITEM_CREDIT, 0, "Credit")

        return super.onCreateOptionsMenu(menu)
    }

    //Callback des clics sur les menu
    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        if(item.itemId == MENU_ITEM_API) {
            val intent = Intent(this, DisneyActivity::class.java)
            startActivity(intent)
        } else if (item.itemId == MENU_ITEM_CREDIT) {
            val intent = Intent(this, DisneyCreditActivity::class.java)
            startActivity(intent)
        }

        return super.onOptionsItemSelected(item)
    }
}