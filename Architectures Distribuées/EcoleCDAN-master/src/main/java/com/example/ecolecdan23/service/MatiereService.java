package com.example.ecolecdan23.service;

import com.example.ecolecdan23.dto.InputMatiereDto;
import com.example.ecolecdan23.dto.MatiereDto;
import com.example.ecolecdan23.entity.MatiereEntity;
import com.example.ecolecdan23.repository.MatiereRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatiereService implements IServiceMatiere{

    @Autowired
    private MatiereRepository repository;

    @Override
    public MatiereDto toDto(MatiereEntity entity) {
        MatiereDto dto = new MatiereDto();
        dto.setNom(entity.getNom());
        dto.setType(entity.getType());
        return dto;
    }

    @Override
    public Integer ajouterMatiere(InputMatiereDto dto) {
        MatiereEntity entity = new MatiereEntity();
        entity.setNom(dto.getNom());
        entity.setType(dto.getType());

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
