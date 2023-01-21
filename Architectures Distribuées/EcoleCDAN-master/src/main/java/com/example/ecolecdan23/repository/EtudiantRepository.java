package com.example.ecolecdan23.repository;

import com.example.ecolecdan23.entity.EtudiantEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EtudiantRepository extends JpaRepository<EtudiantEntity, Integer>  {
}
