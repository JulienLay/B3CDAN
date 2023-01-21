package com.example.ecolecdan23.service;

import com.example.ecolecdan23.dto.EtudiantDto;
import com.example.ecolecdan23.dto.InputEtudiantDto;
import com.example.ecolecdan23.entity.EtudiantEntity;
import org.springframework.data.relational.core.sql.In;

import java.time.LocalDate;

public interface IServiceEtudiant {

    Integer calculerAge(LocalDate date_naisse);

    EtudiantDto toDto (EtudiantEntity entity);

    Integer ajouterEtudiant(InputEtudiantDto dto);

    Boolean exist(Integer id);

    Boolean delete(Integer id);
}
