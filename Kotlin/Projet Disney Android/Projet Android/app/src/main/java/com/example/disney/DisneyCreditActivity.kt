package com.example.disney

import android.net.Uri
import android.os.Bundle
import android.widget.VideoView
import androidx.appcompat.app.AppCompatActivity
import com.example.disney.databinding.ActivityDisneyCreditBinding
import android.widget.MediaController
import android.widget.Toast

class DisneyCreditActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val binding = ActivityDisneyCreditBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val mediaController = MediaController(this)

        val videoView = findViewById<VideoView>(R.id.vvDisney)
        videoView.setMediaController(mediaController)

        try {
            videoView.setVideoURI(Uri.parse("android.resource://$packageName/${R.raw.videojoyca}"))
            videoView.requestFocus()
            videoView.start()
            videoView.setOnCompletionListener {
                videoView.start()
            }
        } catch (e: Exception) {
            e.printStackTrace()
            Toast.makeText(this, "Error playing video", Toast.LENGTH_SHORT).show()
        }
    }
}