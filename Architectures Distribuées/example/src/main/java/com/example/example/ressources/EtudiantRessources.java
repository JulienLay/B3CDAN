package com.example.example.ressources;

import com.example.example.dto.EtudiantDto;
import com.example.example.dto.EtudiantMoyenneDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Period;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("Etudiant")
public class EtudiantRessources {

    @GetMapping("exemple")
    public String helloWorld() {
        return "Bonjour";
    }

    @GetMapping("exemple2")
    public ResponseEntity<String> hello2() {
        ResponseEntity reponse = new ResponseEntity("deuxieme exemple", HttpStatus.NOT_FOUND);
        return reponse;
    }

    @GetMapping("exemple3/{prenom}")
    public ResponseEntity<String> exemple3(@PathVariable String prenom) {
        return new ResponseEntity<>("je m'appelle " + prenom, HttpStatus.OK);
    }

    @GetMapping("exemple4")
    public ResponseEntity<String> exemple4(@RequestParam String prenom, int age) {
        String message = "Je m'appelle " + prenom + " et j'ai " + age + " ans.";
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @PostMapping("exemple5")
    public ResponseEntity<String> toto(@RequestBody EtudiantDto dto) {
        int age = Period.between(dto.getDate_naissance(), LocalDate.now()).getYears();

        String message = "Je m'appelle " + dto.getPrenom() + " " + dto.getNom() + " et j'ai " + age + " ans.";
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    // Exercices

    @PostMapping ("avg")
    public ResponseEntity moyenne (@RequestBody EtudiantDto dto){

        // calcul de la moyenne
        float sum =0;

        for (int i =0; i<dto.getNotes().size(); i++){

            sum += dto.getNotes().get(i);
        }
        float avg = sum/dto.getNotes().size();

        EtudiantMoyenneDto reponse = new EtudiantMoyenneDto();

        reponse.setDiplay_name(dto.getPrenom() + " " +dto.getNom() );
        reponse.setMoyenne(avg);

        return new ResponseEntity(reponse, HttpStatus.OK);
    }

    @PostMapping("minMax")
    public ResponseEntity<Float> getMinMax(@RequestBody EtudiantDto dto, @RequestParam String valeur){
        List<Float> sortedList = dto.getNotes();
        Collections.sort(sortedList);
        float response = 0;
        if (valeur.equals("min")){
            response = sortedList.get(0);
        } else if (valeur.equals("max")) {
            response = sortedList.get(sortedList.size()-1);
        }else {
            return new ResponseEntity("Parametre incorecte", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(response, HttpStatus.OK);
    }
}