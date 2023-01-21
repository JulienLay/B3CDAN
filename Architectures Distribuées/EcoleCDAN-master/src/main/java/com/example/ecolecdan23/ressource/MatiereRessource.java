package com.example.ecolecdan23.ressource;

import com.example.ecolecdan23.dto.InputMatiereDto;
import com.example.ecolecdan23.entity.MatiereEntity;
import com.example.ecolecdan23.enumeration.TypeMatiere;
import com.example.ecolecdan23.repository.MatiereRepository;
import com.example.ecolecdan23.service.IServiceMatiere;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("Matiere")
public class MatiereRessource {
    @Autowired
    private MatiereRepository repository;

    @Autowired
    private IServiceMatiere serviceMatiere;

    @GetMapping("get/{id}")
    public ResponseEntity get(@PathVariable String id) {
        Integer ID;
        try {
            ID = Integer.parseInt(id);
        } catch (NumberFormatException e) {
            return new ResponseEntity("L'ID n'a pas le bon format !", HttpStatus.BAD_REQUEST);
        }

        if(!serviceMatiere.exist(ID)){
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }

        MatiereEntity entity;
        try {
            entity = repository.findById(ID).get();
        }catch (Exception e) {
            return new ResponseEntity("Le serveur SQL a émis une exception !", HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(serviceMatiere.toDto(entity), HttpStatus.OK);
    }

    @PostMapping("add")
    public ResponseEntity ajouter(@RequestBody InputMatiereDto dto) {

        // On vérifie le type
        try {
            TypeMatiere.valueOf(dto.getType());
        } catch (IllegalArgumentException e) {
            return new ResponseEntity("Le type est incorrect !", HttpStatus.BAD_REQUEST);
        }

        Integer ID = serviceMatiere.ajouterMatiere(dto);

        if (null == ID) {
            return new ResponseEntity("L'enregistrement ne s'est pas fait !", HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(ID, HttpStatus.BAD_REQUEST);
    }

    @GetMapping("delete/{id}")
    public ResponseEntity supprimer(@PathVariable String id) {
        Integer ID;
        try {
            ID = Integer.parseInt(id);
        } catch (NumberFormatException e) {
            return new ResponseEntity("L'ID n'a pas le bon format !", HttpStatus.BAD_REQUEST);
        }

        if(!serviceMatiere.exist(ID)){
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }

        boolean result = serviceMatiere.delete(ID);

        if (!result) {
            return new ResponseEntity("La matière n'a pas été supprimée !", HttpStatus.NOT_MODIFIED);
        }
        return new ResponseEntity(HttpStatus.OK);
    }
}
