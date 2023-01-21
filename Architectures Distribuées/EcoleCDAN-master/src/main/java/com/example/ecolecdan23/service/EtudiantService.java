package com.example.ecolecdan23.service;

import com.example.ecolecdan23.dto.EtudiantDto;
import com.example.ecolecdan23.dto.InputEtudiantDto;
import com.example.ecolecdan23.entity.EtudiantEntity;
import com.example.ecolecdan23.repository.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;

@Service
public class EtudiantService implements IServiceEtudiant{

    @Autowired
    private EtudiantRepository repository;

    @Override
    public Integer calculerAge(LocalDate date_naisse) {
        return Period.between(date_naisse, LocalDate.now()).getYears();
    }

    @Override
    public EtudiantDto toDto(EtudiantEntity entity) {
        EtudiantDto dto = new EtudiantDto();
        dto.setDisplay_name(entity.getPrenom() + " " + entity.getNom());
        dto.setAge(calculerAge(entity.getDate_naissance()));
        dto.setClasse(entity.getClasse());
        return dto;
    }

    public  Integer ajouterEtudiant(InputEtudiantDto dto) {
        EtudiantEntity entity = new EtudiantEntity();
        entity.setNom(dto.getNom());
        entity.setPrenom(dto.getPrenom());
        entity.setClasse(dto.getClasse());
        LocalDate date = LocalDate.parse(dto.getDate());
        entity.setDate_naissance(date);

        try {
            repository.saveAndFlush(entity);
        } catch (Exception e) {
            return null;
        }

        return entity.getID();
    }

    @Override
    public Boolean exist(Integer id) {
        return repository.existsById(id);
    }

    @Override
    public Boolean delete(Integer id) {
        try {
            repository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
