package com.example.ecolecdan23.service;

import com.example.ecolecdan23.dto.InputEtudiantDto;
import com.example.ecolecdan23.dto.InputMatiereDto;
import com.example.ecolecdan23.dto.MatiereDto;
import com.example.ecolecdan23.entity.MatiereEntity;

public interface IServiceMatiere {
    MatiereDto toDto (MatiereEntity entity);

    Integer ajouterMatiere(InputMatiereDto dto);
    Boolean exist(Integer id);

    Boolean delete(Integer id);
}
